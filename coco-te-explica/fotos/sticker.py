import sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops
def sticker(name,cx,cy,rx,ry,out,border=22,width=720):
    im=Image.open(name+'.jpg').convert('RGB'); m=Image.open(name+'_mask.png').convert('L')
    m=m.point(lambda v:255 if v>110 else int(v*2.3))
    el=Image.new('L',im.size,0); ImageDraw.Draw(el).ellipse([cx-rx,cy-ry,cx+rx,cy+ry],fill=255)
    a=ImageChops.multiply(m,el)
    pad=int(rx*.25); box=(max(0,cx-rx-pad),max(0,cy-ry-pad),min(im.width,cx+rx+pad),min(im.height,cy+ry+pad))
    im=im.crop(box); a=a.crop(box)
    sc=width/im.width; im=im.resize((width,int(im.height*sc)),Image.LANCZOS); a=a.resize(im.size,Image.LANCZOS)
    a=a.filter(ImageFilter.GaussianBlur(1.2))
    pad2=border+6; W,H=im.width+2*pad2,im.height+2*pad2
    A=Image.new('L',(W,H),0); A.paste(a,(pad2,pad2))
    outline=A.point(lambda v:255 if v>60 else 0).filter(ImageFilter.MaxFilter(2*border+1)).filter(ImageFilter.GaussianBlur(2))
    base=Image.new('RGBA',(W,H),(255,255,255,0)); white=Image.new('RGBA',(W,H),(250,250,252,255))
    base=Image.composite(white,base,outline)
    ph=Image.new('RGBA',(W,H),(0,0,0,0)); ph.paste(im,(pad2,pad2)); ph.putalpha(A)
    base.alpha_composite(ph)
    bb=base.getbbox(); base=base.crop(bb); base.save(out); print(out,base.size)
args=sys.argv[1:]
sticker(args[0],*map(int,args[1:5]),args[5])
