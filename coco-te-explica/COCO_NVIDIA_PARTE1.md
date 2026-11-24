# COCO TE EXPLICA — "CAYÓ EN 11 DÍAS Y VOLVIÓ" (Parte 1 de 3)

Video vertical 9:16 · 1080×1920 · ~82 s · TikTok / Reels / Shorts
Investigación cerrada al 24 nov 2026. Antes de publicar, vuelve a revisar las audiencias (1 y 3 dic): todavía no han ocurrido.

---

## 0. REPARTO

### COCO (protagonista, narra todo)
Perrito blanco de peluche, original. Es curioso e ingenuo: pregunta como un niño y reacciona exageradamente a cada noticia.

**Rasgos fijos, iguales en las 8 escenas:**
- Cuerpo de peluche blanco, rechoncho y **redondo**, con pelo suave.
- Orejas negras caídas, **cortas y redondeadas**.
- Ojos cerrados y sonrientes, en forma de arco.
- Hocico **corto y redondo**, con nariz negra grande y brillante.
- **Mejillas rosadas** bordadas.
- Collar rojo con una **placa en forma de huesito que lleva la letra "C"**.
- Gorra lisa color crema, con visera verde salvia y **sin logo ni texto**.
- Sin dientes y sin pupilas.

**Diferenciadores obligatorios** (para que no se parezca a ningún personaje registrado): cara redonda con hocico corto, no alargado; mejillas rosadas; placa "C". **No uses la foto original como imagen de referencia** en la IA de imagen o video, porque arrastra el diseño del personaje con copyright. Primero genera la hoja de modelo de Coco (prompt 4.1) y usa SOLO esa imagen como referencia en todas las escenas.

### PIPO (el pajarito escéptico)
Pollito amarillo de peluche, pequeño y **casi esférico**, con ojos cerrados y sonrientes, **pico naranja redondito** y **un solo rizo de pluma en la cabeza** (nada de copete de puntas). Siempre va envuelto en una mantita roja de borrego con cuello verde menta. Es el que corrige: habla poco, seco y con cara de "ajá…".

### JEFE CHAMARRA (el personaje del CEO)
Caricatura de peluche que representa a Jensen Huang **sin imitar su cara ni su voz**.
- **Qué es:** un osito de peluche gris pizarra.
- **Pelo:** mechón esponjoso color plata peinado hacia atrás.
- **Ropa:** chamarra de "cuero" negra en miniatura (su prenda icónica, genérica) y camiseta negra debajo.
- **Accesorio:** sostiene un chip verde pequeño y genérico, sin logo.
- **Expresiones:**
  - E5 renuncia: triste, con una cajita de cartón.
  - E7 regreso: radiante, entre aplausos.
  - E8 Congreso: nervioso frente a un micrófono.
- **No habla con voz propia** (no clonamos ni imitamos a una persona real). Sus frases reales salen como **tarjeta de cita en pantalla con la fuente**:
  - "I was unfaithful to my wife" — Carta, 8 nov.
  - "I'm going to be a better CEO the second time around" — 23 nov.
- **Rótulo** la primera vez que aparece: `JEFE CHAMARRA = caricatura del CEO de Nvidia`.
- **Reglas:** no aparece nunca en escenas románticas. A ninguna mujer real se la representa con personaje: Alice Huang y las demás solo aparecen como **texto o silueta neutra con signo de interrogación**.

---

## 1. GUION COMPLETO ESCENA POR ESCENA (~225 palabras, ~82 s)

