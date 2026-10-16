"""Optional offline translation draft tool. Production builds use committed JSON.
Uses Argos Translate model packages from the official model index.
Run: python scripts/translate-content.py --models /path/to/models
"""
import os
os.environ.setdefault('OMP_NUM_THREADS','1')
import argparse,concurrent.futures,html,json,re,time
from pathlib import Path
import ctranslate2,sentencepiece
parser=argparse.ArgumentParser();parser.add_argument('--models',required=True);args=parser.parse_args()
root=Path(args.models);base=Path('content');langs=['de','fr','es','it']
def split(s):return re.split(r'(?<=[.!?])\s+(?=[A-Z“"0-9])',s)
def run(lang):
 started=time.time();model=next((root/lang).rglob('model.bin')).parent.parent
 if (model/'sentencepiece.model').exists():
  sp=sentencepiece.SentencePieceProcessor(model_file=str(model/'sentencepiece.model'));encode=lambda s:sp.encode(s,out_type=str);decode=sp.decode
 else:
  from sacremoses import MosesTokenizer,MosesDetokenizer,MosesPunctNormalizer
  from subword_nmt.apply_bpe import BPE
  tok=MosesTokenizer('en');detok=MosesDetokenizer(lang);normal=MosesPunctNormalizer('en')
  with open(model/'bpe.model') as f:bpe=BPE(f)
  encode=lambda s:bpe.segment_tokens(tok.tokenize(normal.normalize(s)))
  decode=lambda t:detok.detokenize(' '.join(t).replace('@@ ','').split(' '))
 tr=ctranslate2.Translator(str(model/'model'),device='cpu',compute_type='int8',intra_threads=1,inter_threads=1)
 pending=json.loads((base/f'pending-{lang}.json').read_text());saved=json.loads((base/f'{lang}.json').read_text());cache={}
 sentences=list(dict.fromkeys(s for row in pending for s in split(row['en'])))
 for start in range(0,len(sentences),24):
  batch=sentences[start:start+24];tokens=[encode(s.replace('Hipobuy','HIPOBUY').replace('HipoBuy','HIPOBUY')) for s in batch]
  results=tr.translate_batch(tokens,beam_size=4,max_batch_size=24,max_decoding_length=350,repetition_penalty=1.05)
  for source,result in zip(batch,results):
   value=html.unescape(decode(result.hypotheses[0])).replace('▁',' ').strip();value=re.sub(r'HIPO\s*BUY|Hipobuy|HipoBuy|Hipobuy','Hipobuy',value,flags=re.I)
   cache[source]=value
  if start%240==0:print(lang,min(start+24,len(sentences)),len(sentences),round(time.time()-started),'seconds',flush=True)
 for row in pending:
  if row['id'] not in saved:saved[row['id']]=' '.join(cache[s] for s in split(row['en']))
 (base/f'{lang}.json').write_text(json.dumps(saved,ensure_ascii=False,indent=2)+'\n');print(lang,'DONE',len(saved),round(time.time()-started),'seconds',flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:list(ex.map(run,langs))
