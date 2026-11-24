import numpy as np, json, sys, wave
ep=sys.argv[1]; meta=json.load(open(f"../{ep}/timing.json"))
SR=44100; T=meta["total"]+7.0; n=int(SR*T); t=np.arange(n)/SR
rng=np.random.default_rng(7)
def note(f): return 440*2**((f-69)/12)
out=np.zeros(n)
# drone
out+=0.16*np.sin(2*np.pi*55*t)*(0.7+0.3*np.sin(2*np.pi*0.05*t))
out+=0.08*np.sin(2*np.pi*82.41*t+0.5*np.sin(2*np.pi*0.1*t))
# pad progression Am F C G (minor, slow)
prog=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]; seg=12.0
env=np.zeros(n)
for k in range(int(T/seg)+1):
    a=int(k*seg*SR); b=min(n,int((k+1)*seg*SR)+int(2*SR))
    if a>=n: break
    tt=np.arange(b-a)/SR; e=np.minimum(1,tt/3)*np.minimum(1,(seg+2-tt)/3).clip(0,1)
    for m in prog[k%4]:
        f=note(m)
        for det in (-0.12,0.12):
            out[a:b]+=0.022*e*np.sin(2*np.pi*f*(1+det/100)*tt+rng.random()*6)
            out[a:b]+=0.008*e*np.sin(2*np.pi*f*2*(1+det/100)*tt)
# soft heartbeat pulse in the middle 60%
hb=np.zeros(n); per=60/58
for k in np.arange(T*0.18,T*0.82,per):
    for off,amp in ((0,1),(0.22,0.6)):
        a=int((k+off)*SR); L=int(0.18*SR)
        if a+L<n: tt=np.arange(L)/SR; hb[a:a+L]+=amp*np.sin(2*np.pi*48*tt)*np.exp(-tt*22)
out+=0.22*hb
# risers before chapter blocks
chap_ids={"ep1":["exp1","bio1","exp2","mitos"],"ep2":["whr1","ciegos","angulo","mitos"]}[ep]
for bl in meta["blocks"]:
    if bl["id"] in chap_ids:
        a=int(max(0,bl["start"]-2.2)*SR); L=int(2.2*SR)
        nz=rng.standard_normal(L); tt=np.arange(L)/L
        k=np.ones(40)/40; nz=np.convolve(nz,k,mode="same")
        out[a:a+L]+=0.25*nz*tt**2
# reverb (exponential noise IR)
ir_len=int(2.5*SR); ir=rng.standard_normal(ir_len)*np.exp(-np.arange(ir_len)/SR*2.2); ir/=np.abs(ir).sum()/6
L=1<<int(np.ceil(np.log2(n+ir_len)))
wet=np.fft.irfft(np.fft.rfft(out,L)*np.fft.rfft(ir,L),L)[:n]
mix=0.6*out+0.5*wet
fade=np.minimum(1,t/4)*np.minimum(1,(T-t)/5).clip(0,1); mix*=fade
mix/=np.abs(mix).max()*1.12
st=np.stack([mix,np.roll(mix,int(0.012*SR))],1)
with wave.open(f"music_{ep}.wav","wb") as w:
    w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st*32767).astype(np.int16).tobytes())
print("ok",round(T,1))
