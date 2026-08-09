import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Skip if Stories link already exists in the nav (check for "Stories</a>")
    # Actually, to be safe, check if "Stories</a>" is near "About us" or just check if it's already added.
    if '>Stories</a>' in content and 'index.html' not in filepath and 'stories.html' not in filepath:
        return

    # Check if the file is in a subdirectory
    prefix = '../' if 'solutions/' in filepath else ''

    # We need to insert the Stories link after About us in two places: desktop nav and mobile nav.
    
    # 1. Desktop Nav
    # Match: <a href="about.html" class="...">About us</a>
    # We'll use regex to find the About us line and add the Stories line after it.
    desktop_pattern = re.compile(r'(<a href="[^"]*about\.html"[^>]*>About us</a>)')
    def desktop_replace(match):
        return match.group(1) + f'\n                <a href="{prefix}stories.html" class="text-sm font-medium text-[#5a6a7d] hover:text-[#0d1c2e] transition-colors">Stories</a>'
        
    content = desktop_pattern.sub(desktop_replace, content)

    # 2. Mobile Nav
    # Actually the pattern above might match both if they have the same text, but the classes are different. 
    # Mobile nav class: class="... py-2 border-b border-transparent"
    # Desktop nav class: class="... transition-colors"
    # Let's just use a more specific replace for the mobile one if the first replace didn't hit it.
    # Wait, the first replace matches BOTH because they both have >About us</a>.
    # We should distinguish them by checking the surrounding context or replacing them differently based on their classes.
    pass

def add_stories_links():
    directory = '/Users/rishabhnaik/Documents/galaxy-system/website'
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') and file not in ['index.html', 'stories.html']:
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r') as f:
                    lines = f.readlines()
                
                prefix = '../' if 'solutions' in filepath else ''
                
                new_lines = []
                for line in lines:
                    new_lines.append(line)
                    # If line contains ">About us</a>"
                    if '>About us</a>' in line:
                        # Desktop nav
                        if 'transition-colors' in line:
                            new_lines.append(f'                <a href="{prefix}stories.html" class="text-sm font-medium text-[#5a6a7d] hover:text-[#0d1c2e] transition-colors">Stories</a>\n')
                        # Mobile nav
                        elif 'py-2 border-b border-transparent' in line:
                            new_lines.append(f'            <a href="{prefix}stories.html" class="hover:text-[#0d1c2e] py-2 border-b border-transparent">Stories</a>\n')
                
                with open(filepath, 'w') as f:
                    f.writelines(new_lines)
                print(f"Updated {file}")

if __name__ == '__main__':
    add_stories_links()
