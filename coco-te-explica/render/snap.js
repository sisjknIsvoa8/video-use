const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/video.html');
for(const t of process.argv.slice(2)){await p.evaluate(t=>render(+t),t);await p.screenshot({path:`/tmp/claude-0/snap_${t}.jpg`,quality:70,type:'jpeg'});}
await b.close();})();
