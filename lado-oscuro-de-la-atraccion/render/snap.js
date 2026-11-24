const {chromium}=require('playwright');
(async()=>{const ep=process.argv[2];const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:1920,height:1080}});
p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()==='error')console.log('CONSOLE',m.text())});
await p.goto('file://'+__dirname+'/doc.html?ep='+ep);
const M=await p.evaluate(()=>window.META.blocks.map(b=>[b.id,b.start,b.dur]));
const want=process.argv.slice(3);
for(const w of want){let t;if(w.includes(':')){const [id,f]=w.split(':');const bl=M.find(x=>x[0]===id);t=bl[1]+bl[2]*(+f);}else t=+w;
 await p.evaluate(t=>render(t),t);await p.screenshot({path:`/tmp/claude-0/d_${ep}_${w.replace(':','_')}.jpg`,type:'jpeg',quality:70});}
await b.close();})();
