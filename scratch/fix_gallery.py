import os

gallery_path = "/Users/rishabhnaik/Documents/galaxy-system/website/gallery.html"

def main():
    with open(gallery_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Hero eyebrow
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">\n                        Visual Portfolio\n                    </span>',
        '<span class="section-label">Visual Portfolio</span>'
    )
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">Visual Portfolio</span>',
        '<span class="section-label">Visual Portfolio</span>'
    )

    # Gallery Cards
    content = content.replace(
        'class="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"',
        'class="group relative gs-card overflow-hidden cursor-pointer"'
    )

    # Hover scales
    content = content.replace(
        'group-hover:scale-105',
        'group-hover:scale-104'
    )

    # Lightbox round corner removal
    content = content.replace(
        'aspect-video overflow-hidden rounded-3xl border-transparent bg-slate-100',
        'aspect-video overflow-hidden border-transparent bg-slate-100'
    )

    with open(gallery_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Formatted gallery.html")

if __name__ == "__main__":
    main()
