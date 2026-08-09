import os
import re

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

def main():
    html_files = []
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))

    print(f"Found {len(html_files)} HTML files to process.")

    style_block_pattern = re.compile(r'<style\s+type="text/css">.*?</style>', re.DOTALL)

    for file_path in html_files:
        rel_path = os.path.relpath(file_path, root_dir)
        depth = len(rel_path.split(os.sep)) - 1
        
        # Calculate correct relative path to styles/global.css
        css_prefix = "../" * depth if depth > 0 else ""
        css_link = f'<link rel="stylesheet" href="{css_prefix}styles/global.css">'
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        match = style_block_pattern.search(content)
        if match:
            # We found the global style block, replace it
            new_content = style_block_pattern.sub(css_link, content)
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Successfully replaced style block in {rel_path} with: {css_link}")
        else:
            print(f"Warning: No <style type=\"text/css\"> block found in {rel_path}")

if __name__ == "__main__":
    main()