| #  | Tiempo    | Quién | Línea                                                                                                                       |
|----|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------|
| E1 | 0–3 s     | COCO  | ¡El jefe de Nvidia renunció… y volvió en once días!                                                                         |
| E2 | 3–8 s     | COCO  | 29 de octubre: inteligencia de Estados Unidos sospechaba de una amiga cercana suya, Alice Huang. Mismo apellido… cero parentesco. |
| E3 | 8–15 s    | COCO  | Y el 8 de noviembre él mismo escribió: "le fui infiel a mi esposa".                                                         |
|    |           | PIPO  | ¡Coco! Eso lo admitió él. Lo de espía… no.                                                                                  |
| E4 | 15–25 s   | COCO  | Entonces… ¿es espía?                                                                                                        |
|    |           | PIPO  | No está probado. China dice que es "pura invención", Singapur no la investigó por espionaje, y Justicia de EE.UU. dice que no ha concluido nada. |
| E5 | 25–35 s   | COCO  | 12 de noviembre: ¡renuncia! Y la prensa reporta otra relación… en la oficina.                                               |
|    |           | PIPO  | Sin confirmar. Lo grave, según la junta: no fue franco con ellos.                                                           |
| E6 | 35–50 s   | COCO  | ¿Y la bolsa? ¡Se incendió! El 20 de noviembre la acción cayó catorce por ciento en un solo día… ¡casi medio billón de dólares, puf! |
|    |           | PIPO  | Y eso que acababan de vender récord: ciento quince mil millones en un trimestre.                                            |
|    |           | COCO  | ¿Y cómo volvió?                                                                                                             |
| E7 | 50–65 s   | COCO  | ¡23 de noviembre: lo regresan! Voto unánime… y la acción rebota treinta y uno por ciento.                                   |
|    |           | PIPO  | Trump presionó, el gobierno dijo que no veía riesgo… pero la investigación independiente sigue abierta.                     |
| E8 | 65–82 s   | COCO  | Entonces… ¿el talento pesa más que la confianza? El 1 de diciembre lo esperan en el Congreso, y el 3, en el Senado. Eso te lo cuento en la Parte 2. Soy Coco… ¿tú lo perdonarías? Te leo. |

**Bucle:** el último plano termina en la misma cara de shock de Coco del segundo 0, de modo que el video "reinicia" sin costura.

---

## 2. TEXTO PARA ELEVENLABS (copiar y pegar)

**Modelo:** Eleven v3, que es el que interpreta las etiquetas de emoción. Escribe las etiquetas **en inglés**: v3 las entiende mejor así que en español.
**Método:** genera cada escena por separado y monta los clips en el editor, uno por personaje y por escena. Así controlas mejor los tiempos.

### Ajustes de voz
| Personaje | Stability | Similarity | Style Exag. | Velocidad | Speaker boost |
|-----------|-----------|------------|-------------|-----------|---------------|
| Coco      | 45 %      | 75 %       | 30 %        | 1.0       | ON            |
| Pipo      | 60 %      | 75 %       | 15 %        | 0.9       | ON            |

### Voz de Coco (recomendación: diséñala en Voice Design)
No encontré en el catálogo una voz mexicana femenina o neutra que sea aguda sin sonar infantil. Mejor créala en **Voice Design** con esta descripción:

> Warm, bright, curious Mexican Spanish voice, young adult, slightly high-pitched but not childish, playful and expressive, like a friendly cartoon narrator telling gossip to a friend, clear diction, neutral Mexican accent, studio quality.

**Alternativas de catálogo** (español mexicano, revisadas hoy en ElevenLabs):
1. **Chuysito** — `dcEM0WOwbt9XwI31mBIu` · joven, mexicano.
2. **Alejandro – Energic & Friendly** — `I1n8B4pOly0qmOu46LFX` · joven, mexicano, enérgico.

### Voz de Pipo (más grave, lenta, de "corrector")
1. **Japa – Narrador Cinematográfico Profundo** — `ifgQptCyquMG1K4fdoT3` · latino, grave, solemne. Funciona muy bien como contraste cómico frente a un pollito.
2. **Marco Ruiz** — `Yzf6MbjAm6T3WgC7SBWE` · mexicano, serena.

### Pistas (copiar tal cual)

