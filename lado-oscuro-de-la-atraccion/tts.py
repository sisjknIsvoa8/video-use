import json,subprocess,time,sys,os
from guiones import EPISODIOS
V="ifgQptCyquMG1K4fdoT3"
slug=sys.argv[1]; ep=[e for e in EPISODIOS if e["slug"]==slug][0]
os.makedirs(f"{slug}/voces",exist_ok=True)
for i,b in enumerate(ep["bloques"],1):
    out=f"{slug}/voces/{i:02d}_{b[0]}.mp3"
    if os.path.exists(out) and os.path.getsize(out)>2000: continue
    for k in range(4):
        c=subprocess.run(["curl","-sS","-m","120","-o",out,"-w","%{http_code}","-X","POST",
          f"https://api.elevenlabs.io/v1/text-to-speech/{V}?output_format=mp3_44100_128",
          "-H","xi-api-key: proxy-injected","-H","Content-Type: application/json",
          "-d",json.dumps({"text":b[1],"model_id":"eleven_v4"})],capture_output=True,text=True).stdout
        if c=="200": break
        time.sleep(6)
    print(i,b[0],c,flush=True)
