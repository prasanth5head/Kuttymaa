from pathlib import Path
import json

root = Path(__file__).resolve().parent.parent
image_root = root / 'public' / 'image'
index = {}

for p in image_root.iterdir():
    if p.is_dir():
        files = [f.name for f in sorted(p.iterdir()) if f.is_file()]
        index[p.name] = files

# also include any files directly in /public/image
files_root = [f.name for f in sorted(image_root.iterdir()) if f.is_file()]
if files_root:
    index['.root'] = files_root

out = root / 'public' / 'image_index.json'
out.write_text(json.dumps(index, indent=2), encoding='utf-8')
print('Wrote', out)
