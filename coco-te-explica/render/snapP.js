const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/'+(process.env.PAGE||'video2.html'));await p.evaluate(()=>window.ready);
for(const t of process.argv.slice(2)){await p.evaluate(t=>render(+t),t);await p.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?i.decode().catch(()=>{}):new Promise(r=>{i.onload=r;i.onerror=r;}))));await p.screenshot({path:`/tmp/claude-0/${process.env.PFX||'snap'}_${t}.jpg`,quality:70,type:'jpeg'});}
await b.close();})();
