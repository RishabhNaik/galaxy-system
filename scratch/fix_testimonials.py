import os

testimonials_path = "/Users/rishabhnaik/Documents/galaxy-system/website/testimonials.html"

def main():
    with open(testimonials_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Hero Eyebrow
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">\n                        Client Feedback\n                    </span>',
        '<span class="section-label">Client Feedback</span>'
    )
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">Client Feedback</span>',
        '<span class="section-label">Client Feedback</span>'
    )

    # Testimonial Card Containers
    content = content.replace(
        'class="glass-card rounded-2xl p-6 flex flex-col justify-between shadow-sm"',
        'class="gs-card p-6 flex flex-col justify-between"'
    )

    # Quote Typography
    content = content.replace(
        'class="mt-3 text-sm leading-relaxed text-slate-600"',
        'class="mt-4 text-lg italic leading-relaxed text-slate-700 font-display"'
    )

    with open(testimonials_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Formatted testimonials.html")

if __name__ == "__main__":
    main()
