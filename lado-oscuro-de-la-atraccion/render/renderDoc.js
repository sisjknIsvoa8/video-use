const {chromium}=require('playwright');const {spawn}=require('child_process');
(async()=>{const [ep,out,f0,f1]=process.argv.slice(2);const FPS=30;
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:1920,height:1080}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/doc.html?ep='+ep);const total=await p.evaluate(()=>TOTAL);
const N=Math.round(total*FPS), a=f0?+f0:0, z=f1?Math.min(+f1,N):N;
const ff=spawn('ffmpeg',['-loglevel','error','-y','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p',out],{stdio:['pipe','inherit','inherit']});
const t0=Date.now();
for(let i=a;i<z;i++){await p.evaluate(t=>render(t),i/FPS);const buf=await p.screenshot({type:'jpeg',quality:90});
 if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r)); if((i-a)%300===0) console.log(out,'frame',i,'/',z,((Date.now()-t0)/1000).toFixed(0)+'s');}
ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();console.log('done',out);})();
