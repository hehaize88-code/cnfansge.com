// Network-free verification only. Never imported by the production Worker.
export function fixtureFetch(input) {
 const url=new URL(input instanceof Request ? input.url : input);
 if(url.hostname!=='www.cnfansge.com')throw Error('Unexpected test request: '+url.hostname);
 const sortButtons=['click','new','price'].map(sort=>`<a class="sort-btn" onclick="location.href='/index.php?m=home&c=Lists&a=index&tid=1&sort=${sort}'">Sort</a>`).join('');
 const cards=Array.from({length:60},(_,i)=>`<div class="product-card"><a class="product-image" href="/AllProducts/${i+1}.html"><img src="/uploads/test.jpg"></a><span class="product-name">Verification item ${i+1}</span><span class="product-price">80</span></div>`).join('');
 return Promise.resolve(new Response(sortButtons+cards));
}
