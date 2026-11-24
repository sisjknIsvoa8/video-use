<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{width:1080px;height:1920px;overflow:hidden;background:#000;font-family:"Inter",sans-serif}
  #stage{position:absolute;inset:0;overflow:hidden}
  .abs{position:absolute}
  .hl{font-weight:900;text-transform:uppercase;text-align:center;color:#fff;line-height:1.02;letter-spacing:-1px;
      text-shadow:0 6px 0 rgba(0,0,0,.45),0 0 30px rgba(0,0,0,.5)}
  .chip{display:inline-block;font-weight:900;border-radius:999px;padding:14px 30px;font-size:44px;color:#fff;white-space:nowrap}
  .card{background:#fff;border-radius:28px;box-shadow:0 18px 40px rgba(0,0,0,.45);color:#111}
  .cap{left:60px;width:880px;text-align:center}
  .capbox{display:inline-block;background:rgba(0,0,0,.62);border-radius:20px;padding:14px 26px;
          font-weight:800;font-size:60px;color:#fff;line-height:1.15}
  .kw{color:#ffd60a}
  .tag{display:inline-block;font-size:28px;font-weight:900;border-radius:10px;padding:4px 12px;margin-right:14px;vertical-align:middle;position:relative;top:-6px}
  .src{z-index:21;left:60px;top:1525px;font-size:26px;color:rgba(255,255,255,.78);font-weight:600}
  .stamp{font-weight:900;border:10px solid;border-radius:18px;padding:10px 26px;text-transform:uppercase;white-space:nowrap}
  .item{background:rgba(255,255,255,.95);color:#111;border-radius:18px;padding:16px 26px;font-size:42px;font-weight:800;white-space:nowrap}
</style></head>
<body><div id="stage"></div>
<script>
/* ===== timing (seconds, voice track at 1.12x) ===== */
const SCN=[0,3.7,12.3,22.6,34.3,45.0,59.4,72.1];
const END_VOICE=83.8, TOTAL=84.6;
const L_START=[0,3.7,12.3,18.0,22.6,25.2,34.3,40.0,45.0,52.5,57.9,59.4,65.6,72.1];
const L_DUR=[4.027,9.459,6.240,4.969,2.730,10.122,6.232,5.407,8.244,5.931,1.514,6.749,7.161,12.977].map(d=>d/1.12);
const L_WHO=["C","C","C","P","C","P","C","P","C","P","C","C","P","C"];
const L_TXT=[
"¡El jefe de Nvidia renunció… y volvió en ONCE días!",
"29 de octubre… inteligencia de Estados Unidos sospechaba de una amiga cercana suya: Alice Huang. Mismo apellido… ¡cero parentesco!",
"Y el 8 de noviembre, él mismo escribió: «le fui infiel a mi esposa».",
"¡Coco! Eso lo admitió él. Lo de espía… no.",
"Entonces… ¿es espía?",
"No está probado. China dice que es «pura invención»… Singapur no la investigó por espionaje… y Justicia de EE.UU. dice que no ha concluido nada.",
"12 de noviembre: ¡renuncia! Y la prensa reporta otra relación… en la oficina.",
"Sin confirmar. Lo grave, según la junta: no fue franco con ellos.",
"¿Y la bolsa? ¡Se incendió! El 20 de noviembre la acción cayó 14% en un solo día… ¡casi medio billón de dólares, puf!",
"Y eso que acababan de vender récord: 115 mil millones… en un trimestre.",
"¿Y cómo volvió?",
"¡23 de noviembre: lo regresan! Voto unánime… y la acción rebota 31%.",
"Trump presionó… el gobierno dijo que no veía riesgo… pero la investigación independiente sigue abierta.",
"Entonces… ¿el talento pesa más que la confianza? El 1 de diciembre lo esperan en el Congreso… y el 3, en el Senado. Eso te lo cuento en la Parte 2. Soy Coco… ¿tú lo perdonarías? Te leo."
];
const KW=/^(¡?\d+%?|ONCE|14%|31%|espía…?|espía|¿es|¡renuncia!|infiel|probado\.?|unánime…?|abierta\.|confianza\?|talento|récord:|billón|Parte|2\.|perdonarías\?|«pura|invención»…|cero|parentesco!|Alice|Huang\.|Trump|confirmar\.|franco|Congreso…|Senado\.|¡Se|incendió!|lo|regresan!)$/i;

/* build caption chunks */
const CHUNKS=[];
L_TXT.forEach((txt,i)=>{
  const w=txt.split(/\s+/); const groups=[]; let g=[];
  w.forEach(word=>{g.push(word); if(g.length>=4 || (/[.!?:…»]$/.test(word)&&g.length>=2)){groups.push(g);g=[];}});
  if(g.length){ if(groups.length && g.length===1) groups[groups.length-1].push(...g); else groups.push(g); }
  const total=groups.reduce((a,gr)=>a+gr.join(" ").length+6,0);
  let t=L_START[i];
  groups.forEach(gr=>{const d=L_DUR[i]*(gr.join(" ").length+6)/total; CHUNKS.push({t0:t,t1:t+d,words:gr,who:L_WHO[i]}); t+=d;});
});
const KWSET=new Set(["once","14%","31%","espía","renuncia","infiel","probado","unánime","abierta","confianza","talento","récord","billón","perdonarías","pura","invención","parentesco","confirmar","franco","congreso","senado","incendió","regresan","115","20","23","29","8","12","1","3","2","alice","huang","trump","riesgo"]);
const _OLD=new Set(["once","14%","31%","espía","espía…","¿es","¡renuncia!","infiel","probado.","unánime…","abierta.","confianza?","talento","récord:","billón","perdonarías?","«pura","invención»…","cero","parentesco!","confirmar.","franco","congreso…","senado.","incendió!","regresan!","115","20","23","29","8","12","1","3","parte","2."]);

/* ===== helpers ===== */
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const lin=(t,a,b)=>clamp((t-a)/(b-a));
const eOut=x=>1-Math.pow(1-x,3);
const eBack=x=>{const c1=1.9,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2);};
const pop=(t,t0,d=.35)=>t<t0?0:eBack(clamp((t-t0)/d));
const fade=(t,t0,d=.25)=>eOut(lin(t,t0,t0+d));
function rnd(s){const x=Math.sin(s*12.9898)*43758.5453;return x-Math.floor(x);}