**COCO — E1**
```
[shocked] ¡El jefe de Nvidia renunció... [dramatic pause] y volvió en ONCE días!
```
**COCO — E2**
```
[whispers] 29 de octubre... inteligencia de Estados Unidos sospechaba de una amiga cercana suya: Alice Huang. [quickly] Mismo apellido... ¡cero parentesco!
```
**COCO — E3**
```
[gasps] Y el 8 de noviembre, él mismo escribió: [slowly] "le fui infiel a mi esposa".
```
**PIPO — E3**
```
[annoyed] ¡Coco! [pause] Eso lo admitió él. [slowly] Lo de espía... no.
```
**COCO — E4**
```
[nervous] Entonces... ¿es espía?
```
**PIPO — E4**
```
[serious] No está probado. [pause] China dice que es "pura invención"... Singapur no la investigó por espionaje... y Justicia de Estados Unidos dice que no ha concluido nada.
```
**COCO — E5**
```
[sad] 12 de noviembre: ¡renuncia! [whispers] Y la prensa reporta otra relación... en la oficina.
```
**PIPO — E5**
```
[dry] Sin confirmar. [pause] Lo grave, según la junta: no fue franco con ellos.
```
**COCO — E6**
```
[panicked] ¿Y la bolsa? ¡Se incendió! [fast] El 20 de noviembre la acción cayó CATORCE por ciento en un solo día... [gasps] ¡casi medio billón de dólares, puf!
```
**PIPO — E6**
```
[sarcastic] Y eso que acababan de vender récord: ciento quince mil millones... en un trimestre.
```
**COCO — E6 (cliffhanger)**
```
[curious] ¿Y cómo volvió?
```
**COCO — E7**
```
[excited] ¡23 de noviembre: lo regresan! Voto unánime... [laughs] y la acción rebota TREINTA Y UNO por ciento.
```
**PIPO — E7**
```
[skeptical] Trump presionó... el gobierno dijo que no veía riesgo... [pause] pero la investigación independiente sigue abierta.
```
**COCO — E8**
```
[thoughtful] Entonces... ¿el talento pesa más que la confianza? [pause] El 1 de diciembre lo esperan en el Congreso... y el 3, en el Senado. [playful] Eso te lo cuento en la Parte 2. [warm] Soy Coco... ¿tú lo perdonarías? Te leo.
```

---

## 3. STORYBOARD

**Prefijo de prompt.** Pega SIEMPRE este bloque al inicio de cada prompt (las tablas de abajo lo abrevian como `[BASE]`):

> original white plush puppy character "Coco", round chubby body, soft white fur, short rounded floppy black ears, closed smiling arc eyes, short round muzzle, big glossy black nose, embroidered pink cheeks, red collar with a small bone-shaped tag with the letter C, plain cream baseball cap with sage-green brim and NO logo or text, small round yellow plush chick "Pipo" with one curl feather and an orange round beak wrapped in a red fleece blanket with mint collar, cute, expressive, soft 3D plush toy render, studio lighting, not realistic, not creepy, no human teeth, vertical 9:16

**Negative prompt.** Agrégalo siempre:

> Snoopy, Peanuts, Woodstock, beagle with long snout, logos, brand marks, text on cap, realistic dog, human teeth, creepy, extra limbs, deformed

### Tabla A · Qué se ve y qué se oye

| Esc. | Tiempo  | Visual / acción                                                                                                             | Texto en pantalla                                                                         | Sonido                                             |
|------|---------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------|
| E1   | 0–3     | Primer plano de Coco con cara de shock: las orejas saltan y la gorra brinca. Zoom rápido hacia él.                          | **EL CEO MÁS PODEROSO RENUNCIÓ… Y VOLVIÓ EN 11 DÍAS**                                     | Golpe "boom" + record scratch                      |
| E2   | 3–8     | Coco susurra frente a un titular genérico. Entra la silueta con "?".                                                         | **29 OCT** · "Alice Huang ≠ familia" · fuente: *NYT, 29 oct*                              | Tic-tac de tensión, "whoosh" al cambiar de plano   |
| E3   | 8–15    | Coco con una carta en las patitas. Pipo asoma desde abajo, molesto. Aparece la tarjeta de cita.                              | **8 NOV** · "I was unfaithful to my wife" · fuente: *Carta de Huang, 8 nov*               | Papel + "ding" en la cita, "boing" al entrar Pipo   |
| E4   | 15–25   | Pantalla dividida: Coco duda y Pipo niega con la cabeza. Tres sellos rojos caen uno por uno.                                 | **¿ESPÍA?** → sellos "NO PROBADO" · "China: 'pura invención'" · "Singapur: no fue por espionaje" · "DOJ: no ha concluido" | "Thud" de sello ×3 |
| E5   | 25–35   | Silla vacía con el Jefe Chamarra de espaldas, saliendo con una cajita. Coco triste. Contador de días.                        | **12 NOV · RENUNCIA** · "CEO interina: Colette Kress" · "2ª relación: NO confirmada" · **DÍA 0** | Puerta, piano triste de 1 s                 |
| E6   | 35–50   | Gráfico rojo cayendo; Coco apaga "llamas" de dibujo con el extintor; Pipo con una tablita de récord.                         | **20 NOV · -14% EN UN DÍA** · **≈ -490 MIL MILLONES $** · luego "Récord: $115.8 MIL MILLONES (Q3)" | Alarma suave, "pssshh" del extintor, "cha-ching" |
| E7   | 50–65   | Confeti; el Jefe Chamarra vuelve entre aplausos; Coco salta; flecha verde hacia arriba. Contador **DÍA 11**.                 | **23 NOV · ¡VOLVIÓ!** · "Voto unánime" · **+31%** · "Investigación: SIGUE ABIERTA"      | Aplausos, "ding" en +31 %                           |
| E8   | 65–82   | Coco y Pipo miran a cámara; el Jefe Chamarra al fondo, nervioso ante un micrófono del Capitolio. Último frame: cara de shock de E1. | **¿TALENTO O CONFIANZA?** · "1 DIC Cámara · 3 DIC Senado" · "PARTE 2 →"             | Música baja, "pop" final que empalma con E1         |

