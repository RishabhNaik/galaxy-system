import os
import re

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

# Replacements to make colors subtle, professional, and neutral (slate/charcoal/gray)
replacements = [
    # 1. Gradients
    (r"bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent", "text-slate-900"),
    (r"bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent", "text-slate-900"),
    (r"bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent", "text-slate-900"),
    
    # 2. Buttons background & hovers & shadow
    (r"bg-blue-600/90 hover:bg-blue-600", "bg-slate-900 hover:bg-slate-800"),
    (r"bg-blue-600 hover:bg-blue-500", "bg-slate-900 hover:bg-slate-800"),
    (r"bg-blue-600", "bg-slate-900"),
    (r"hover:bg-blue-500", "hover:bg-slate-800"),
    (r"bg-blue-500", "bg-slate-800"),
    (r"hover:bg-blue-600", "hover:bg-slate-900"),
    (r"hover:shadow-blue-500/25", ""),
    (r"shadow-blue-500/25", ""),
    (r"selection:bg-blue-500", "selection:bg-slate-900 selection:text-white"),
    
    # 3. Badges, icon containers, and special backgrounds (10% opacity)
    (r"bg-blue-600/10", "bg-slate-100"),
    (r"bg-indigo-600/10", "bg-slate-100"),
    (r"bg-cyan-600/10", "bg-slate-100"),
    (r"bg-green-600/10", "bg-slate-100"),
    (r"bg-amber-600/10", "bg-slate-100"),
    (r"bg-rose-600/10", "bg-slate-100"),
    (r"bg-emerald-600/10", "bg-slate-100"),
    (r"bg-blue-500/10", "bg-slate-100"),
    (r"bg-indigo-500/10", "bg-slate-100"),
    (r"bg-cyan-500/10", "bg-slate-100"),
    (r"bg-green-500/10", "bg-slate-100"),
    (r"bg-amber-500/10", "bg-slate-100"),
    (r"bg-rose-500/10", "bg-slate-100"),
    
    # 4. Colored light backgrounds (50-100 or 5% opacity)
    (r"bg-blue-50", "bg-slate-100"),
    (r"bg-indigo-50", "bg-slate-100"),
    (r"bg-cyan-50", "bg-slate-100"),
    (r"bg-green-50", "bg-slate-100"),
    (r"bg-amber-50", "bg-slate-100"),
    (r"bg-rose-50", "bg-slate-100"),
    (r"bg-blue-500/5", "bg-slate-50"),
    (r"bg-indigo-500/5", "bg-slate-50"),
    (r"bg-cyan-500/5", "bg-slate-50"),
    
    # 5. Text colors
    (r"text-blue-600", "text-slate-800"),
    (r"text-indigo-600", "text-slate-800"),
    (r"text-cyan-600", "text-slate-800"),
    (r"text-green-600", "text-slate-800"),
    (r"text-amber-600", "text-slate-800"),
    (r"text-rose-600", "text-slate-800"),
    (r"text-blue-500", "text-slate-700"),
    (r"text-indigo-500", "text-slate-700"),
    (r"text-cyan-500", "text-slate-700"),
    (r"text-green-500", "text-slate-700"),
    (r"text-amber-500", "text-slate-700"),
    (r"text-blue-400", "text-slate-600"),
    (r"text-cyan-700", "text-slate-700"),
    (r"text-cyan-800", "text-slate-800"),
    (r"text-blue-800", "text-slate-800"),
    (r"text-indigo-800", "text-slate-800"),
    (r"hover:text-blue-800", "hover:text-slate-900"),
    (r"hover:text-cyan-600", "hover:text-slate-900"),
    (r"hover:text-indigo-600", "hover:text-slate-900"),
    (r"hover:text-blue-600", "hover:text-slate-900"),
    (r"hover:text-blue-500", "hover:text-slate-900"),
    
    # 6. Borders
    (r"border-blue-500", "border-slate-300"),
    (r"border-indigo-500", "border-slate-300"),
    (r"border-cyan-500", "border-slate-300"),
    (r"border-blue-600", "border-slate-300"),
    (r"border-l-4 border-blue-500", "border-l-4 border-slate-400"),
    (r"border-l-4 border-indigo-500", "border-l-4 border-slate-400"),
    (r"border-l-2 border-blue-500", "border-l-2 border-slate-300"),
    (r"border-l-2 border-indigo-500", "border-l-2 border-slate-300"),
    (r"border-l-2 border-cyan-500", "border-l-2 border-slate-300"),
    
    # 7. Form focus rings
    (r"focus:border-blue-500", "focus:border-slate-900"),
    (r"focus:border-cyan-500", "focus:border-slate-900"),
]

# Additional specific cleanups for js/main.js
js_replacements = [
    (r"'bg-blue-600'", "'bg-slate-900'"),
    (r"\"bg-blue-600\"", "\"bg-slate-900\""),
    (r"text-blue-400", "text-slate-800"),
    (r"bg-blue-500/10", "bg-slate-100"),
]

def run_replacements(content, is_js=False):
    updated = content
    # Apply standard replacements
    for pattern, replacement in replacements:
        updated = re.sub(pattern, replacement, updated)
        
    if is_js:
        for pattern, replacement in js_replacements:
            updated = re.sub(pattern, replacement, updated)
            
    # Clean up double classes or styling remnants if any (e.g. shadow-md shadow-slate-900/10)
    updated = re.sub(r"\s+shadow-slate-900/10", "", updated)
    return updated

def main():
    for root, dirs, files in os.walk(root_dir):
        # Skip scratch folder itself to avoid self-modification issues
        if "scratch" in root:
            continue
            
        for file in files:
            if file.endswith(".html") or file.endswith(".js"):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                is_js = file.endswith(".js")
                new_content = run_replacements(content, is_js=is_js)
                
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Subtle color update complete: {rel_path}")
                else:
                    print(f"No changes needed: {rel_path}")

if __name__ == "__main__":
    main()
