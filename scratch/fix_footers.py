import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

def get_footer(rel_prefix):
    return f"""<!-- Footer Section -->
    <footer class="border-t border-slate-800 bg-slate-950 py-16 text-sm text-slate-400">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
                <!-- Branding -->
                <div class="flex flex-col gap-4">
                    <span class="text-lg font-bold tracking-tight text-white font-display">Galaxy System</span>
                    <p class="text-xs leading-relaxed text-slate-500">
                        Adaptive driving modifications and vehicle entry accessibility systems designed around individual comfort, safety, and everyday independence.
                    </p>
                </div>
                <!-- Links: Company -->
                <div class="flex flex-col gap-3">
                    <h4 class="font-semibold text-white font-display">Company</h4>
                    <a href="{rel_prefix}about.html" class="hover:text-white transition-colors">About Us</a>
                    <a href="{rel_prefix}success-stories.html" class="hover:text-white transition-colors">Success Stories</a>
                    <a href="{rel_prefix}testimonials.html" class="hover:text-white transition-colors">Testimonials</a>
                    <a href="{rel_prefix}gallery.html" class="hover:text-white transition-colors">Gallery Grid</a>
                </div>
                <!-- Links: Solutions -->
                <div class="flex flex-col gap-3">
                    <h4 class="font-semibold text-white font-display">Solutions</h4>
                    <a href="{rel_prefix}solutions/adaptive-mobility.html" class="hover:text-white transition-colors">Adaptive Driving</a>
                    <a href="{rel_prefix}solutions.html" class="hover:text-white transition-colors">All Solutions</a>
                    <a href="{rel_prefix}faq.html" class="hover:text-white transition-colors">FAQ Support</a>
                </div>
                <!-- Links: Contact -->
                <div class="flex flex-col gap-3">
                    <h4 class="font-semibold text-white font-display">Contact Us</h4>
                    <span class="text-xs text-slate-500">2nd Block, Dr Rajkumar Road,<br>Opposite ICICI Bank, Rajajinagar,<br>Bengaluru, Karnataka 560010</span>
                    <a href="tel:+919845056726" class="hover:text-white transition-colors font-semibold text-slate-300 flex items-center gap-1.5 mt-2">
                        +91 98450 56726
                    </a>
                </div>
            </div>
            <div class="mt-16 border-t border-slate-900 pt-8 text-center text-xs">
                <p>&copy; 2026 Galaxy System. All rights reserved. Practical accessibility solutions for real-life comfort.</p>
            </div>
        </div>
    </footer>"""

# Walk through all HTML files
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Find start of footer comment
            footer_start_idx = content.find("<!-- Footer Section -->")
            if footer_start_idx != -1:
                # Find the closing footer tag after the comment
                footer_end_idx = content.find("</footer>", footer_start_idx)
                
                if footer_end_idx != -1:
                    footer_end_idx += len("</footer>")
                    
                    rel_path = os.path.relpath(file_path, root_dir)
                    if "/" in rel_path:
                        rel_prefix = "../"
                    else:
                        rel_prefix = ""
                        
                    footer_html = get_footer(rel_prefix)
                    
                    new_content = content[:footer_start_idx] + footer_html + content[footer_end_idx:]
                    
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Updated footer for: {rel_path}")
                else:
                    print(f"Could not find closing </footer> tag in: {file_path}")
            else:
                print(f"Could not find <!-- Footer Section --> comment in: {file_path}")
