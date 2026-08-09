"""
Sweep all HTML pages to:
1. Fix footer background → #040a12 (deepest navy)
2. Fix dark banner sections → #0d1520
3. Update h1/h2/h3 font-extrabold → font-normal (DM Serif Display renders best at 400)
4. Fix body bg → #f8f9fb
5. Standardise section vertical padding
"""
import os, re

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

REPLACEMENTS = [
    # Body bg
    ("bg-slate-50", "bg-[#f8f9fb]"),
    # Dark bg variants
    ("#0f172a", "#0d1520"),
    ("#1e293b", "#0d1520"),
    ("bg-slate-800", "bg-[#0d1520]"),
    ("bg-slate-900", "bg-[#060e18]"),
    ("bg-slate-950", "bg-[#040a12]"),
    # Text
    ('text-slate-800"', 'text-[#0d1c2e]"'),
    ('text-slate-700"', 'text-[#1a2f4a]"'),
    ('text-slate-600"', 'text-[#5a6a7d]"'),
    ('text-slate-500"', 'text-[#7a8fa3]"'),
    # Border
    ("border-slate-800", "border-[rgba(255,255,255,0.06)]"),
    ("border-slate-100", "border-[rgba(13,28,46,0.06)]"),
    ("border-slate-200", "border-[rgba(13,28,46,0.09)]"),
    # Heading weight — DM Serif Display looks better at normal weight
    ("text-4xl font-extrabold", "text-4xl font-normal"),
    ("text-5xl font-extrabold", "text-5xl font-normal"),
    ("text-6xl font-extrabold", "text-6xl font-normal"),
    ("text-3xl font-extrabold", "text-3xl font-semibold"),
    ("text-2xl font-extrabold", "text-2xl font-semibold"),
    # Accent colour
    ("text-blue-600", "text-[#4B9DCD]"),
    ("text-blue-500", "text-[#4B9DCD]"),
]

html_files = []
for root, dirs, files in os.walk(root_dir):
    if "scratch" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

print(f"Found {len(html_files)} HTML files.")

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content
    for old, new in REPLACEMENTS:
        new_content = new_content.replace(old, new)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated: {os.path.relpath(file_path, root_dir)}")
    else:
        print(f"No change: {os.path.relpath(file_path, root_dir)}")

print("Done.")
