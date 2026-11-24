import sys
part,scenes,out=sys.argv[1:4]
head=open('head_part.js').read().split('\n')
# head lines (1-based): 24-28 consts, 29-44 L_TXT, 57-58 KWSET/_OLD
new=head[:23]
new+=["const SCN=window.PART_SCN;","const END_VOICE=window.META.total, TOTAL=window.META.total+0.8;","const L_START=window.META.starts;","const L_DUR=window.META.durs;","const L_WHO=window.META.who;","const L_TXT=window.META.txt;"]
new+=head[44:56]
new+=["const KWSET=new Set(window.PART_KW||[]);"]
new+=head[58:]
h='\n'.join(new)
i=h.index('<script>')
body=open('v2_body.js').read()
body=body[:body.index('function sceneIndex')]
tail=open('engine_tail.js').read()
h=h.replace('top:1525px','top:1612px')
html=h[:i]+f'<script src="../{part}/timing.js"></script>\n<script src="{scenes}"></script>\n'+h[i:]+body+tail+'\n</script></body></html>'
open(out,'w').write(html); print("built",out)
