import json,re
from guiones import EPISODIOS
SCENE_DESC={
"eye_hook":("Maniquí de modista + contador 0→200 ms; puntos de mirada numerados (eye-tracking)","Empuje lento","Corte en seco"),
"title_card":("Logo de la serie + pregunta en tipografía cinética; cerebro 3D al fondo","Zoom lento","Barrido + destello"),
"promise_grid":("3 tarjetas de expediente que entran escalonadas; sello dorado","Deriva","Barrido"),
"primates":("Línea de tiempo comparativa simios vs. humanos","Push-in","Barrido"),
"hypothesis_cards":("3 expedientes de hipótesis con sellos PLAUSIBLE/DISCUTIDA","Deriva","Barrido"),
"eyetrack_setup":("Pantalla de laboratorio REC; maniquí que cambia cintura y busto","Push-in","Barrido"),
"eyetrack_dots":("Maniquí + fijaciones de mirada con mapa de calor","Push-in","Barrido"),
"eyetrack_sizes":("3 maniquíes (busto P/M/G) con barras de tiempo de mirada iguales + sello","Deriva","Barrido"),
"rating_bars":("Maniquíes 0.7 vs. 0.9 + gráfica de atractivo (ilustrativa) + sello","Push-in","Barrido"),
"brain_signal":("Cerebro 3D (three.js) girando; zona de recompensa brillando; etiqueta","Órbita 3D","Barrido"),
"hormone_chart":("Curva de estradiol animada (ilustrativa) + cifras +26% / +37%","Push-in","Barrido"),
"replication_fail":("Dos expedientes: estudio original vs. réplica fallida + sello HIPÓTESIS","Deriva","Barrido"),
"brain_analyst":("Cerebro caricaturizado con lentes y corbata + gráfica bursátil","Deriva","Barrido"),
"world_map4":("Globo 3D vectorial con 4 países marcados + TAMAÑO vs. FIRMEZA","Rotación","Barrido"),
"size_vs_firm":("Barras de tamaño (ilustrativas) + 4 bloques de firmeza que se encienden","Push-in","Barrido"),
"time_hourglass":("Reloj de arena animado + tipografía cinética","Deriva","Barrido"),
"hunger_exp":("Tarjetas 66 con hambre / 58 saciados + maniquí + sello","Push-in","Barrido"),
"ses_bars":("Barras por nivel socioeconómico (ilustrativas) + cerebro caricaturizado","Push-in","Barrido"),
"culture_compare":("Barras comparativas por país (ilustrativas)","Deriva","Barrido"),
"socio_dial":("Dial de sociosexualidad + 5 maniquíes de distinto busto + sello","Push-in","Barrido"),
"myths":("3 tarjetas MITO tachadas → REALIDAD","Deriva","Barrido"),
"conclusion":("Tipografía cinética + cerebro 3D con 3 zonas encendidas","Órbita 3D","Barrido"),
"cta":("Avance del próximo episodio + pregunta para comentarios","Deriva","Fundido a logo"),
"number_07":("0.7 gigante + cerebro 3D con recompensa","Push-in","Corte en seco"),
"whr_explain":("Maniquí con cinta métrica en cintura y cadera + división animada","Push-in","Barrido"),
"singh_figures":("4 maniquíes 0.7–1.0; el 0.7 se ilumina + sello","Deriva","Barrido"),
"brain_3d_reward":("Cerebro 3D: núcleo accumbens y corteza cingulada señalados","Órbita 3D","Barrido"),
"caution_stamp":("Sello n = 14 sobre cerebro","Push-in","Barrido"),
"blind_setup":("Tipografía cinética + patrón braille animado","Deriva","Barrido"),
"mannequins":("Maniquíes 0.70 vs. 0.84 con manos + barras (ilustrativas) + sello","Push-in","Barrido"),
"amazon":("Mapa de Sudamérica que se dibuja + marcador en Perú","Push-in","Barrido"),
"amazon_result":("3 maniquíes; gana el de más peso y proporción más alta + sello","Deriva","Barrido"),
"brain_update":("Cerebro caricaturizado + barra 'CULTURA v2.0 actualizando'","Deriva","Barrido"),
"lumbar_intro":("Silueta de perfil; la columna se dibuja en rojo","Push-in","Barrido"),
"lumbar_angle":("Perfil con curvatura que cambia + transportador hasta 45.5°","Push-in","Barrido"),
"pregnancy_spine":("Perfil con vientre que crece + flecha de peso + sello HIPÓTESIS","Deriva","Barrido"),
"fat_dha":("Cadena hexagonal omega-3 + maniquí + sello CORRELACIÓN","Push-in","Barrido"),
"fat_twist":("Expediente NO CONFIRMADO + tipografía cinética","Deriva","Barrido"),
"social_feed":("3 teléfonos con feed abstracto + sello PREGUNTA ABIERTA","Deriva","Barrido")}
def tc(s): m,s=divmod(s,60); return f"{int(m):02d}:{s:05.2f}"
def srt_t(s): h=int(s//3600); m=int(s%3600//60); sec=s%60; return f"{h:02d}:{m:02d}:{int(sec):02d},{int((sec%1)*1000):03d}"
for ep in EPISODIOS:
    slug=ep["slug"]; meta=json.load(open(f"{slug}/timing.json"))
    # SRT (same chunking as on-screen captions)
    cues=[]
    for b in meta["blocks"]:
        w=b["txt"].split(); g=[]; c=[]
        for x in w:
            c.append(x)
            if len(c)>=7 or (re.search(r"[.!?…:]$",x) and len(c)>=3): g.append(c); c=[]
        if c:
            if g and len(c)<=2: g[-1]+=c
            else: g.append(c)
        tot=sum(len(" ".join(x))+8 for x in g); t=b["start"]
        for x in g:
            d=b["dur"]*(len(" ".join(x))+8)/tot; cues.append((t,t+d," ".join(x))); t+=d
    open(f"{slug.upper()}_subtitulos_es.srt","w").write("\n".join(f"{i}\n{srt_t(a)} --> {srt_t(z)}\n{s}\n" for i,(a,z,s) in enumerate(cues,1)))
    # Script + technical table
    L=[f"# {ep['titulo']}\n","Serie: EL LADO OSCURO DE LA ATRACCIÓN · 16:9 1920×1080 · 30 fps · Narrador: ElevenLabs \"Japa\" (eleven_v4)\n",
       f"Duración total: {tc(meta['total']+7)} (incluye 7 s de cierre)\n","## Guion completo (narración)\n"]
    for b in meta["blocks"]: L.append(f"**[{tc(b['start'])}]** {b['txt']}\n")
    L.append("\n## Guion técnico / plan de montaje\n")
    L.append("| Inicio | Fin | Narración (inicio) | Visual | Cámara | Texto en pantalla | Música | SFX | Transición | Fuente · Evidencia |")
    L.append("|--------|-----|--------------------|--------|--------|-------------------|--------|-----|------------|--------------------|")
    bl=meta["blocks"]
    for i,b in enumerate(bl):
        end=bl[i+1]["start"] if i+1<len(bl) else meta["total"]
        vis,cam,tr=SCENE_DESC.get(b["scene"],("—","—","—"))
        mus="Pad ambiental + latido" if 0.18<b["start"]/meta["total"]<0.82 else "Drone ambiental"
        sfx="Whoosh" + (" + golpe de capítulo" if b["id"] in ("exp1","bio1","exp2","mitos","whr1","ciegos","angulo") else "")
        tag={"D":"DEMOSTRADO","P":"PROBABLE","H":"HIPÓTESIS"}.get(b["tag"],"—")
        L.append(f"| {tc(b['start'])} | {tc(end)} | {b['txt'][:60]}… | {vis} | {cam} | {b['ost'] or '—'} | {mus} | {sfx} | {tr} | {b['src'] or '—'} · {tag} |")
    open(f"{slug.upper()}_guion_y_montaje.md","w").write("\n".join(L))
    print(slug,"ok",len(cues),"subtítulos")
