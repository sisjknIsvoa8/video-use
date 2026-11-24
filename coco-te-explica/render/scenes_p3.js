/* PARTE 3 — "¿A dónde fueron los chips?" (Megaspeed) */
window.PART_SCN=[0,6.57,13.51,21.0,33.95,42.38,50.47,60.83,71.47];
window.PART_STAMPS=[18.3,39.6,56.7];
window.PART_IMGS=["h100.png","datacenter.jpg","capitolio.jpg","cab_jensen.png"];
window.PART_BG={0:["#0f3a2c","#03140b"],1:["#13284d","#060b18"],2:["#2c1b55","#0c0718"],3:["#123a4a","#04121a"],4:["#4a1212","#120404"],5:["#2a2f3a","#0b0d12"],6:["#4d0f0f","#140303"],7:["#20205a","#07071a"]};
window.PART_KW=["chino","megaspeed","alice","huang","alibaba","fundamento","malasia","china","distancia","prohibido","contrabandeaban","probado","2024","criminal","speedmatrix","militares","demostrado","16","licencia","3","senado","4"];
const CR_H="Foto: 极客湾Geekerwan/Wikimedia Commons, CC BY 3.0 (imagen ilustrativa)";
function rainChips(t,t0){let s="";for(let i=0;i<16;i++){const y=((t-t0)*(380+rnd(i)*260)+rnd(i+1)*-900)%1500;if(y<-80)continue;const x=rnd(i+7)*960;s+=el(chipIcon(),x,y+100,90,90,{r:t*90+i*40,z:2,o:.9});}return s;}
window.SCENE=function(t,si,ts,loop){
  let s="",bg="",src="";
  if(si===0){
    bg+=bgPhoto("h100.png",t,0,{tint:"rgba(0,40,20,.6)",o:.6,pos:"50% 50%",blur:2});
    s+=rainChips(t,0);
    s+=khl("MÁS DE<br>4 MIL MILLONES $",170,t,0,{size:104,color:"#4ade80"});
    s+=khl("EN CHIPS DE NVIDIA",440,t,.8,{size:70});
    if(!loop) s+=stampEl("…Y SU GRAN CLIENTE ERA CHINO",650,"#ffd60a",t,3.9,{size:52,r:-4});
    s+=cocoAt(260,940,500,t,{expr:"shock"});
    src=CR_H;
  } else if(si===1){
    s+=khl("SE LLAMA…",190,t,ts+.05,{size:80});
    s+=el(`<div class="card" style="background:#0b1220;color:#fff;padding:34px 40px;text-align:center;border:4px solid #38bdf8"><div style="font-size:96px;font-weight:900;letter-spacing:2px">MEGASPEED</div><div style="font-size:34px;color:#7dd3fc;font-weight:700">Singapur · nube y centros de datos</div></div>`,120,330,840,0,{s:pop(t,ts+.4),r:-1.5,ox:"50%",oy:"50%",z:6});
    s+=el(silhouette(),120,640,200,220,{s:pop(t,9.0),z:5});
    s+=el(`<div style="font-weight:900;font-size:36px;color:#fff">ALICE HUANG<br><span style="font-weight:700;font-size:26px;opacity:.85">la de la Parte 1 · era ejecutiva ahí</span></div>`,340,690,640,0,{o:fade(t,9.2)});
    s+=chipEl("Según la empresa: se fue en ago 2025",120,900,"#fde68a",t,11.2,{size:34,color:"#111"});
    s+=cocoAt(560,1040,380,t,{expr:"worried",tilt:-5});
    src="Fuentes: comunicado de Megaspeed, 15 nov (vía ITV/AP) · Axios";
  } else if(si===2){
    s+=khl("SEGÚN THE NEW YORK TIMES…",200,t,ts+.05,{size:70});
    s+=card(`<div style="font-size:28px;color:#888">MAYOR CLIENTE Y FINANCIADOR DE MEGASPEED</div><div style="font-size:110px;font-weight:900;color:#ea580c;letter-spacing:1px">ALIBABA</div><div style="font-size:30px;color:#555">gigante tecnológico chino · según 3 fuentes del NYT</div>`,110,380,860,t,ts+.5,{r:1.5});
    s+=stampEl("ALIBABA: «SIN FUNDAMENTO»",740,"#ff3b3b",t,18.3,{size:62,r:-5});
    s+=cocoAt(50,1040,400,t,{expr:"shock"});
    s+=pipoAt(720,1130,260,t,{expr:"annoyed",enter:17.8});
    src="Fuente: The New York Times, 18 nov (vía Business Today, TheNextWeb)";
  } else if(si===3){
    s+=khl("EL «TRUCO»",190,t,ts+.05,{size:110,color:"#7dd3fc"});
    s+=photo("datacenter.jpg",50,380,500,340,t,ts+.3,{rot:-2,lab:"MALASIA",arch:"Imagen ilustrativa",pos:"50% 50%",kb:[1.05,1.18]});
    s+=el(`<div class="card" style="background:#7f1d1d;color:#fff;padding:24px;text-align:center;width:330px"><div style="font-size:90px">🇨🇳</div><div style="font-size:44px;font-weight:900">CHINA</div><div style="font-size:26px;opacity:.85">empresas que rentan</div></div>`,680,410,330,0,{s:pop(t,23.2),ox:"50%",oy:"50%",z:6});
    const on=t>24.4; let pk="";
    if(on){for(let i=0;i<6;i++){const k=((t*.8+i/6)%1);const x=560+k*120, y=560-Math.sin(k*Math.PI)*90;pk+=`<circle cx="${x}" cy="${y}" r="10" fill="#4ade80"/>`;}
      s+=`<svg class="abs" style="left:0;top:0;z-index:7" width="1080" height="900"><path d="M555 560 Q620 420 690 560" stroke="#4ade80" stroke-width="6" stroke-dasharray="14 12" fill="none"/>${pk}</svg>`;
      s+=chipEl("🌐 acceso remoto",400,760,"#16a34a",t,24.6,{size:38});}
    s+=itemEl("Los chips NO viajan: se usan a distancia",850,t,26.0,{size:36});
    if(t>=29.96) s+=stampEl("ENTONCES: NO ESTABA PROHIBIDO",935,"#4ade80",t,30.1,{size:50,r:-3});
    s+=cocoAt(40,1060,380,t,{expr:"happy"});
    s+=pipoAt(740,1150,240,t,{expr:"calm",enter:29.7});
    src="Fuentes: The New York Times · Atlantic Council<br>Foto: Carl Lender/Wikimedia Commons, CC BY 2.0 (ilustrativa)";
  } else if(si===4){
    s+=khl("¿CONTRABANDO?",200,t,ts+.05,{size:98,color:"#ffd60a"});
    const bx=eOut(lin(t,34.6,38.6));
    s+=`<div class="abs" style="left:540px;top:420px;width:8px;height:420px;background:repeating-linear-gradient(#fff 0 20px,transparent 20px 36px);z-index:3"></div>`;
    s+=el(`<div style="font-size:30px;font-weight:900;color:#fff;text-align:center">FRONTERA</div>`,440,375,200,0,{o:fade(t,ts+.3)});
    s+=el(`<div style="width:220px;height:170px;background:#c8a165;border:6px solid #8b5e34;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:90px;font-weight:900;color:#5b3a1a">?</div>`,150+bx*560,520+Math.sin(t*10)*8,220,170,{s:pop(t,ts+.4),r:Math.sin(t*6)*5,z:5});
    s+=chipEl("2 fuentes al NYT: «a veces»",80,920,"#fff",t,35.4,{size:36,color:"#111"});
    s+=stampEl("NO PROBADO",735,"#ff3b3b",t,39.6,{size:100,r:-8});
    s+=cocoAt(50,1060,380,t,{expr:"worried"});
    s+=pipoAt(720,1150,240,t,{expr:"skeptical",enter:39.1});
    src="Fuente: The New York Times (fuentes anónimas)";
  } else if(si===5){
    s+=khl("¿QUIÉN INVESTIGA?",190,t,ts+.05,{size:96});
    s+=itemEl("🇺🇸 2024 · Comercio de EE.UU.",420,t,42.9,{size:40});
    s+=itemEl("⚖️ Ahora · Justicia: caso criminal",520,t,45.0,{size:40,bg:"#fde68a"});
    s+=itemEl("🇲🇾 Malasia · su filial Speedmatrix",620,t,47.4,{size:40});
    s+=el(`<svg viewBox="0 0 200 200" width="100%" height="100%"><circle cx="80" cy="80" r="56" fill="rgba(125,211,252,.25)" stroke="#fff" stroke-width="14"/><path d="M122 122 L182 182" stroke="#fff" stroke-width="22" stroke-linecap="round"/></svg>`,720+Math.sin(t*2)*30,700+Math.cos(t*2)*20,220,220,{s:pop(t,ts+.5),z:5});
    s+=cocoAt(60,1040,400,t,{expr:"happy"});
    src="Fuentes: Dpto. de Justicia y Comercio (vía SCMP) · Gob. de Malasia (MITI)";
  } else if(si===6){
    s+=khl("LO MÁS DELICADO",190,t,ts+.05,{size:96,color:"#ff6b6b"});
    s+=card(`<div style="font-size:28px;color:#888">SEGÚN EL NYT</div>Alibaba cofundó un laboratorio que ha trabajado en <span style="color:#b91c1c">simulaciones militares</span>`,110,380,860,t,ts+.5,{r:-1.5,size:50});
    s+=stampEl("¿LLEGARON LOS CHIPS AHÍ?",700,"#ffd60a",t,55.6,{size:56,r:3});
    s+=stampEl("NADIE LO HA DEMOSTRADO",820,"#ff3b3b",t,56.7,{size:62,r:-5});
    s+=cocoAt(50,1060,380,t,{expr:"shock"});
    s+=pipoAt(720,1150,240,t,{expr:"annoyed",enter:56.2});
    src="Fuente: The New York Times (vía TheNextWeb) · Alibaba niega trabajo militar";
  } else if(si===7){
    s+=chipEl("16 NOV",60,120,"#16a34a",t,ts);
    s+=khl("NUEVA REGLA",210,t,ts+.05,{size:120,color:"#4ade80"});
    s+=el(`<div style="font-size:36px;font-weight:800;color:#fff;text-align:center">Licencia para enviar chips avanzados a:</div>`,60,370,960,0,{o:fade(t,62.0)});
    ["🇲🇾 Malasia","🇸🇬 Singapur","🇹🇭 Tailandia","🇮🇩 Indonesia","🇧🇷 Brasil"].forEach((c,i)=>{s+=chipEl(c,[80,560,80,560,320][i],[450,450,540,540,630][i],"#fff",t,63.3+i*.55,{size:44,color:"#111"});});
    s+=card("…y para <span style='color:#16a34a'>rentar esa potencia</span> a empresas chinas",110,760,860,t,67.6,{size:44,r:1});
    s+=cocoAt(60,1060,380,t,{expr:"happy",hop:true});
    src="Fuentes: Oficina de Industria y Seguridad (BIS), regla del 16 nov · Squire Patton Boggs · Pillsbury";
  } else if(si===8){
    s+=khl("3 DIC · 10:00<br>SENADO",180,t,loop?0:ts+.05,{size:100,color:"#7dd3fc"});
    s+=photo("capitolio.jpg",70,470,940,330,t,loop?0:ts+.3,{rot:1.5,lab:"AUDIENCIA PÚBLICA",pos:"50% 40%",kb:[1.05,1.18]});
    s+=bigHead("jensen",740,640,230,t,72.3,{stick:false,sweat:true,rot:6,bounce:.6,lab:"ÚNICO TESTIGO"});
    s+=chipEl("PARTE 4 →",60,860,"#d62828",t,74.8,{size:54});
    s+=el(`<div class="hl" style="font-size:58px;color:#ffd60a">¿TERMINARON EN CHINA? 👇</div>`,40,960,1000,0,{s:pop(t,76.0),ox:"50%",oy:"50%",z:7});
    s+=cocoAt(110,1050,390,t,{expr:"happy"});
    s+=pipoAt(560,1140,250,t,{expr:"calm"});
    src=t>76?"©️ 2026 Coco / Ernesto · Contenido original informativo. Las acusaciones no están probadas; las investigaciones siguen abiertas.<br>Fotos: Architect of the Capitol (dominio público) · A. Eidesvik, CC BY 4.0":"Fuentes: Comité Bancario del Senado · The Hill<br>Foto: Architect of the Capitol, dominio público";
  }
  return {bg,s,src};
};
