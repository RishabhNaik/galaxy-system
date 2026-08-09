import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

style_target = """    <!-- Custom Style Settings -->
    <style type="text/css">
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
        }"""

style_replacement = """    <!-- Custom Style Settings -->
    <style type="text/css">
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
        }
        header {
            border-bottom: 1px solid #e2e8f0 !important;
        }"""

def main():
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                if style_target in content:
                    new_content = content.replace(style_target, style_replacement)
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Fixed header border style: {rel_path}")
                else:
                    # In case spacing is slightly different, let's try a simpler replacement
                    alt_target = "<style type=\"text/css\">"
                    alt_replacement = "<style type=\"text/css\">\n        header {\n            border-bottom: 1px solid #e2e8f0 !important;\n        }"
                    if alt_target in content and "header {" not in content:
                        new_content = content.replace(alt_target, alt_replacement)
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        print(f"Fixed header border style (fallback): {rel_path}")
                    else:
                        print(f"Header border styling already updated or no style tag found: {rel_path}")

if __name__ == "__main__":
    main()
