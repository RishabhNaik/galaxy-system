import os

faq_path = "/Users/rishabhnaik/Documents/galaxy-system/website/faq.html"

def main():
    with open(faq_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Hero Eyebrow
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">\n                        Support Center\n                    </span>',
        '<span class="section-label">Support Center</span>'
    )
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">Support Center</span>',
        '<span class="section-label">Support Center</span>'
    )

    # FAQ Item Containers: replace background/rounded with border-bottom
    content = content.replace(
        'class="border-transparent rounded-2xl bg-slate-100/80 transition-all duration-300" data-faq-item',
        'class="border-b border-slate-200 transition-all duration-300" data-faq-item'
    )

    # Buttons: change padding from p-6 to py-6
    content = content.replace(
        'class="flex w-full items-center justify-between p-6 text-left" data-faq-trigger',
        'class="flex w-full items-center justify-between py-6 text-left" data-faq-trigger'
    )

    # Content Area: change padding and remove border-t
    content = content.replace(
        'class="p-6 pt-0 text-sm leading-relaxed text-slate-600 border-t border-transparent"',
        'class="pb-6 text-sm leading-relaxed text-slate-600"'
    )

    # Content icon bg-white/5 -> remove it to look flat/minimal
    content = content.replace(
        'rounded-full bg-white/5 text-slate-600',
        'text-slate-600'
    )

    with open(faq_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Formatted faq.html")

if __name__ == "__main__":
    main()
