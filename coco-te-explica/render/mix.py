import subprocess
ev=[("boom",0.0)]+[("whoosh",t-0.15) for t in [3.7,12.3,22.6,34.3,45.0,59.4,72.1]]
ev+=[("pop",t) for t in [1.6,3.9,6.5,7.4,10.2,12.5,18.0,24.9,39.9,52.5,52.8,57.9,65.6,75.0,79.0,80.9]]
ev+=[("thud",t) for t in [22.65,25.3,40.1,69.3]]
ev+=[("ding",t) for t in [18.5,27.3,29.5,32.0,35.6,49.0,50.6,60.6,62.0,75.5,76.9]]
ev+=[("buzz",20.2),("spray",46.5),("applause",59.5)]
inputs=["-i","../voces/COCO_PARTE1_VOZ_COMPLETA.mp3"]; f=[]
for i,(n,t) in enumerate(ev):
    inputs+=["-i",f"sfx/{n}.wav"]; ms=int(max(0,t)*1000)
    f.append(f"[{i+1}:a]aresample=44100,aformat=channel_layouts=mono,adelay={ms}:all=1[s{i}]")
f.append("".join(f"[s{i}]" for i in range(len(ev)))+f"amix=inputs={len(ev)}:normalize=0,volume=0.45[sfx]")
f.append("[0:a]aresample=44100,aformat=channel_layouts=mono,apad=whole_dur=84.6[v]")
f.append("[v][sfx]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[out]")
cmd=["ffmpeg","-loglevel","error","-y"]+inputs+["-filter_complex",";".join(f),"-map","[out]","-ac","2","-ar","44100","-c:a","pcm_s16le","audio_mix.wav"]
subprocess.run(cmd,check=True); print("ok")
