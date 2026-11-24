import json,subprocess
F="/usr/share/fonts/opentype/inter/InterDisplay-Black.otf"; FM="/usr/share/fonts/truetype/jetbrains-mono/JetBrainsMono-Bold.ttf"
import glob; fm=glob.glob("/usr/share/fonts/**/JetBrainsMono*Bold*.ttf",recursive=True); FM=fm[0] if fm else F
S=[("ep1","EP1_NACEN_O_SE_HACEN_16x9.mp4","SHORT_EP1_A_200ms.mp4",["hook","pregunta"],"200 MILISEGUNDOS","DECIDEN A DÓNDE MIRAS"),
   ("ep1","EP1_NACEN_O_SE_HACEN_16x9.mp4","SHORT_EP1_B_no_mide_copas.mp4",["exp1r","giro","giro2"],"EL OJO","NO MIDE COPAS"),
   ("ep1","EP1_NACEN_O_SE_HACEN_16x9.mp4","SHORT_EP1_C_hambre.mp4",["hambre","hambre2"],"¿TU GUSTO DEPENDE","DE SI YA COMISTE?"),
   ("ep2","EP2_EL_ANGULO_SECRETO_16x9.mp4","SHORT_EP2_A_ciegos.mp4",["ciegos","ciegos2"],"NUNCA VIERON","UN CUERPO…"),
   ("ep2","EP2_EL_ANGULO_SECRETO_16x9.mp4","SHORT_EP2_B_45grados.mp4",["angulo","angulo2","angulo3"],"NO ES EL TAMAÑO","ES EL ÁNGULO"),
   ("ep2","EP2_EL_ANGULO_SECRETO_16x9.mp4","SHORT_EP2_C_amazonas.mp4",["amazonas","amazonas2","humor"],"EL PUEBLO QUE","ROMPIÓ LA REGLA")]
for ep,src,out,ids,l1,l2 in S:
    m=json.load(open(f"{ep}/timing.json")); bl=m["blocks"]; idx=[i for i,b in enumerate(bl) if b["id"] in ids]
    a=max(0,bl[idx[0]]["start"]-0.4); last=bl[idx[-1]]; z=last["start"]+last["dur"]+0.5
    vf=(f"[0:v]split=2[a][b];[a]scale=-2:1920,crop=1080:1920,boxblur=30:3,eq=brightness=-0.25[bg];[b]scale=1080:-2[fg];[bg][fg]overlay=0:560,"
        f"drawtext=fontfile={F}:text='{l1}':fontcolor=white:fontsize=88:x=(w-text_w)/2:y=190:borderw=6:bordercolor=black,"
        f"drawtext=fontfile={F}:text='{l2}':fontcolor=0xf5b942:fontsize=88:x=(w-text_w)/2:y=300:borderw=6:bordercolor=black,"
        f"drawtext=fontfile={FM}:text='EL LADO OSCURO DE LA ATRACCIÓN':fontcolor=0xe1173f:fontsize=34:x=(w-text_w)/2:y=1300,"
        f"drawtext=fontfile={FM}:text='Episodio completo en el canal':fontcolor=white:fontsize=32:x=(w-text_w)/2:y=1360[v]")
    subprocess.run(["ffmpeg","-loglevel","error","-y","-ss",f"{a:.2f}","-to",f"{z:.2f}","-i",src,"-filter_complex",vf,"-map","[v]","-map","0:a","-c:v","libx264","-crf","20","-preset","medium","-pix_fmt","yuv420p","-c:a","aac","-b:a","192k","-movflags","+faststart",out],check=True)
    print(out,round(z-a,1),"s")
