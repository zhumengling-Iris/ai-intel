import sys, re
sys.stdout.reconfigure(encoding='utf-8')
t = open(sys.argv[1], encoding='utf-8', errors='ignore').read()
t = re.sub(r'<ref[^>/]*/>', '', t)
t = re.sub(r'<ref[^>]*>.*?</ref>', '', t, flags=re.S)
def tmpl(m):
    parts = [p.strip() for p in m.group(1).split('|')]
    name = parts[0].lower()
    args = [p for p in parts[1:] if '=' not in p]
    if name.startswith(('start date', 'dts', 'date', 'release date')):
        nums = [a for a in args if re.fullmatch(r'\d{1,4}(-\d{1,2}){0,2}', a)]
        return '-'.join(nums) if nums else ' '.join(args)
    if name in ('efn', 'sfn', 'cn', 'citation needed', 'refn'): return ''
    return args[-1] if args else ''
def clean(s):
    for _ in range(4): s = re.sub(r'\{\{([^{}]*)\}\}', tmpl, s)
    s = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', s)
    s = re.sub(r'\[https?://\S+\s([^\]]*)\]', r'\1', s)
    s = re.sub(r"'''?|<br\s*/?>|<[^>]+>", ' ', s)
    s = re.sub(r'^\s*(?:(?:style|class|rowspan|colspan|align|data-sort-value)="?[^|"]*"?\s*)+\|', '', s)
    return re.sub(r'\s+', ' ', s).strip()
pat = re.compile(sys.argv[2], re.I) if len(sys.argv) > 2 else None
for i, tb in enumerate(re.findall(r'\{\|.*?\n\|\}', t, re.S)):
    cap = re.search(r'\|\+\s*(.*)', tb)
    out = []
    for r in re.split(r'\n\|-[^\n]*', tb)[1:]:
        cells = []
        for line in r.split('\n'):
            if line[:1] in '|!' and not line.startswith(('|}', '|+')):
                cells += [clean(c) for c in re.split(r'\|\||!!', line[1:])]
        cells = [c for c in cells if c]
        if cells: out.append(' | '.join(cells)[:200])
    if pat and not pat.search((cap.group(1) if cap else '') + ' '.join(out)): continue
    print(f'=== table {i}: {clean(cap.group(1)) if cap else ""}')
    print('\n'.join(out[:40]))
