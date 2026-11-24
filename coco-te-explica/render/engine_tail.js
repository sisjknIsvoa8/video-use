/* ===== generic render shell: scenes come from window.SCENE ===== */
HEADS.vance={src:"cab_vance.png",ar:741/590};
function sceneIndex(t){let i=0;for(let k=0;k<SCN.length;k++) if(t>=SCN[k]) i=k; return i;}
const BGS=window.PART_BG||BG;
/* extra drawing helpers for parts 2/3 */
function phoneSvg(t){const sh=Math.sin(t*50)*6;return `<svg viewBox="0 0 220 380" width="100%" height="100%"><g transform="rotate(${sh} 110 190)"><rect x="20" y="10" width="180" height="360" rx="30" fill="#111" stroke="#444" stroke-width="6"/><rect x="34" y="50" width="152" height="270" rx="10" fill="#16a34a"/><circle cx="110" cy="140" r="44" fill="#fff"/><text x="110" y="158" font-size="50" text-anchor="middle">📞</text><text x="110" y="240" font-size="24" font-weight="900" text-anchor="middle" fill="#fff" font-family="Inter">LLAMADA</text><text x="110" y="272" font-size="20" font-weight="700" text-anchor="middle" fill="#dcfce7" font-family="Inter">entrante…</text></g>${[0,1,2].map(i=>{const k=((t*1.6+i/3)%1);return `<circle cx="110" cy="190" r="${120+k*120}" fill="none" stroke="rgba(74,222,128,${.6-k*.6})" stroke-width="6"/>`;}).join("")}</svg>`;}
function chipIcon(){return `<svg viewBox="0 0 60 60" width="100%" height="100%"><rect x="8" y="8" width="44" height="44" rx="6" fill="#22c55e" stroke="#15803d" stroke-width="3"/><rect x="18" y="18" width="24" height="24" rx="3" fill="#14532d"/><path d="M16 2v6M30 2v6M44 2v6M16 52v6M30 52v6M44 52v6M2 16h6M2 30h6M2 44h6M52 16h6M52 30h6M52 44h6" stroke="#94a3b8" stroke-width="3"/></svg>`;}
function card(html,x,y,w,t,t0,{r=0,bg="#fff",color="#111",z=6,pad="28px 34px",size=44}={}){return el(`<div class="card" style="background:${bg};color:${color};padding:${pad};font-size:${size}px;font-weight:800;line-height:1.15">${html}</div>`,x,y,w,0,{s:pop(t,t0),r,ox:"50%",oy:"50%",z});}
function bubble(text,x,y,w,t,t0,{tail="left",z=7}={}){return el(`<div style="position:relative;background:#fff;color:#111;border-radius:28px;padding:20px 26px;font-size:38px;font-weight:800;line-height:1.15;box-shadow:0 12px 28px rgba(0,0,0,.4)">${text}<div style="position:absolute;${tail}:40px;bottom:-22px;width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:26px solid #fff"></div></div>`,x,y,w,0,{s:pop(t,t0),ox:tail==="left"?"10%":"90%",oy:"100%",z});}
function confetti(t,ts){let cf="";for(let i=0;i<70;i++){const y=((t-ts)*(260+rnd(i)*220)+rnd(i+2)*-1900)%1920;if(y<-20)continue;const x=rnd(i+4)*1080+Math.sin(t*3+i)*30;cf+=`<rect x="${x}" y="${y}" width="16" height="26" fill="${["#ffd60a","#22c55e","#3b82f6","#ef4444","#fff"][i%5]}" transform="rotate(${t*200+i*40} ${x} ${y})"/>`;}return `<svg class="abs" style="inset:0;z-index:10" width="1080" height="1920">${cf}</svg>`;}

function render(t){
  const loop=t>=END_VOICE;
  const si=loop?0:sceneIndex(t), ts=loop?END_VOICE:SCN[si];
  const [c1,c2]=BGS[si%8]||BG[0];
  let h=`<div class="abs" style="inset:0;background:radial-gradient(circle at 50% 38%, ${c1} 0%, ${c2} 78%)"></div>`;
  const out=window.SCENE(loop?t-END_VOICE+0.05:t,si,loop?0:ts,loop)||{};
  h+=out.bg||"";
  const sw=((t*.25)%1)*2600-800;
  h+=`<div class="abs" style="left:${sw}px;top:-200px;width:260px;height:2400px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent);transform:rotate(18deg)"></div>`;
  let dots="";for(let i=0;i<22;i++){const x=(rnd(i)*1080+t*18*(0.5+rnd(i+9)))%1080,y=(rnd(i+3)*1920+t*10)%1920;dots+=`<circle cx="${x}" cy="${y}" r="${3+rnd(i+5)*5}" fill="rgba(255,255,255,${.05+rnd(i+7)*.08})"/>`;}
  h+=`<svg class="abs" style="inset:0" width="1080" height="1920">${dots}</svg>`;
  let s=out.s||"";
  if(!loop&&out.src) s+=`<div class="abs src" style="font-size:21px;line-height:1.3;width:940px;opacity:${fade(t,ts+.2)}">${out.src}</div>`;
  const ch=CHUNKS.find(c=>t>=c.t0&&t<c.t1+0.05);
  if(ch&&!loop){
    const clean=w=>w.toLowerCase().replace(/^[¡¿«"]+/,"").replace(/[.,!?:…»"]+$/,"");
    const per=(ch.t1-ch.t0)/ch.words.length; const cur=Math.min(ch.words.length-1,Math.floor((t-ch.t0)/per));
    const words=ch.words.map((w,i)=>i===cur?`<span class="cur">${w}</span>`:(KWSET.has(clean(w))?`<span class="kw2">${w}</span>`:w)).join(" ");
    const tag=ch.who==="P"?`<span class="tag" style="background:#ffd83d;color:#3b2a00">PIPO</span>`:`<span class="tag" style="background:#fff;color:#111">COCO</span>`;
    const p=pop(t,ch.t0,.18);
    s+=`<div class="abs cap" style="top:1415px;z-index:20;transform:scale(${.9+.1*p});opacity:${clamp(p*1.5)}"><span class="capbox">${tag}${words}</span></div>`;
  }
  const zoom=1+0.045*lin(t,ts,ts+8);
  let cx=0,cy=0; for(const st of (window.PART_STAMPS||[])){const d=t-st; if(d>0&&d<.35){cx+=Math.sin(d*90)*14*(1-d/.35);cy+=Math.cos(d*80)*10*(1-d/.35);}}
  const wi=(!loop&&si>0)?clamp((t-ts)/.22):1; const whip=(1-eOut(wi));
  document.getElementById("stage").innerHTML=`<div class="abs" style="inset:0;transform:translate(${cx+whip*420}px,${cy}px) scale(${zoom});transform-origin:50% 45%;filter:blur(${(whip*14).toFixed(1)}px)">${h}${s}</div><div class="abs" style="inset:0;pointer-events:none;background:radial-gradient(circle at 50% 45%, transparent 55%, rgba(0,0,0,.45) 100%);z-index:40"></div>`;
}
window.render=render; window.TOTAL=TOTAL;
window.ready=Promise.all((window.PART_IMGS||[]).map(n=>new Promise(r=>{const i=new Image();i.onload=()=>i.decode().then(r,r);i.onerror=r;i.src=F+n;})));
render(0);
