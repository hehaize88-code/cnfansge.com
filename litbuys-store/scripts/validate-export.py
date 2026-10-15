"""Validate the actual exported pages, reciprocal language links and full article bodies."""
from pathlib import Path
from urllib.parse import urlparse, urljoin, unquote
from lxml import html, etree
import json, sys

root = Path(__file__).resolve().parents[1]
out = root / 'out'
origin = 'https://litbuys.store'
langs = ['en','de','es','fr','it']
ns = {'s':'http://www.sitemaps.org/schemas/sitemap/0.9','x':'http://www.w3.org/1999/xhtml'}
sitemap = etree.parse(str(out / 'sitemap.xml'))
urls = sitemap.xpath('//s:url/s:loc/text()', namespaces=ns)
assert len(urls) == len(set(urls)) == 155, f'Sitemap URLs: {len(urls)}'
expected = json.loads(Path(sys.argv[1]).read_text()) if len(sys.argv) > 1 else None
pages = {}
def norm(s): return ' '.join(s.split())
def language(path):
    first = path.strip('/').split('/')[0]
    return first if first in langs[1:] else 'en'
def local(lang, relative): return origin + ('' if lang=='en' else '/'+lang) + relative
for url in urls:
    path = urlparse(url).path
    assert path.endswith('/'), url
    file = out / path.lstrip('/') / 'index.html'
    assert file.exists(), str(file)
    page = html.fromstring(file.read_bytes())
    pages[url] = page
    lang = language(path)
    assert page.get('lang') == lang, f'{url}: html lang'
    assert len(page.xpath('//html')) == 1 and len(page.xpath('//body')) == 1, f'{url}: nested document'
    assert len(page.xpath('//h1')) == 1, f'{url}: H1 count'
    assert page.xpath('//head/link[@rel="canonical"]/@href') == [url], f'{url}: canonical'
    assert page.xpath('//head/title/text()') and page.xpath('//meta[@name="description"]/@content'), f'{url}: metadata'
    assert not any('noindex' in s for s in page.xpath('//meta[@name="robots"]/@content')), f'{url}: robots'
    alternatives = {a.get('hreflang'):a.get('href') for a in page.xpath('//head/link[@rel="alternate"][@hreflang]')}
    relative = path if lang == 'en' else path[len(lang)+1:]
    expected_alts = {code:local(code,relative) for code in langs}
    expected_alts['x-default'] = local('en',relative)
    assert alternatives == expected_alts, f'{url}: alternates {alternatives}'
    assert set(alternatives.values()) <= set(urls), f'{url}: hreflang missing target'
    assert len(page.xpath('//form[@role="search"]')) in (1,2)
    for form in page.xpath('//form[@role="search"]'):
        assert form.get('action') == 'https://cnfansge.com/search.html' and form.get('method').lower() == 'get'
        assert form.xpath('.//input[@name="keywords"]') and form.xpath('.//input[@name="channelid"][@value="2"]')
    for anchor in page.xpath('//a[@href]'):
        href = anchor.get('href')
        if href.startswith('#'): continue
        target = urlparse(urljoin(url,href))
        if target.netloc == 'litbuys.store':
            target_url = origin + target.path
            assert target_url in urls, f'{url}: broken internal {href}'
            if not anchor.xpath('ancestor::*[contains(concat(" ",normalize-space(@class)," ")," language-switcher ")]'):
                assert language(target.path) == lang, f'{url}: cross-language content link {href}'
        else:
            assert target.scheme == 'https' and target.netloc == 'cnfansge.com', f'{url}: unexpected external target {href}'
    for image in page.xpath('//img[@src]'):
        assert (root/'public'/image.get('src').lstrip('/')).exists(), f'{url}: missing image {image.get("src")}'
        assert image.get('width') and image.get('height') and image.get('alt') is not None
    for script in page.xpath('//script[@type="application/ld+json"]/text()'): json.loads(script)
    if '/articles/' in relative and relative != '/articles/':
        slug = relative.strip('/').split('/')[-1]
        content = page.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," article-content ")]')[0]
        if expected:
            actual = [norm(p.text_content()) for p in content.xpath('./section/p')]
            wanted = [norm(p) for section in expected[slug][lang]['sections'] for p in section['paragraphs']]
            assert actual == wanted, f'{url}: incomplete or changed article body'
        assert page.xpath('//details[contains(@class,"toc-disclosure")]')
    if relative == '/':
        assert len(page.xpath('//*[@id="articles"]//div[@class="article-grid"]/article')) == 4
        featured = page.xpath('//a[@class="hero-product"]')[0]
        assert featured.get('href') == 'https://cnfansge.com/AllProducts/6681.html'
    if relative == '/articles/':
        assert len(page.xpath('//div[@class="article-grid"]/article')) == 15
for entry in sitemap.xpath('//s:url',namespaces=ns):
    url = entry.find('s:loc',ns).text
    alts = {a.get('hreflang'):a.get('href') for a in entry.findall('x:link',ns)}
    head = {a.get('hreflang'):a.get('href') for a in pages[url].xpath('//head/link[@rel="alternate"][@hreflang]')}
    assert alts == head, f'{url}: sitemap alternates'
not_found = html.fromstring((out/'404.html').read_bytes())
assert any('noindex' in s for s in not_found.xpath('//meta[@name="robots"]/@content'))
assert 'https://litbuys.store/sitemap.xml' in (out/'robots.txt').read_text()
print(json.dumps({'canonical_pages':len(urls),'article_pages':75,'languages':langs,'internal_links':'passed','full_article_bodies':'passed' if expected else 'not checked','metadata_and_sitemap':'passed','search_and_product_destinations':'passed'},ensure_ascii=False,indent=2))