### Tabla B · Prompts de imagen o video

Cada prompt va precedido del bloque `[BASE]`.

| Esc. | Prompt                                                                                                                                                                     |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| E1   | `[BASE]`, extreme close-up, Coco gasping in shock, ears flying up, cap popping off his head, quick push-in, white background with red alert glow                            |
| E2   | `[BASE]`, Coco whispering behind his paw, behind him a generic blurred newspaper front page with no real logos, a grey neutral silhouette with a question mark              |
| E3   | `[BASE]`, Coco holding a small letter with both paws, surprised; Pipo pops up from the bottom of the frame frowning and pointing a wing                                    |
| E4   | `[BASE]`, split screen, left Coco confused with a question mark over head, right Pipo shaking head, three red "NOT PROVEN" rubber stamps falling                            |
| E5   | `[BASE]` + `slate-grey plush teddy bear with silver fluffy hair, tiny black leather-look jacket, holding a small cardboard box, seen from behind walking away from an empty office chair`, Coco sad in foreground |
| E6   | `[BASE]`, Coco panicking and spraying a small red fire extinguisher at cartoon flames rising from a red falling stock chart, Pipo calmly holding a tiny "RECORD" sign      |
| E7   | `[BASE]` + `the slate-grey plush bear in black jacket returning, smiling, confetti, small plush crowd applauding`, Coco jumping with joy, green rising arrow              |
| E8   | `[BASE]`, Coco and Pipo facing camera thoughtfully, background softly blurred: the plush bear sitting nervously at a hearing desk with a microphone, generic capitol dome silhouette |

---

## 4. PROMPTS DE PERSONAJE (genéralos primero y úsalos como referencia fija)

**4.1 Hoja de modelo de Coco + Pipo**
> Character turnaround model sheet, front, 3/4, side and back views, `[BASE]`, neutral pose plus 4 expressions (shocked, whispering, sad, joyful), plain white background, consistent proportions, no text

**4.2 Hoja de modelo del Jefe Chamarra**
> Character turnaround model sheet, original slate-grey plush teddy bear, silver fluffy swept-back hair tuft, tiny black leather-look jacket over black t-shirt, holding a small plain green chip with no logo, round black button eyes, gentle smile, soft 3D plush toy render, front, 3/4, side views, expressions: proud, sad with cardboard box, nervous at microphone, joyful, plain white background, no logos, no text, not a realistic human, not a likeness of any real person

**Consistencia:** usa la misma semilla y la hoja 4.1 como referencia de personaje en cada clip (character reference o image-to-video). Si una escena cambia la cara o la gorra, **vuelve a generarla**: no la arregles en edición.

---

## 5. MÚSICA Y EDICIÓN

### Música
Solo uso libre o comercial: Biblioteca de Música Comercial de TikTok (obligatoria si la cuenta es de empresa), YouTube Audio Library o Pixabay Music. Efectos: Pixabay SFX o ElevenLabs Sound Effects.

