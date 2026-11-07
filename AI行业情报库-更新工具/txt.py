import sys, re, html
sys.stdout.reconfigure(encoding="utf-8")
raw = open(sys.argv[1], encoding='utf-8', errors='ignore').read()
raw = re.sub(r'(?is)<(script|style|svg|noscript)[^>]*>.*?</\1>', ' ', raw)
t = html.unescape(re.sub(r'<[^>]+>', '\n', raw))
lines = [l.strip() for l in t.split('\n') if l.strip()]
pat = re.compile(sys.argv[2], re.I) if len(sys.argv) > 2 else None
n = int(sys.argv[3]) if len(sys.argv) > 3 else 40
out = [l for l in lines if not pat or pat.search(l)]
print('\n'.join(l[:300] for l in out[:n]))
