import os
import re

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

# Replacements to soften the colors from stark black/white to soft blue-gray / slate
replacements = [
    # 1. Active button/CTA backgrounds
    (r"\bbg-slate-950\b", "bg-slate-700"),
    (r"\bbg-slate-900\b", "bg-slate-700"),
    
    # 2. Hovers
    (r"\bhover:bg-slate-900\b", "hover:bg-slate-600"),
    (r"\bhover:bg-slate-800\b", "hover:bg-slate-600"),
    
    # 3. Stark text headings (from slate-900 to slate-800)
    (r"\btext-slate-900\b", "text-slate-800"),
    (r"\btext-slate-950\b", "text-slate-800"),
    
    # 4. Selection colors
    (r"\bselection:bg-slate-900\b", "selection:bg-slate-700"),
    
    # 5. Form focus rings (from slate-900 to slate-700)
    (r"\bfocus:border-slate-900\b", "focus:border-slate-700"),
]

# Exclusions: we do NOT want to change the dark footer background because dark footers are standard
# and not flashy/distracting, so we will handle the footer separately or restore it.
# Let's inspect each line and replace accordingly, but ignore footer lines.

def run_replacements(content, file_name):
    # Split content into lines to target precisely
    lines = content.splitlines()
    new_lines = []
    
    in_footer = False
    
    for line in lines:
        if "<!-- Footer Section -->" in line or "<footer" in line:
            in_footer = True
        
        if in_footer:
            new_lines.append(line)
            if "</footer>" in line:
                in_footer = False
            continue
            
        # Run replacements
        updated_line = line
        for pattern, replacement in replacements:
            updated_line = re.sub(pattern, replacement, updated_line)
            
        new_lines.append(updated_line)
        
    return "\n".join(new_lines)

def main():
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html") or file.endswith(".js"):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = run_replacements(content, file)
                
                # Special JS fixes
                if file.endswith(".js"):
                    new_content = new_content.replace("'bg-slate-900'", "'bg-slate-700'")
                    new_content = new_content.replace('"bg-slate-900"', '"bg-slate-700"')
                    new_content = new_content.replace("'bg-slate-950'", "'bg-slate-700'")
                    new_content = new_content.replace('"bg-slate-950"', '"bg-slate-700"')
                    new_content = new_content.replace("bg-slate-900", "bg-slate-700")
                    new_content = new_content.replace("bg-slate-950", "bg-slate-700")
                
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Softened colors: {rel_path}")
                else:
                    print(f"No changes: {rel_path}")

if __name__ == "__main__":
    main()