| Tramo    | Estilo                                 | BPM     | Nivel bajo la voz |
|----------|----------------------------------------|---------|-------------------|
| E1       | Golpe + silencio 0.3 s                 | —       | -6 dB             |
| E2–E4    | Pizzicato misterioso, "detective"      | 92–100  | -20 dB            |
| E5       | Piano suave, menor                     | 88      | -22 dB            |
| E6       | Percusión tensa en crescendo           | 110–120 | -18 dB            |
| E7       | Épica-alegre, metales                  | 124–128 | -16 dB            |
| E8       | Lo-fi suave, cálido                    | 90      | -22 dB            |

### Plan de edición
- **Cortes:** cambio visual cada 2–3 s (zoom, entrada de Pipo, fecha, gráfico, sello). Ningún plano dura más de 3 s sin movimiento.
- **Subtítulos:** blancos de 3–5 palabras por línea, con la palabra clave en **amarillo**. Fondo negro al 60 %, centrados en el tercio medio, lejos de los botones de la derecha y del pie de pantalla.
- **Cifras:** zoom de 110 % con "pop" o "ding" en cada número (14 %, 490 mil millones, 115.8 mil millones, 31 %, 11 días).
- **Contador:** esquina superior izquierda, `DÍA 0` (12 nov) → `DÍA 11` (23 nov).
- **Fuentes en pantalla:** letra pequeña abajo a la izquierda: *NYT, 29 oct* · *Carta de Huang, 8 nov* · *Reuters, 12 nov* · *Bolsa Nasdaq, 20 nov* · *Nvidia, 23 nov* · *Comité Bancario del Senado*.
- **Cierre:** últimos 2 s con la leyenda ©, y el frame final idéntico al primero.
- **Mezcla:** voz a -14 LUFS integrados; música siempre ≥12 dB por debajo de la voz.

---

## 6. PUBLICACIÓN

- **Portada:** **CAYÓ EN 11 DÍAS Y VOLVIÓ**, con Coco en shock y el Jefe Chamarra pequeño en una esquina.
- **Título:** El CEO más poderoso renunció… y volvió en 11 días 😳 | Coco te explica (Parte 1)
- **Descripción:**
  > Nvidia en 80 segundos: la carta del 8 de nov, la renuncia del 12, la caída del 20 y el regreso del 23. ¿El talento pesa más que la confianza? 👇 Parte 2: el Congreso (1 y 3 de dic).
  > Fuentes: Reuters, The New York Times, CNN, CNBC, TechCrunch, Nvidia Newsroom, El País, Infobae.
  > ©️ 2026 Coco / Ernesto - Contenido original con fines informativos. Las acusaciones de espionaje son alegaciones no probadas y las investigaciones siguen abiertas.
- **Hashtags:** #Nvidia #JensenHuang #CocoTeExplica #ElChismeTech #InteligenciaArtificial #Bolsa #Noticias
- **Hora:** 18:00–20:00 en la hora de tu público principal (si es México, hora del centro).
- **Comentario fijado:** "¿Lo perdonarías? Sí 🐶 / No 🐤 — en la Parte 2 te cuento qué pasó en el Congreso."

---

## 7. SERIE (cada parte se entiende sola)

**Parte 2 · "El regreso y el Congreso"** (publicar después del 3 dic, con lo que pase en la audiencia)
- Intervención de Trump: JD Vance y la llamada de ~45 min; Blanche informa que Huang "no es objetivo ni sujeto" del DOJ; "I convinced them" (CNBC).
- Entrevistas cerradas ante 3 comités de la Cámara (1 dic) y del abogado general Tim Teter (2 dic).
- Audiencia pública del Senado del 3 dic, 10:00 EST: "Protecting America's AI Advantage: Oversight of U.S. Export Controls". **Actualiza este punto con lo que realmente ocurra.**
- Lutnick testificará el 10 dic: la conexión con Cantor Fitzgerald y la carta de Raskin, Meeks y Kamlager-Dove.
- Críticos: Cramer, Cornyn, Curtis, Ricketts, Rick Scott, Schumer, Jeffries y Warren.

