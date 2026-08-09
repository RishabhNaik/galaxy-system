import os
import re
from html.parser import HTMLParser

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

class AccessibilityChecker(HTMLParser):
    def __init__(self, filename):
        super().__init__()
        self.filename = filename
        self.issues = []
        self.ids = set()
        self.current_tag = None
        self.current_attrs = {}
        self.text_buffer = ""
        self.in_interactive = False
        self.interactive_tag = None
        self.interactive_has_content = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        self.current_tag = tag
        self.current_attrs = attrs_dict
        self.text_buffer = ""

        # Check for duplicate IDs
        if 'id' in attrs_dict:
            element_id = attrs_dict['id']
            if element_id in self.ids:
                self.issues.append(f"Duplicate ID '{element_id}' found")
            else:
                self.ids.add(element_id)

        # Check image alt text
        if tag == 'img':
            if 'alt' not in attrs_dict:
                self.issues.append(f"Image <img> missing 'alt' attribute (src: {attrs_dict.get('src', 'unknown')})")
            elif not attrs_dict['alt'].strip():
                self.issues.append(f"Image <img> has empty 'alt' attribute (src: {attrs_dict.get('src', 'unknown')})")

        # Check interactive element contents (buttons, links)
        if tag in ['a', 'button']:
            self.in_interactive = True
            self.interactive_tag = tag
            self.interactive_has_content = 'aria-label' in attrs_dict or 'aria-labelledby' in attrs_dict

    def handle_data(self, data):
        if self.in_interactive:
            if data.strip():
                self.interactive_has_content = True

    def handle_endtag(self, tag):
        if tag in ['a', 'button'] and self.in_interactive:
            if not self.interactive_has_content:
                href_info = f"href: {self.current_attrs.get('href', 'none')}" if self.interactive_tag == 'a' else ''
                self.issues.append(f"Interactive <{self.interactive_tag}> has no text content or aria-label ({href_info})")
            self.in_interactive = False
            self.interactive_has_content = False

def check_files():
    html_files = []
    for root, dirs, files in os.walk(root_dir):
        if "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))

    print(f"Checking accessibility on {len(html_files)} files...")
    total_issues = 0
    for file_path in html_files:
        rel_path = os.path.relpath(file_path, root_dir)
        with open(file_path, "r", encoding="utf-8") as f:
            html_content = f.read()

        checker = AccessibilityChecker(rel_path)
        checker.feed(html_content)

        if checker.issues:
            print(f"\n[ISSUES] {rel_path}:")
            for issue in checker.issues:
                print(f"  - {issue}")
                total_issues += 1
        else:
            print(f"[OK] {rel_path}")

    print(f"\nFinished checking. Total issues found: {total_issues}")

if __name__ == "__main__":
    check_files()
