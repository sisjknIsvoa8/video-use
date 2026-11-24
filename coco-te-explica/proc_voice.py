import subprocess,json,struct,math,sys,os,glob
part=sys.argv[1]; target=float(sys.argv[2])
from lines import PARTE2,PARTE3,PARTE4
L={"parte2":PARTE2,"parte3":PARTE3,"parte4":PARTE4}[part]
os.makedirs(f"{part}/proc",exist_ok=True)
subprocess.run(["ffmpeg","-loglevel","error","-y","-f","lavfi","-i","anullsrc=r=44100:cl=mono","-t","0.15",f"{part}/proc/gap.wav"],check=True)
durs=[];lst=[]
for i in range(1,len(L)+1):
    o=f"{part}/proc/{i:02d}.wav"
    subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f"{part}/voces/{i:02d}.mp3","-af","silenceremove=start_periods=1:start_threshold=-45dB:stop_periods=-1:stop_duration=0.35:stop_threshold=-45dB,apad=pad_dur=0.05","-ar","44100","-ac","1",o],check=True)
    d=float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",o],capture_output=True,text=True).stdout)
    durs.append(d); lst+= [f"file '{i:02d}.wav'","file 'gap.wav'"]
open(f"{part}/proc/list.txt","w").write("\n".join(lst))
subprocess.run(["ffmpeg","-loglevel","error","-y","-f","concat","-safe","0","-i",f"{part}/proc/list.txt","-c","pcm_s16le",f"{part}/proc/raw.wav"],check=True)
raw=sum(durs)+0.15*len(durs)
tempo=max(1.0,min(1.2,raw/target)); print("raw",round(raw,1),"tempo",round(tempo,3))
subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f"{part}/proc/raw.wav","-af",f"atempo={tempo},loudnorm=I=-14:TP=-1.5:LRA=11","-ar","44100","-b:a","192k",f"{part}/VOZ.mp3"],check=True)
starts=[];t=0
for d in durs: starts.append(round(t/tempo,2)); t+=d+0.15
total=round(t/tempo,2)
pcm=subprocess.run(["ffmpeg","-loglevel","error","-i",f"{part}/VOZ.mp3","-ac","1","-ar","16000","-f","s16le","-"],capture_output=True).stdout
n=len(pcm)//2; s=struct.unpack(f"<{n}h",pcm); hop=16000//30; env=[]
for i in range(0,n,hop):
    seg=s[i:i+hop]; env.append(math.sqrt(sum(x*x for x in seg)/max(1,len(seg)))/32768)
mx=sorted(env)[int(len(env)*.97)]; env=[min(1,e/mx) for e in env]
env=[round((env[max(0,i-1)]+2*env[i]+env[min(len(env)-1,i+1)])/4,3) for i in range(len(env))]
meta=dict(starts=starts,durs=[round(d/tempo,3) for d in durs],who=[w for w,_ in L],total=total)
import re
meta["txt"]=[re.sub(r"\[[^\]]*\]\s*","",x).replace('"',"«",1).replace('"',"»",1).replace('"',"«",1).replace('"',"»",1) for _,x in L]
open(f"{part}/timing.js","w").write("window.ENV="+json.dumps(env)+";\nwindow.META="+json.dumps(meta,ensure_ascii=False)+";")
print(json.dumps({"starts":starts,"total":total}))