**Parte 3 · "Megaspeed: ¿a dónde fueron los chips?"**
- Megaspeed (antes 7Road) y la lista de "no vender" de junio 2025.
- **Las cifras NO se suman: cada una mide un perímetro distinto.** $4.8 mil millones (2 años) · $4.6 mil millones (año y medio) · >$4 mil millones con Alibaba (NYT, 18 nov) · $7.5 mil millones (The Information) · >$800 millones a la filial malasia · $3.6 mil millones de financiación (Strider, vía NYT).
- Century Litong y Nanjing Jinning Microwave. **Aclara en pantalla:** "NO está establecido que el ejército usara esa potencia".
- La nueva regla de exportación del 16 nov · los ~800 000–900 000 chips aprobados · SEC · citación del fiscal de California (Rob Bonta) · demanda colectiva.
- Nvidia: Comité de Seguridad Nacional y búsqueda de Chief Compliance Officer · Moody's · Q3 récord y guía de Q4 sin China · campaña Stand With Jensen (firmas autoinformadas, no verificadas).

---

## 8. PROBADO / REPORTADO / NO PROBADO (léelo antes de grabar)

### Probado o confirmado oficialmente
- **Carta del 8 nov:** "I was unfaithful to my wife", del propio Huang.
- **Renuncia** aceptada el 11 nov y anunciada el 12; Kress como CEO interina.
- **Restitución del 23 nov:** unánime y con efecto inmediato; Kress vuelve a CFO. El comunicado de Nvidia menciona "input" de altos niveles del gobierno. La investigación independiente sigue.
- **DOJ:** el 12 nov el fiscal general Blanche dijo que no ha concluido que Alice Huang sea espía.
- **Singapur:** la investigación fue por declaraciones, no por espionaje; en feb 2026 concluyó que no había evidencia suficiente.
- **Megaspeed:** dice que Alice Huang salió el 30 ago 2025.
- **Senado:** audiencia fijada para el 3 dic a las 10:00 EST, con Huang como único testigo. **Cámara:** entrevista cerrada el 1 dic.

### Reportado por prensa, no confirmado por los implicados
- Que inteligencia de EE.UU. la considerara un "activo" (NYT): es un activo encubierto, **no** una oficial entrenada.
- La relación romántica con Alice Huang (Financial Times).
- La relación con Kimberly Powell (NYT, 11 nov) y una tercera relación (Reuters, 12 nov). **Nvidia, Huang y Powell no lo han confirmado. En el video no se nombra a Powell.**
- Los montos de Megaspeed y los vínculos con contratistas de defensa chinos.

### No probado
- Que Alice Huang sea espía.
- Que los chips de Megaspeed llegaran a China o al ejército chino.
- Que Huang supiera algo o facilitara contrabando.
- Que se comprometieran secretos.

### Cifras de bolsa
- El -14 % y la pérdida de ≈$490 mil millones son del **20 nov**: de ≈$145.98 a $125.53, unas ~24.1 mil millones de acciones. El 12 nov el cierre fue -4.34 % (el -14.3 % fue solo intradía). Por eso la escena 6 dice **20 NOV**.
- Para la portada y los subtítulos, usa "≈ -490 mil millones" y no una cifra exacta.

---

## 9. COPYRIGHT Y FUENTES

**Leyenda** (al final del video y en la descripción):
> ©️ 2026 Coco / Ernesto - Contenido original con fines informativos. Las acusaciones de espionaje son alegaciones no probadas y las investigaciones siguen abiertas.

**Originalidad**
- Coco, Pipo y el Jefe Chamarra son diseños originales. No se usan nombres, logos ni diseños de personajes registrados.
- No se usan logos de Nvidia ni de medios: la palabra "Nvidia" va en tipografía neutra, solo para identificar de quién se habla.
- No se usan fotos de agencia, clips de noticiero ni canciones con copyright.
- Las citas en inglés son textuales y llevan su fuente. El resto es redacción propia, sin copiar textos de medios.

**Lenguaje:** usa siempre "presunta", "según inteligencia de EE.UU.", "alegación no confirmada" y "según la prensa".

**Fuentes:** Reuters · The New York Times · Financial Times · Wall Street Journal · CNN · CNBC · CBS News · PBS · The Hill · Axios · TechCrunch · Nvidia Newsroom · El País · Infobae.
