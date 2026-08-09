import os
import re

def fix_nav_cta():
    directory = '/Users/rishabhnaik/Documents/galaxy-system/website'
    
    # We want to replace 'hidden h-10 lg:inline-flex' or similar with '!hidden h-10 lg:!inline-flex'
    # Actually, let's just target the nav-cta a tag
    
    pattern1 = re.compile(r'class="btn-primary\s+hidden\s+h-10\s+lg:inline-flex\s+')
    
    for root, _, files in os.walk(directory):
        if 'scratch' in root or '.gemini' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                # Replace the exact class string
                new_content = content.replace(
                    'class="btn-primary hidden h-10 lg:inline-flex',
                    'class="btn-primary !hidden h-10 lg:!inline-flex'
                )
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

if __name__ == '__main__':
    fix_nav_cta()
