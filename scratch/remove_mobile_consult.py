import os
import re

def remove_mobile_consult():
    directory = '/Users/rishabhnaik/Documents/galaxy-system/website'
    
    # Pattern to match the specific "Book Consultation" button in the mobile drawer
    pattern = re.compile(r'\s*<a href="[^"]*contact\.html"\s+class="py-3 bg-\[#0d1c2e\] hover:bg-\[#1a2f4a\] transition text-center text-white font-medium rounded-xl">\s*Book Consultation\s*</a>', re.MULTILINE)
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                new_content = pattern.sub('', content)
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

if __name__ == '__main__':
    remove_mobile_consult()
