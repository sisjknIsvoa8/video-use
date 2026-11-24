const {chromium}=require('playwright');
const T={ep1:{block:'exp1r',f:.75,top:'¿NACEN O',bot:'SE HACEN?',tag:'200 ms',sub:'LO QUE TU MIRADA HACE ANTES QUE TÚ'},
         ep2:{block:'angulo2',f:.85,top:'EL ÁNGULO',bot:'SECRETO',tag:'45.5°',sub:'POR QUÉ EL CEREBRO PIERDE LA CONCENTRACIÓN'}};
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
for(const ep of ['ep1','ep2']){const c=T[ep];const p=await b.newPage({viewport:{width:1920,height:1080}});
await p.goto('file://'+__dirname+'/doc.html?ep='+ep);
await p.evaluate((a)=>{const [c,ep]=a;render(40);
 document.getElementById('fg').innerHTML='';
 const fig=document.createElement('div');fig.style.cssText='position:absolute;left:1180px;top:60px;width:620px;height:1085px;z-index:50';fig.innerHTML=ep==='ep1'?form({whr:.68,bust:.55,seed:3,color:'#d1a37a'}):profile({lumbar:.75,spine:true,color:'#d1a37a'});document.body.appendChild(fig);
 if(ep==='ep1'){const g=document.createElement('div');g.style.cssText='position:absolute;inset:0;z-index:51';g.innerHTML=gaze([[1490,385,0],[1490,560,0]],5);document.body.appendChild(g);}
 drawBrain({show:true,o:.5,x:520,y:-40,s:1.1,glow:1,spin:0,rotY:.6},2);
 const o=document.createElement('div');o.style.cssText='position:absolute;inset:0;z-index:100';
 o.innerHTML=`<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,7,11,.92) 0%,rgba(7,7,11,.6) 45%,rgba(7,7,11,0) 70%)"></div>
 <div style="position:absolute;left:80px;top:70px;font-family:JetBrains Mono;font-size:34px;letter-spacing:8px;color:#e1173f">EL LADO OSCURO DE LA ATRACCIÓN</div>
 <div style="position:absolute;left:70px;top:170px;font-family:'Inter Display';font-weight:900;font-size:190px;line-height:.92;color:#fff;letter-spacing:-6px;text-shadow:0 10px 40px #000">${c.top}<br><span style="color:#f5b942">${c.bot}</span></div>
 <div style="position:absolute;left:80px;top:620px;font-family:'Inter Display';font-weight:900;font-size:150px;color:#e1173f;text-shadow:0 0 40px rgba(225,23,63,.6)">${c.tag}</div>
 <div style="position:absolute;left:84px;top:820px;font-family:JetBrains Mono;font-weight:800;font-size:34px;letter-spacing:2px;color:#f2efe9;background:rgba(225,23,63,.9);padding:12px 22px">${c.sub}</div>`;
 document.body.appendChild(o);},[c,ep]);
await p.screenshot({path:`../${ep.toUpperCase()}_miniatura_1920x1080.png`});await p.close();}
await b.close();})();
