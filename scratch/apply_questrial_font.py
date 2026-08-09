import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

OLD_FONT_LINK = (
    'href="https://fonts.googleapis.com/css2?'
    'family=DM+Serif+Display:ital@0;1'
    '&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"'
)

NEW_FONT_LINK = 'href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"'

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

    new_content = content.replace(OLD_FONT_LINK, NEW_FONT_LINK)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated: {os.path.relpath(file_path, root_dir)}")
    else:
        print(f"No changes: {os.path.relpath(file_path, root_dir)}")

print("Typography update complete.")
