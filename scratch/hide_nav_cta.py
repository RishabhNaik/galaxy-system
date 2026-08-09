import os
import re

def hide_nav_cta_on_mobile():
    directory = '/Users/rishabhnaik/Documents/galaxy-system/website'
    
    # We want to change 'md:inline-flex' to 'lg:inline-flex' on the nav-cta
    # Let's target the exact class string or part of it
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                # Replace 'md:inline-flex' with 'lg:inline-flex' specifically for the nav-cta button
                # We can just do a precise replace for this known class string
                old_class = 'class="btn-primary hidden h-10 md:inline-flex items-center justify-center rounded-xl px-6 font-semibold transition-all duration-300"'
                new_class = 'class="btn-primary hidden h-10 lg:inline-flex items-center justify-center rounded-xl px-6 font-semibold transition-all duration-300"'
                
                new_content = content.replace(old_class, new_class)
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

if __name__ == '__main__':
    hide_nav_cta_on_mobile()
