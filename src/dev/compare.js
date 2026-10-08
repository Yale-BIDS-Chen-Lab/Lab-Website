// Dev-only helpers (injected by Base.astro when running `npm run dev`, never in production builds).
// Used to compare this site's layout against the original Google Site:
//   1. On the original page, run the same measure function and copy its JSON array.
//   2. Here, run window.__compare(<that array>) in the console to list x/gap/height/font/color differences.
window.__measure = () => {
  const uniq = [...new Set(document.querySelectorAll('h1,h2,h3,p,li'))].filter((e) => !e.closest('nav, header'));
  const leaf = uniq.filter((e) => !e.querySelector('h1,h2,h3,p,li') && (e.innerText || '').trim().length > 1);
  return leaf.map((e) => {
    const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.textContent.trim() ? 1 : 3) });
    const tn = w.nextNode();
    const s = getComputedStyle(tn ? tn.parentElement : e);
    const r = e.getBoundingClientRect();
    return [
      (e.innerText || '').trim().replace(/\s+/g, ' ').toLowerCase().slice(0, 36),
      Math.round(r.left),
      Math.round(r.top + scrollY),
      Math.round(r.height),
      s.fontSize,
      s.fontWeight,
      s.fontFamily.split(',')[0].replace(/"/g, ''),
      s.color.replace(/rgba?\(|\)| /g, '').split(',').slice(0, 3).join(','),
      e.tagName,
    ];
  });
};

window.__compare = (orig) => {
  const loc = window.__measure();
  const used = new Set();
  const out = [];
  const missing = [];
  let pO = null;
  let pL = null;
  for (const o of orig) {
    const i = loc.findIndex((r, k) => !used.has(k) && r[0] === o[0]);
    if (i < 0) {
      missing.push(o[0]);
      continue;
    }
    used.add(i);
    const l = loc[i];
    const d = [];
    if (Math.abs(o[1] - l[1]) > 2) d.push(`x ${o[1]}→${l[1]}`);
    if (pO) {
      const go = o[2] - pO[2];
      const gl = l[2] - pL[2];
      if (Math.abs(go - gl) > 3) d.push(`gap ${go}→${gl}`);
    }
    if (Math.abs(o[3] - l[3]) > 3) d.push(`h ${o[3]}→${l[3]}`);
    [[4, 'fs'], [5, 'fw'], [6, 'ff'], [7, 'c']].forEach(([j, k]) => {
      if (o[j] !== l[j]) d.push(`${k} ${o[j]}→${l[j]}`);
    });
    if (d.length) out.push(`${o[0].slice(0, 26)}: ${d.join('; ')}`);
    pO = o;
    pL = l;
  }
  return {
    diffs: out,
    missing,
    extra: loc.filter((l, k) => !used.has(k)).map((l) => l[0]),
    matched: orig.length - missing.length,
    total: orig.length,
  };
};
