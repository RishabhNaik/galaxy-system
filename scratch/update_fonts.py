import os, re

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

OLD_FONT_LINK = (
    'href="https://fonts.googleapis.com/css2?'
    'family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400'
    '&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"'
)

NEW_FONT_LINK = (
    'href="https://fonts.googleapis.com/css2?'
    'family=DM+Serif+Display:ital@0;1'
    '&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"'
)

# Also update sub-directory paths that use ../
OLD_FONT_LINK_SUB = OLD_FONT_LINK  # same link structure

REPLACEMENTS = [
    # Font link — same whether root or sub
    (OLD_FONT_LINK, NEW_FONT_LINK),
    # font-display Tailwind class → no-op now handled via CSS, keep class for backward compat
    # Background colour references that should match new --bg
    ("bg-slate-50", "bg-[#f8f9fb]"),
    # Body text classes
    ("text-slate-800", "text-[#0d1c2e]"),
    ("text-slate-700", "text-[#1a2f4a]"),
    ("text-slate-600", "text-[#5a6a7d]"),
    ("text-slate-500", "text-[#7a8fa3]"),
    ("text-slate-400", "text-[#9aa5b4]"),
    ("text-slate-300", "text-[#b8c6d4]"),
    # Accent colour class references
    ("bg-slate-700", "bg-[#0d1c2e]"),
    ("hover:bg-slate-600", "hover:bg-[#1a2f4a]"),
    ("bg-slate-900", "bg-[#060e18]"),
    ("bg-slate-950", "bg-[#040a12]"),
    # border colours
    ("border-slate-200", "border-[rgba(13,28,46,0.09)]"),
    ("border-slate-100", "border-[rgba(13,28,46,0.06)]"),
    ("border-slate-900", "border-[rgba(255,255,255,0.06)]"),
    # Plus Jakarta Sans → DM Sans in any inline style
    ("'Plus Jakarta Sans'", "'DM Sans'"),
    ("Plus Jakarta Sans", "DM Sans"),
    # Cormorant Garamond → DM Serif Display in any inline style
    ("'Cormorant Garamond'", "'DM Serif Display'"),
    ("Cormorant Garamond", "DM Serif Display"),
    # stat-chip inner spans – align class names
    ('class="font-bold text-lg font-display"', 'class="chip-number"'),
    ('class="text-xs uppercase tracking-wider text-slate-300"', 'class="chip-label"'),
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
        print(f"No changes: {os.path.relpath(file_path, root_dir)}")

print("Done.")
