import subprocess,json,sys,os,re,glob
from guiones import EPISODIOS
slug=sys.argv[1]; GAP=0.6; LEAD=0.4
ep=[e for e in EPISODIOS if e["slug"]==slug][0]
os.makedirs(f"{slug}/proc",exist_ok=True)
subprocess.run(["ffmpeg","-loglevel","error","-y","-f","lavfi","-i","anullsrc=r=44100:cl=mono","-t",str(GAP),f"{slug}/proc/gap.wav"],check=True)
subprocess.run(["ffmpeg","-loglevel","error","-y","-f","lavfi","-i","anullsrc=r=44100:cl=mono","-t",str(LEAD),f"{slug}/proc/lead.wav"],check=True)
files=sorted(glob.glob(f"{slug}/voces/*.mp3")); durs=[]; lst=["file 'lead.wav'"]
for i,fn in enumerate(files,1):
    o=f"{slug}/proc/{i:02d}.wav"
    subprocess.run(["ffmpeg","-loglevel","error","-y","-i",fn,"-af","silenceremove=start_periods=1:start_threshold=-45dB:stop_periods=-1:stop_duration=0.7:stop_threshold=-45dB,apad=pad_dur=0.05","-ar","44100","-ac","1",o],check=True)
    d=float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",o],capture_output=True,text=True).stdout); durs.append(d)
    lst+=[f"file '{i:02d}.wav'","file 'gap.wav'"]
open(f"{slug}/proc/list.txt","w").write("\n".join(lst))
subprocess.run(["ffmpeg","-loglevel","error","-y","-f","concat","-safe","0","-i",f"{slug}/proc/list.txt","-af","loudnorm=I=-16:TP=-1.5:LRA=11","-ar","44100","-b:a","192k",f"{slug}/VOZ.mp3"],check=True)
starts=[];t=LEAD
for d in durs: starts.append(round(t,2)); t+=d+GAP
blocks=[dict(id=b[0],start=s,dur=round(d,2),txt=re.sub(r"\[[^\]]*\]\s*","",b[1]),scene=b[2],ost=b[3],src=b[4],tag=b[5]) for b,s,d in zip(ep["bloques"],starts,durs)]
meta=dict(total=round(t,2),blocks=blocks,titulo=ep["titulo"])
open(f"{slug}/timing.js","w").write("window.META="+json.dumps(meta,ensure_ascii=False)+";")
json.dump(meta,open(f"{slug}/timing.json","w"),ensure_ascii=False,indent=1)
print("total",round(t,1),"s =",round(t/60,2),"min")
