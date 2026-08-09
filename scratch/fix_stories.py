import os

stories_path = "/Users/rishabhnaik/Documents/galaxy-system/website/stories.html"
success_stories_path = "/Users/rishabhnaik/Documents/galaxy-system/website/success-stories.html"

def process_stories():
    with open(stories_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace tags
    content = content.replace(
        'button class="tag-btn active px-4 py-2 rounded-full text-xs font-semibold border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200 transition"',
        'button class="tag-btn active gs-tag"'
    )
    content = content.replace(
        'button class="tag-btn px-4 py-2 rounded-full text-xs font-semibold border-transparent bg-white text-slate-600 hover:bg-slate-50 transition"',
        'button class="tag-btn gs-tag"'
    )

    # Replace articles tag
    content = content.replace(
        'article class="story-card group bg-white rounded-3xl overflow-hidden border-transparent hover:border-slate-300"',
        'article class="gs-card group overflow-hidden"'
    )

    # Replace span inline tags in article header
    content = content.replace(
        'span class="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs font-semibold text-white"',
        'span class="gs-tag bg-white/10 text-white border-white/20"'
    )

    # Share your story button
    content = content.replace(
        'class="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition"',
        'class="btn-primary mt-6 inline-flex items-center gap-2"'
    )

    # Feature story layout
    featured_old = """                <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Featured Story</p>
                <a href="#" class="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border-transparent bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-300 story-card">
                    <div class="h-64 lg:h-full min-h-[280px] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden flex items-end p-8">
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(255,255,255,0.04)%22/%3E%3C/svg%3E')]"></div>
                        <div class="relative z-10">
                            <span class="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs font-semibold text-white mb-4">Adaptive Driving</span>
                            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider">Cover Story · 8 min read</p>
                        </div>
                    </div>
                    <div class="p-8 lg:pr-12">
                        <h2 class="text-2xl lg:text-3xl font-bold text-slate-800 font-display leading-snug group-hover:text-slate-700 transition-colors">How Adaptive Hand Controls Give Differently Abled Drivers Full Control on Indian Roads</h2>
                        <p class="mt-4 text-slate-500 leading-relaxed">India's traffic conditions demand sharp reflexes. For drivers with lower limb mobility challenges, custom hand control systems from Galaxy System are engineered to make every drive safer, more comfortable, and truly independent.</p>
                        <div class="mt-6 flex items-center gap-4">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">GS</div>
                                <span class="text-sm font-semibold text-slate-700">Galaxy System Team</span>
                            </div>
                            <span class="text-slate-300">·</span>
                            <span class="text-sm text-slate-400">June 2025</span>
                        </div>
                        <div class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:gap-3 transition-all">
                            Read Full Story
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                </a>"""

    featured_new = """                <span class="section-label">Featured Story</span>
                <a href="#" class="group grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center bg-white hover:border-slate-300 transition-all duration-300 gs-card">
                    <div class="h-96 w-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden flex items-end p-8">
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(255,255,255,0.04)%22/%3E%3C/svg%3E')]"></div>
                        <div class="relative z-10">
                            <span class="gs-tag bg-white/10 text-white border-white/20 mb-4 inline-block">Adaptive Driving</span>
                            <p class="text-white/60 text-xs font-semibold uppercase tracking-wider">Cover Story · 8 min read</p>
                        </div>
                    </div>
                    <div class="p-8 lg:pr-12 text-left">
                        <h2 class="text-3xl lg:text-4.5xl font-bold text-slate-800 font-display leading-tight group-hover:text-[#229ad0] transition-colors">How Adaptive Hand Controls Give Differently Abled Drivers Full Control on Indian Roads</h2>
                        <p class="mt-4 text-slate-500 text-sm leading-relaxed">India's traffic conditions demand sharp reflexes. For drivers with lower limb mobility challenges, custom hand control systems from Galaxy System are engineered to make every drive safer, more comfortable, and truly independent.</p>
                        <div class="mt-6 flex items-center gap-4 text-xs">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">GS</div>
                                <span class="font-semibold text-slate-700">Galaxy System Team</span>
                            </div>
                            <span class="text-slate-300">·</span>
                            <span class="text-slate-400">June 2025</span>
                        </div>
                        <div class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:gap-3 transition-all">
                            Read Full Story
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                </a>"""

    content = content.replace(featured_old, featured_new)

    with open(stories_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Processed stories.html")

def process_success_stories():
    with open(success_stories_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Hero Eyebrow
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">\n                        Real Impact\n                    </span>',
        '<span class="section-label">Real Impact</span>'
    )
    # Also without newline
    content = content.replace(
        '<span class="inline-flex items-center gap-2 rounded-full border-transparent bg-slate-100/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 backdrop-blur-sm">Real Impact</span>',
        '<span class="section-label">Real Impact</span>'
    )

    # Story Card Image Containers
    content = content.replace(
        'overflow-hidden rounded-3xl border-transparent shadow-sm bg-white',
        'gs-card overflow-hidden'
    )

    # Soften quote borders
    content = content.replace(
        'border-l-2 border-slate-300',
        'border-l border-slate-300'
    )

    with open(success_stories_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Processed success-stories.html")

if __name__ == "__main__":
    process_stories()
    process_success_stories()
