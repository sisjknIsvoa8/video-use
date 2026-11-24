import subprocess,sys,json
part,total,music_off=sys.argv[1],float(sys.argv[2]),float(sys.argv[3])
ev=json.loads(sys.argv[4])
inputs=["-i",f"../{part}/VOZ.mp3","-i","../eleven/music.mp3"]; f=[]
for i,(n,t) in enumerate(ev):
    inputs+=["-i",f"../eleven/sfx/{n}.mp3"]
    f.append(f"[{i+2}:a]aresample=44100,aformat=channel_layouts=mono,adelay={int(max(0,t)*1000)}:all=1[s{i}]")
f.append("".join(f"[s{i}]" for i in range(len(ev)))+f"amix=inputs={len(ev)}:normalize=0,volume=0.5[sfx]")
f.append(f"[0:a]aresample=44100,aformat=channel_layouts=mono,apad=whole_dur={total},asplit=2[v][vsc]")
f.append(f"[1:a]aresample=44100,aformat=channel_layouts=mono,atrim={music_off}:{music_off+total},asetpts=PTS-STARTPTS,afade=t=out:st={total-1.2}:d=1.2,volume=0.32[m0]")
f.append("[m0][vsc]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[m]")
f.append("[v][sfx][m]amix=inputs=3:normalize=0:duration=first,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[out]")
subprocess.run(["ffmpeg","-loglevel","error","-y"]+inputs+["-filter_complex",";".join(f),"-map","[out]","-ac","2","-ar","44100","-c:a","pcm_s16le",f"audio_{part}.wav"],check=True)
print("ok")
