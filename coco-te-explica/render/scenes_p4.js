/* PARTE 4 — "Lo que le van a preguntar" (previa de la audiencia) */
window.PART_SCN=[0,6.67,14.95,28.12,37.4,54.0,58.44];
window.PART_STAMPS=[1.0,10.6,13.1,49.3];
window.PART_IMGS=["cab_jensen.png","capitolio.jpg"];
window.PART_BG={0:["#4a1212","#120404"],1:["#13284d","#060b18"],2:["#20205a","#07071a"],3:["#123a4a","#04121a"],4:["#2a2f3a","#0b0d12"],5:["#2c1b55","#0c0718"],6:["#0f3a2c","#03140b"]};
window.PART_KW=["no","junio","tour","scott","citatorios","aceptó","1","3","cámara","senado","único","testigo","primera","megaspeed","china","comercio","sec","california","missouri","demanda","condena","lutnick","5","preguntarías"];
const CR_J4="Foto: A. Eidesvik/Wikimedia Commons, CC BY 4.0 (recortada, archivo)";
function calPage(mes,dia,lines,col){return `<div class="card" style="width:400px;overflow:hidden;text-align:center;padding:0"><div style="background:${col};color:#fff;font-size:34px;font-weight:900;padding:10px">${mes}</div><div style="font-size:130px;font-weight:900;line-height:1;padding-top:10px">${dia}</div><div style="font-size:30px;font-weight:800;padding:8px 16px 20px;line-height:1.2">${lines}</div></div>`;}
window.SCENE=function(t,si,ts,loop){
  let s="",bg="",src="";
  if(si===0){
    s+=chipEl("JUNIO 2026",60,120,"#d62828",t,0);
    s+=khl("LO INVITARON<br>AL SENADO…",200,t,0,{size:92});
    s+=bigHead("jensen",350,470,360,t,.2,{stick:true,rot:Math.sin(t*3)*6,bounce:1.2});
    if(!loop){ s+=stampEl("DIJO: «NO»",560,"#ff3b3b",t,1.0,{size:110,r:-10});
      s+=card("🏢 En vez de declarar,<br>ofreció un tour por sus oficinas",120,880,840,t,3.6,{size:44,r:-2}); }
    s+=cocoAt(40,1060,380,t,{expr:"shock"});
    src="Fuentes: Comité Bancario del Senado (junio 2026) · TheNextWeb<br>"+CR_J4;
  } else if(si===1){
    s+=chipEl("NOVIEMBRE",60,120,"#d62828",t,ts);
    s+=khl("AHORA, SIN SALIDA",200,t,ts+.05,{size:88});
    s+=card(`<div style="font-size:80px">⚖️</div><div style="font-size:54px;font-weight:900">TIM SCOTT</div><div style="font-size:32px;color:#555">Presidente del Comité Bancario del Senado</div>`,190,360,700,t,ts+.4,{r:-1.5});
    s+=stampEl("AMENAZA: CITATORIOS",720,"#ff3b3b",t,10.6,{size:70,r:-6});
    s+=stampEl("ESTA VEZ: ACEPTÓ ✔",860,"#4ade80",t,13.1,{size:70,r:4});
    s+=cocoAt(40,1060,380,t,{expr:"worried"});
    s+=pipoAt(720,1150,240,t,{expr:"skeptical",enter:12.7});
    src="Fuentes: Al Jazeera · Fortune, 13 nov · The Hill";
  } else if(si===2){
    s+=khl("EL CALENDARIO",190,t,ts+.05,{size:100,color:"#7dd3fc"});
    s+=el(calPage("DICIEMBRE","1","Cámara · 3 comités<br>🔒 a puerta cerrada","#475569"),70,350,400,0,{s:pop(t,16.3),r:-4,ox:"50%",oy:"50%",z:5});
    s+=el(calPage("DICIEMBRE","3","Senado · 10:00<br>📺 audiencia PÚBLICA","#d62828"),560,350,400,0,{s:pop(t,20.0),r:3+Math.sin(t*2)*1.5,ox:"50%",oy:"50%",z:6});
    s+=bigHead("jensen",760,720,210,t,22.6,{stick:false,sweat:true,rot:8,bounce:.6,lab:"ÚNICO TESTIGO",z:8});
    s+=chipEl("1ª vez en público ante el Congreso",70,890,"#ffd60a",t,25.2,{size:36,color:"#111"});
    s+=cocoAt(40,1060,380,t,{expr:"happy"});
    s+=pipoAt(720,1150,240,t,{expr:"calm",enter:24.8});
    src="Fuentes: Comité Bancario del Senado · The Hill · CBS News<br>"+CR_J4;
  } else if(si===3){
    s+=khl("¿DE QUÉ VA?",190,t,ts+.05,{size:110});
    s+=card(`<div style="font-size:28px;color:#888">TEMA OFICIAL DE LA AUDIENCIA</div>Controles de exportación de chips de IA`,110,360,860,t,ts+.4,{size:46,r:-1});
    s+=itemEl("🔎 Megaspeed",640,t,30.6,{size:42});
    s+=itemEl("📦 ¿Chips que llegaron a China?",735,t,32.4,{size:42,bg:"#fde68a"});
    s+=itemEl("🏛️ El papel de Comercio",830,t,34.8,{size:42});
    s+=cocoAt(560,1060,380,t,{expr:"worried"});
    src="Fuentes: Comité Bancario del Senado · comités de la Cámara (vía CBS)";
  } else if(si===4){
    s+=khl("MÁS FRENTES",190,t,ts+.05,{size:110,color:"#ff6b6b"});
    const C4=[["SEC","¿engañó a inversionistas? (según fuentes)",38.2],["CALIFORNIA","citatorio del fiscal general",40.3],["MISSOURI","¿daño a fondos de pensiones?",42.6],["ACCIONISTAS","demanda colectiva (9 nov)",45.0]];
    C4.forEach(([a,b,t0],i)=>{s+=card(`<div style="font-size:38px;font-weight:900;color:#b91c1c">${a}</div><div style="font-size:28px;color:#333">${b}</div>`,[60,560,60,560][i],[360,360,560,560][i],460,t,t0,{r:[-2,2,1.5,-1.5][i],pad:"22px 24px"});});
    s+=stampEl("NADA ES CONDENA",800,"#ffd60a",t,49.3,{size:84,r:-5});
    s+=cocoAt(40,1060,380,t,{expr:"shock"});
    s+=pipoAt(720,1150,240,t,{expr:"skeptical",enter:48.8});
    src="Fuentes: TechCrunch, 20 nov · DCD · Bangkok Post/Reuters";
  } else if(si===5){
    s+=khl("Y TAMBIÉN…",190,t,ts+.05,{size:100});
    s+=photo("capitolio.jpg",70,350,940,300,t,ts+.2,{rot:-1,pos:"50% 40%",kb:[1.05,1.15]});
    s+=card(`<div style="font-size:54px;font-weight:900">HOWARD LUTNICK</div><div style="font-size:32px;color:#555">Secretario de Comercio · llamado a declarar</div>`,140,690,800,t,ts+.6,{r:1.5});
    s+=cocoAt(560,1060,380,t,{expr:"worried"});
    src="Fuentes: Al Jazeera · Fortune, 13 nov<br>Foto: Architect of the Capitol, dominio público";
  } else if(si===6){
    s+=khl("3 DIC · 10:00",190,t,loop?0:ts+.05,{size:110,color:"#7dd3fc"});
    s+=bigHead("jensen",330,360,380,t,loop?0:ts+.2,{stick:true,sweat:true,rot:Math.sin(t*2.5)*5,bounce:.8,lab:"¿QUÉ VA A DECIR?"});
    s+=chipEl("PARTE 5 🔔",640,860,"#d62828",t,60.2,{size:54});
    s+=el(`<div class="hl" style="font-size:60px;color:#ffd60a">¿TÚ QUÉ LE PREGUNTARÍAS? 👇</div>`,40,960,1000,0,{s:pop(t,62.0),ox:"50%",oy:"50%",z:7});
    s+=cocoAt(110,1050,390,t,{expr:"happy"});
    s+=pipoAt(560,1140,250,t,{expr:"calm"});
    src=t>61.5?"©️ 2026 Coco / Ernesto · Contenido original informativo. Las investigaciones siguen abiertas; nada aquí es una acusación probada.<br>"+CR_J4:CR_J4;
  }
  return {bg,s,src};
};
