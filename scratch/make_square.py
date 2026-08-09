import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

css_override = """
        /* Global Square Corner Override */
        *, ::before, ::after {
            --radius-xs: 0px !important;
            --radius-sm: 0px !important;
            --radius-md: 0px !important;
            --radius-lg: 0px !important;
            --radius-xl: 0px !important;
            --radius-2xl: 0px !important;
            --radius-3xl: 0px !important;
            --radius-4xl: 0px !important;
            --radius-full: 0px !important;
            border-radius: 0px !important;
        }

        /* Keep floating actions, accessibility bubble, and lightbox close circular */
        #accessibility-widget-btn,
        #accessibility-widget-btn *,
        #fab-container *,
        #fab-ring,
        .fab-arc-item,
        .fab-arc-label,
        #fab-hub,
        #lightbox-close {
            border-radius: 50% !important;
        }
        .fab-arc-label {
            border-radius: 100px !important;
        }
"""

def main():
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Find the custom style block and insert override
                style_tag = '<style type="text/css">'
                if style_tag in content:
                    if "Global Square Corner Override" in content:
                        print(f"Skipping (already updated): {file}")
                        continue
                    
                    new_content = content.replace(style_tag, style_tag + css_override)
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Applied square override to: {file}")
                else:
                    print(f"Warning: No style tag found in {file}")

if __name__ == "__main__":
    main()
