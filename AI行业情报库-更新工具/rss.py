import sys, re, html
from email.utils import parsedate_to_datetime
sys.stdout.reconfigure(encoding="utf-8")
args = [a for a in sys.argv[1:] if a != '-d']
show = '-d' in sys.argv
raw = open(args[0], encoding='utf-8', errors='ignore').read()
since = args[1] if len(args) > 1 else '2026-07-20'
kw = re.compile(args[2], re.I) if len(args) > 2 else None
def tag(block, t):
    m = re.search(r'<%s[^>]*>(.*?)</%s>' % (t, t), block, re.S)
    if not m: return ''
    v = re.sub(r'^\s*<!\[CDATA\[(.*)\]\]>\s*$', r'\1', m.group(1), flags=re.S)
    v = html.unescape(re.sub(r'<[^>]+>', ' ', html.unescape(v)))
    return re.sub(r'\s+', ' ', v).strip()
for b in re.findall(r'<item>(.*?)</item>', raw, re.S):
    d = tag(b, 'pubDate')
    try: d = parsedate_to_datetime(d).strftime('%Y-%m-%d')
    except Exception: pass
    if d < since: continue
    t = tag(b, 'title'); l = tag(b, 'link')
    if kw and not kw.search(t + ' ' + l): continue
    print(d, '|', t, '|', l)
    if show: print('    ', (tag(b, 'description') or tag(b, 'content:encoded'))[:600])
