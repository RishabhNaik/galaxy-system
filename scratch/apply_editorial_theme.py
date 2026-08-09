import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

# Google Font Replacement
font_target_1 = """    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet">"""

font_target_2 = """    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">"""

font_replacement = """    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">"""

# CSS Rules Replacements
font_family_body_target = "font-family: 'Inter', sans-serif;"
font_family_body_replacement = "font-family: 'Plus Jakarta Sans', sans-serif;"

font_family_headings_target_1 = """        h1,
        h2,
        h3,
        h4,
        .font-display {
            font-family: 'Geist', sans-serif;
        }"""

font_family_headings_target_2 = """        h1, h2, h3, h4, .font-display {
            font-family: 'Geist', sans-serif;
        }"""

font_family_headings_replacement = """        h1,
        h2,
        h3,
        h4,
        .font-display {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 600;
        }"""

# Global Square Corner + Flat Editorial Override
override_target = """        /* Global Square Corner Override */
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
        }"""

override_replacement = """        /* Global Square Corner Override */
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

        /* Global Flat Editorial Reset: Avoid heavy cards, borders, outlines, and shadows */
        .glass-card {
            background: rgba(248, 250, 252, 0.9) !important;
            backdrop-filter: blur(8px) !important;
            border: none !important;
            box-shadow: none !important;
        }"""

def main():
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                modified = False
                
                # 1. Replace Font imports
                if font_target_1 in content:
                    content = content.replace(font_target_1, font_replacement)
                    modified = True
                elif font_target_2 in content:
                    content = content.replace(font_target_2, font_replacement)
                    modified = True
                
                # 2. Replace body font family
                if font_family_body_target in content:
                    content = content.replace(font_family_body_target, font_family_body_replacement)
                    modified = True
                
                # 3. Replace headings font family
                if font_family_headings_target_1 in content:
                    content = content.replace(font_family_headings_target_1, font_family_headings_replacement)
                    modified = True
                elif font_family_headings_target_2 in content:
                    content = content.replace(font_family_headings_target_2, font_family_headings_replacement)
                    modified = True
                
                # 4. Replace CSS override for flat glass-card
                if override_target in content:
                    content = content.replace(override_target, override_replacement)
                    modified = True
                
                # 5. Clean / reduce shadow and border classes in HTML markup
                # We replace heavy shadow classes with soft or flat equivalents
                shadow_replacements = {
                    'shadow-2xl': 'shadow-sm',
                    'shadow-xl': 'shadow-sm',
                    'shadow-lg': 'shadow-sm',
                    'shadow-md': 'shadow-[0_1px_2px_rgba(15,23,42,0.03)]',
                    'border border-slate-200/80': 'border-transparent',
                    'border border-slate-200/60': 'border-transparent',
                    'border border-slate-200': 'border-transparent',
                    'border border-slate-100': 'border-transparent',
                    'border-slate-200': 'border-transparent',
                    'border-slate-100': 'border-transparent',
                }
                
                for target, replacement in shadow_replacements.items():
                    if target in content:
                        content = content.replace(target, replacement)
                        modified = True
                
                if modified:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(content)
                    print(f"Applied editorial style system to: {file}")
                else:
                    print(f"No changes needed for: {file}")

if __name__ == "__main__":
    main()
