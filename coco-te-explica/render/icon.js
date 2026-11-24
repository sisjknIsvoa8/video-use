const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1024,height:1024}});
await p.goto('file://'+__dirname+'/video2.html');
await p.evaluate(()=>{document.body.style.width='1024px';document.body.style.height='1024px';
 document.getElementById('stage').innerHTML=`<div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,#ffe066,#ff9f1c 75%)"></div>
 <div style="position:absolute;left:162px;top:150px;width:700px;height:840px">${coco2({expr:'happy',t:0.3})}</div>
 <div style="position:absolute;left:640px;top:600px;width:300px;height:345px">${pipo2({expr:'calm',t:0.3})}</div>`;});
await p.screenshot({path:'../ICONO_COCO_1024.png',clip:{x:0,y:0,width:1024,height:1024}});await b.close();})();
