import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

html_files = []
for root, dirs, files in os.walk(root_dir):
    if "scratch" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

print(f"Applying accessibility fixes on {len(html_files)} files...")

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content

    # 1. Fix mobile menu close button across all standard pages
    new_content = new_content.replace(
        'id="close-menu-btn" class="h-10 w-10 flex items-center justify-center rounded-xl border-transparent text-[#1a2f4a]"',
        'id="close-menu-btn" class="h-10 w-10 flex items-center justify-center rounded-xl border-transparent text-[#1a2f4a]" aria-label="Close menu"'
    )

    # 2. Fix mobile menu close button for index.html (multiline)
    new_content = new_content.replace(
        '            <button id="close-menu-btn"\n                class="h-10 w-10 flex items-center justify-center rounded-xl border-transparent text-[#1a2f4a]">',
        '            <button id="close-menu-btn"\n                class="h-10 w-10 flex items-center justify-center rounded-xl border-transparent text-[#1a2f4a]" aria-label="Close menu">'
    )

    # 3. Page specific fixes
    if "index.html" in file_path:
        # Scroll down indicator aria-label
        new_content = new_content.replace(
            '<a href="#features" class="hidden md:flex h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 animate-bounce">',
            '<a href="#features" class="hidden md:flex h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 animate-bounce" aria-label="Scroll down to features">'
        )
        # Video modal close button aria-label
        new_content = new_content.replace(
            '<button type="button" onclick="closeVideoModal()"',
            '<button type="button" onclick="closeVideoModal()" aria-label="Close video modal"'
        )

    if "gallery.html" in file_path:
        # Lightbox image placeholder alt text
        new_content = new_content.replace(
            '<img id="lightbox-img" src="" alt="" class="w-full h-full object-contain">',
            '<img id="lightbox-img" src="" alt="Enlarged gallery view" class="w-full h-full object-contain">'
        )
        # Lightbox close button aria-label
        new_content = new_content.replace(
            '<button id="lightbox-close" class="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition backdrop-blur-md">',
            '<button id="lightbox-close" class="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition backdrop-blur-md" aria-label="Close lightbox">'
        )
        # Update dynamically alt text inside script
        new_content = new_content.replace(
            'lightboxCaption.textContent = caption;',
            'lightboxCaption.textContent = caption;\n                    lightboxImg.alt = caption;'
        )

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed accessibility in: {os.path.relpath(file_path, root_dir)}")
    else:
        print(f"No changes (already fixed or not needed): {os.path.relpath(file_path, root_dir)}")

print("Accessibility fixes applied.")
