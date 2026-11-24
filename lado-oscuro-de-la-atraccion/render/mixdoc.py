import subprocess,json,sys
ep=sys.argv[1]; meta=json.load(open(f"../{ep}/timing.json")); T=meta["total"]+7.0
chap={"ep1":["exp1","bio1","exp2","mitos"],"ep2":["whr1","ciegos","angulo","mitos"]}[ep]
SFX="../../eleven/sfx"
ev=[("boom",0.0)]
for b in meta["blocks"][1:]: ev.append(("whoosh",max(0,b["start"]-0.45)))
for b in meta["blocks"]:
    if b["id"] in chap: ev.append(("thud",b["start"]-0.35))
ev.append(("boom",meta["total"]+0.1))
inputs=["-i",f"../{ep}/VOZ.mp3","-i",f"music_{ep}.wav"]; f=[]
for i,(n,t) in enumerate(ev):
    inputs+=["-i",f"{SFX}/{n}.mp3"]; f.append(f"[{i+2}:a]aresample=44100,aformat=channel_layouts=mono,adelay={int(t*1000)}:all=1[s{i}]")
f.append("".join(f"[s{i}]" for i in range(len(ev)))+f"amix=inputs={len(ev)}:normalize=0,volume=0.22[sfx]")
f.append(f"[0:a]aresample=44100,aformat=channel_layouts=mono,apad=whole_dur={T},asplit=2[v][vsc]")
f.append("[1:a]aresample=44100,aformat=channel_layouts=mono,volume=0.55[m0]")
f.append("[m0][vsc]sidechaincompress=threshold=0.04:ratio=5:attack=30:release=500[m]")
f.append("[v][sfx][m]amix=inputs=3:normalize=0:duration=first,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[out]")
subprocess.run(["ffmpeg","-loglevel","error","-y"]+inputs+["-filter_complex",";".join(f),"-map","[out]","-ac","2","-ar","48000","-c:a","pcm_s16le",f"audio_{ep}.wav"],check=True); print("ok",T)
