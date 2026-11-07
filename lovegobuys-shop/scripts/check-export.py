import json,re
from pathlib import Path
from urllib.parse import urlsplit
from html.parser import HTMLParser
import xml.etree.ElementTree as ET
base='https://lovegobuys.shop'
langs=['en','de','es','fr','it']
new=['lovegobuy-size-guide','lovegobuy-qc-photos-missing','lovegobuy-returns-refunds']
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.meta=[];self.links=[];self.h2=[];self.heading=None;self.schema=[];self.script=None;self.hidden=0;self.text=[];self.feed(s)
 def handle_starttag(self,t,a):
  d=dict(a)
  if t in ('html','link','meta'):self.meta.append((t,d))
  if t=='a':self.links.append(d.get('href',''))
  if t=='h2':self.heading=''
  if t=='script':self.script='' if d.get('type')=='application/ld+json' else None
  if t in ('script','style'):self.hidden+=1
 def handle_data(self,s):
  if self.script is not None:self.script+=s
  if not self.hidden:
   self.text.append(s)
   if self.heading is not None:self.heading+=s
 def handle_endtag(self,t):
  if t=='h2' and self.heading is not None:self.h2.append(self.heading);self.heading=None
  if t=='script' and self.script is not None:self.schema.append(json.loads(self.script));self.script=None
  if t in ('script','style'):self.hidden-=1
urls=ET.fromstring(Path('out/sitemap.xml').read_text()).findall('{*}url')
assert len(urls)==125,len(urls)
allpaths={urlsplit(x.find('{*}loc').text).path for x in urls}
for item in urls:
 url=item.find('{*}loc').text;path=urlsplit(url).path;lang=path.split('/')[1]
 file=Path('out'+path+'.html');assert file.exists(),file
 p=Page(file.read_text());assert next(d['lang'] for t,d in p.meta if t=='html')==lang
 assert [d['href'] for t,d in p.meta if t=='link' and d.get('rel')=='canonical']==[url],url
 alternates={d['hreflang']:d['href'] for t,d in p.meta if t=='link' and 'hreflang' in d}
 assert set(alternates)==set(langs+['x-default']),(url,alternates)
 for code,dest in alternates.items():
  assert dest==base+'/'+('en' if code=='x-default' else code)+'/'+ '/'.join(path.split('/')[2:]) if len(path.split('/'))>2 else dest==base+'/'+('en' if code=='x-default' else code)
 assert all('noindex' not in d.get('content','') for t,d in p.meta if d.get('name')=='robots')
 for href in p.links:
  if href.startswith('/') and not href.startswith('//'):assert href.split('#')[0] in allpaths,(url,href)
 if '/articles/' in path:
  graph=next(x['@graph'] for x in p.schema if '@graph' in x)
  article=next(x for x in graph if x['@type']=='Article')
  assert article['dateModified']=='2026-11-07'
  assert len(p.h2)==len(set(p.h2)),(url,'duplicate sections')
  assert 'https://www.lovegobuy.com/help-center/index' in p.links
  if path.split('/')[-1] in new:assert article['datePublished']=='2026-11-07'
 if path.endswith('/articles'):
  links={x for x in p.links if x.startswith('/'+lang+'/articles/')};assert len(links)==17,(url,len(links))
 if path.endswith('/faq'):
  faq=next(n for x in p.schema for n in x.get('@graph',[]) if n['@type']=='FAQPage')
  assert len(faq['mainEntity'])==22
  assert all(x['name'] in p.h2 for x in faq['mainEntity'])
for lang in langs:
 assert len([p for p in allpaths if p.startswith('/'+lang+'/articles/')])==17
for name in ['size','qc','returns']:
 data=json.loads(Path('app/november-'+name+'.json').read_text())
 assert set(data)==set(langs)
 counts={l:len(data[l]['sections']) for l in langs};assert len(set(counts.values()))==1
 words=len(' '.join(s['title']+' '+' '.join(s['paragraphs'])+' '+' '.join(s.get('bullets',[])) for s in data['en']['sections']).split())
 assert 1200<=words<=1800,(name,words)
 print(name,'EN words',words,'sections',counts['en'])
print('PASS: 125 canonical URLs; 17 articles and 22 FAQs in each locale; reciprocal hreflang, dates, schemas and internal links.')
