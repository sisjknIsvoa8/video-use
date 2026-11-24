/* PARTE 2 — "La junta dijo NO… y Trump llamó" */
window.PART_SCN=[0,4.21,8.82,19.84,26.68,37.18,45.73,59.21];
window.PART_STAMPS=[0.6,2.5,16.6,43.0];
window.PART_IMGS=["cab_jensen.png","cab_trump.png","cab_vance.png","capitolio.jpg","h100.png"];
window.PART_BG={0:["#5a1018","#14060a"],1:["#13284d","#060b18"],2:["#2a2f3a","#0b0d12"],3:["#4a1212","#120404"],4:["#0f3a2c","#03140b"],5:["#0f4a2c","#03140b"],6:["#20205a","#07071a"],7:["#2c1b55","#0c0718"]};
window.PART_KW=["no","sí","23","12","17","22","31","semafor","trump","vance","convencí","unánime","abierta","cantor","fitzgerald","lutnick","chips","3","perdón","dividida","cazatalentos","niega"];
const CR_A="Fotos: A. Eidesvik/Wikimedia Commons, CC BY 4.0 (recortada, archivo)";
const CR_T="Retratos oficiales de Trump y Vance: Casa Blanca, dominio público";
window.SCENE=function(t,si,ts,loop){
  let s="",bg="",src="";
  if(si===0){
    s+=khl("LA JUNTA DIJO…",170,t,0,{size:96});
    s+=bigHead("jensen",330,420,420,t,.1,{rot:Math.sin(t*3)*8,bounce:1.5,z:5,stick:false});
    if(!loop){
      if(t<2.5) s+=stampEl("NO",470,"#ff3b3b",t,.6,{size:170,r:-12});
      s+=stampEl("…¡Y LUEGO SÍ!",700,"#4ade80",t,2.5,{size:96,r:6});
    }
    s+=cocoAt(260,960,480,t,{expr:"shock"});
    src=CR_A;
  } else if(si===1){
    s+=chipEl("PARTE 1 ↗",60,120,"#d62828",t,ts);
    s+=khl("RESUMEN EXPRÉS",220,t,ts+.05,{size:84});
    const p=eOut(lin(t,ts+.8,ts+3.6));
    s+=`<div class="abs" style="left:110px;top:640px;width:860px;height:16px;background:rgba(255,255,255,.25);border-radius:8px;z-index:4"></div><div class="abs" style="left:110px;top:640px;width:${860*p}px;height:16px;background:#ffd60a;border-radius:8px;z-index:5"></div>`;
    s+=chipEl("12 NOV · RENUNCIA",60,700,"#dc2626",t,ts+.3,{size:36});
    s+=chipEl("23 NOV · REGRESA",640,700,"#16a34a",t,ts+3.2,{size:36});
    s+=bigHead("jensen",40+p*700,420,200,t,ts+.3,{stick:false,gray:1-p,bounce:.8,z:6});
    s+=cocoAt(330,960,440,t,{expr:"happy"});
    src=CR_A;
  } else if(si===2){
    s+=chipEl("17 NOV",60,120,"#d62828",t,ts);
    s+=khl("LA JUNTA: «NO»",220,t,ts+.05,{size:100});
    s+=card(`<div style="font-size:28px;color:#888">PRESIDENTE DE LA JUNTA</div>No piensa restituir a Jensen Huang`,110,400,860,t,ts+.4,{r:-1.5});
    s+=el(`<div class="card" style="background:#f5e6c8;padding:22px;text-align:center;border:6px solid #8b5e34;width:330px"><div style="font-size:52px;font-weight:900;color:#8b5e34">SE BUSCA</div><div style="width:150px;height:170px;margin:10px auto">${silhouette()}</div><div style="font-size:40px;font-weight:900;color:#111">NUEVO CEO</div><div style="font-size:24px;font-weight:700;color:#555">cazatalentos contratados</div></div>`,360,620,330,0,{s:pop(t,ts+3.3),r:4+Math.sin(t*2)*2,ox:"50%",oy:"50%",z:6});
    if(t>=16.38){ s+=stampEl("JUNTA DIVIDIDA",700,"#ffd60a",t,16.6,{size:80,r:-6}); }
    s+=cocoAt(40,1020,400,t,{expr:"worried"});
    s+=pipoAt(700,1110,260,t,{expr:"skeptical",enter:16.2});
    src="Fuentes: Nvidia (H. Jones), 17 nov · CNBC · Semafor, 18 nov";
  } else if(si===3){
    s+=khl("MIENTRAS, TRUMP…",200,t,ts+.05,{size:92});
    s+=bigHead("trump",360,390,330,t,ts+.2,{rot:-5,bounce:1.2});
    s+=bubble("<span style='font-size:26px;color:#888'>16 NOV</span><br>«No me molestaría que volviera»",60,820,470,t,21.0,{tail:"left"});
    s+=bubble("<span style='font-size:26px;color:#888'>20 NOV</span><br>«Que pida perdón y regrese»",540,880,470,t,23.9,{tail:"right"});
    s+=cocoAt(60,1060,380,t,{expr:"happy",tilt:-6});
    src="Fuentes: declaraciones públicas de Trump, 16 y 20 nov (CNBC, CNN)<br>"+CR_T;
  } else if(si===4){
    s+=chipEl("DOMINGO 22 NOV",60,120,"#16a34a",t,ts);
    s+=khl("LA LLAMADA",220,t,ts+.05,{size:110});
    s+=el(phoneSvg(t),80,400,250,430,{s:pop(t,ts+.3),z:5});
    s+=bigHead("trump",360,400,270,t,ts+.8,{stick:false,rot:8,bounce:1});
    s+=itemEl("📞 Trump se conectó a la reunión de la junta",870,t,ts+1.5,{size:34});
    s+=bigHead("vance",680,430,250,t,29.6,{stick:false,rot:-6,bounce:1,lab:"JD VANCE"});
    s+=itemEl("La presión la encabezó el vicepresidente",950,t,30.4,{size:34,bg:"#fde68a"});
    if(t>=33.63) s+=card(`<span style="font-family:'Liberation Serif',serif;font-style:italic;font-size:60px">“I convinced them”</span><br><span style="color:#b91c1c">«Los convencí»</span> <span style="font-size:26px;color:#666">— Trump, CNBC</span>`,120,560,840,t,33.8,{r:-2,z:9});
    s+=cocoAt(40,1080,370,t,{expr:t<33.6?"shock":"worried"});
    s+=pipoAt(720,1150,240,t,{expr:"skeptical",enter:33.4});
    src="Fuentes: Semafor, 23 nov · The New York Times · CNBC<br>"+CR_T;
  } else if(si===5){
    bg+=confetti(t,ts);
    s+=chipEl("LUNES 23 NOV",60,120,"#16a34a",t,ts);
    s+=khl("¡UNÁNIME!",210,t,ts+.05,{size:140,color:"#4ade80"});
    s+=bigHead("jensen",520,380,380,t,ts+.2,{rot:6,bounce:2.2,lab:"¡DE VUELTA!"});
    const z=1+.15*Math.max(0,1-Math.abs(t-40.6)*3);
    s+=el(`<div class="hl" style="font-size:130px;color:#4ade80;white-space:nowrap;text-align:left">+31% ▲</div>`,60,520,460,0,{s:pop(t,40.3)*z,ox:"50%",oy:"50%",z:8});
    s+=stampEl("INVESTIGACIÓN: SIGUE ABIERTA",900,"#ffd60a",t,43.0,{size:56,r:-4});
    s+=cocoAt(60,1060,400,t,{expr:"happy",hop:t<42.7,armL:120,armR:-120});
    s+=pipoAt(720,1150,240,t,{expr:"skeptical",enter:42.5});
    src="Fuente: Nvidia Newsroom, 23 nov · Nasdaq<br>"+CR_A;
  } else if(si===6){
    s+=khl("¿Y EN WASHINGTON?",200,t,ts+.05,{size:78});
    s+=photo("capitolio.jpg",70,350,940,330,t,ts+.2,{rot:1.2,lab:"CAPITOLIO",pos:"50% 40%",kb:[1.05,1.18]});
    s+=itemEl("Críticas de republicanos y demócratas",730,t,47.6,{size:36});
    s+=card(`<div style="font-size:26px;color:#888">CARTA DE DEMÓCRATAS · 17 NOV</div>A Cantor Fitzgerald: «entreguen sus registros sobre Nvidia»<div style="font-size:26px;color:#666;margin-top:6px">firma de la familia del secretario de Comercio, Lutnick</div>`,90,810,900,t,50.2,{size:36,r:-1});
    s+=card("Cantor: «sin fundamento»",50,1050,420,t,55.2,{size:32,bg:"#fde68a",pad:"16px 20px",r:-2});
    s+=card("Comercio: «Lutnick ya vendió su parte»",50,1170,420,t,57.0,{size:32,bg:"#fde68a",pad:"16px 20px",r:1.5});
    s+=cocoAt(500,1120,320,t,{expr:"worried"});
    s+=pipoAt(830,1190,200,t,{expr:"skeptical",enter:54.7});
    src="Fuentes: Al Jazeera, 18 nov · Bloomberg<br>Foto: Architect of the Capitol, dominio público";
  } else if(si===7){
    s+=khl("¿Y LOS CHIPS?",190,t,loop?0:ts+.05,{size:120,color:"#ffd60a"});
    s+=photo("h100.png",90,420,900,420,t,loop?0:ts+.3,{rot:-1.5,lab:"CHIPS DE IA DE NVIDIA",pos:"50% 50%",kb:[1.05,1.2],arch:"Imagen ilustrativa"});
    s+=chipEl("PARTE 3 →",640,880,"#d62828",t,61.0,{size:54});
    s+=el(`<div class="hl" style="font-size:64px;color:#ffd60a">¿TRUMP HIZO BIEN? 👇</div>`,40,975,1000,0,{s:pop(t,62.8),ox:"50%",oy:"50%",z:7});
    s+=cocoAt(110,1040,400,t,{expr:"happy"});
    s+=pipoAt(560,1130,260,t,{expr:"calm"});
    src=t>62.5?"©️ 2026 Coco / Ernesto · Contenido original informativo. Investigaciones abiertas; nada aquí es una acusación probada.<br>Foto: 极客湾Geekerwan/Wikimedia Commons, CC BY 3.0":"Foto: 极客湾Geekerwan/Wikimedia Commons, CC BY 3.0";
  }
  return {bg,s,src};
};
