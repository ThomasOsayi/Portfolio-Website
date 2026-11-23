import fs from 'fs';
const f=process.argv[2]; const s=fs.readFileSync(f,'utf8');
const pub=new URL('../public', import.meta.url).pathname;
if(/[–—]/.test(s)) console.log('FLAG: en/em dash present at', [...s.matchAll(/.{0,30}[–—].{0,30}/g)].slice(0,5).map(m=>m[0]));
const re=/slug: '([^']+)'[\s\S]*?(body|guide): `([\s\S]*?)`/g; let m;
while((m=re.exec(s))){const b=m[3];const w=b.split(/\s+/).filter(Boolean).length;
 const h2=(b.match(/^## /gm)||[]).length; const flags=[];
 if(b.includes('${'))flags.push('${');
 if(/\*\*|(^|\s)\*[^\s*]|(^|\s)_[^\s_]+_/m.test(b))flags.push('bold/italic');
 if(/^\s*\d+\.\s/m.test(b))flags.push('numbered list');
 if(/\[[^\]]+\]\((?!\/)/.test(b))flags.push('link');
 if(!/^## The bottom line/m.test(b))flags.push('no bottom line');
 for(const im of b.matchAll(/^!\[(.*)\]\((\S+)\)$/gm)){if(!fs.existsSync(pub+im[2]))flags.push('missing image '+im[2]);}
 for(const im of b.matchAll(/\]\((\/[^)]+)\)/g)){ if(!fs.existsSync(pub+im[1].split('|')[0])) flags.push('bad path '+im[1]); }
 console.log(m[1], m[2], 'words', w, 'h2', h2, flags.length?'FLAGS: '+flags.join(', '):'ok');}
