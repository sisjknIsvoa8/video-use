const {chromium}=require('playwright');const {spawn}=require('child_process');
(async()=>{const FPS=30;const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/video2.html');await p.evaluate(()=>window.ready);const total=await p.evaluate(()=>TOTAL);
const N=Math.round(total*FPS);
const ff=spawn('ffmpeg',['-loglevel','error','-y','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','medium','-crf','20','-pix_fmt','yuv420p','video2_noaudio.mp4'],{stdio:['pipe','inherit','inherit']});
for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/FPS);await p.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?i.decode().catch(()=>{}):new Promise(r=>{i.onload=r;i.onerror=r;}))));const buf=await p.screenshot({type:'jpeg',quality:92});
 if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r)); if(i%300===0) console.log('frame',i,'/',N);}
ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();console.log('done');})();
