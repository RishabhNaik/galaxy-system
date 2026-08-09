import os
import re

def hide_nav_cta_on_mobile():
    directory = '/Users/rishabhnaik/Documents/galaxy-system/website'
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                # Replace exact string
                old_class = 'class="btn-primary hidden h-10 md:inline-flex"'
                new_class = 'class="btn-primary hidden h-10 lg:inline-flex"'
                
                new_content = content.replace(old_class, new_class)
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

if __name__ == '__main__':
    hide_nav_cta_on_mobile()
