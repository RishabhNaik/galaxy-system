import os

root_dir = "/Users/rishabhnaik/Documents/galaxy-system/website"

def get_header(rel_prefix, active_page=None):
    home_class = "text-slate-900 font-semibold" if active_page == "home" else "text-slate-600 hover:text-slate-900"
    services_class = "text-slate-900 font-semibold" if active_page == "services" else "text-slate-600 hover:text-slate-900"
    about_class = "text-slate-900 font-semibold" if active_page == "about" else "text-slate-600 hover:text-slate-900"
    faqs_class = "text-slate-900 font-semibold" if active_page == "faqs" else "text-slate-600 hover:text-slate-900"
    contact_class = "text-slate-900 font-semibold" if active_page == "contact" else "text-slate-600 hover:text-slate-900"

    return f"""<!-- Header Section -->
    <header class="fixed top-0 z-50 w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur-md transition-all duration-300">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
            <!-- Logo -->
            <a aria-label="Galaxy System home" class="flex items-center" href="{rel_prefix}index.html">
                <img src="{rel_prefix}galaxy_system_logo.svg" class="h-8 lg:h-10 w-auto" alt="Galaxy System Logo">
            </a>
            
            <!-- Navigation -->
            <nav class="hidden lg:flex items-center gap-8">
                <a href="{rel_prefix}index.html" class="text-sm font-medium {home_class} transition-colors">Home</a>
                <a href="{rel_prefix}index.html#services" class="text-sm font-medium {services_class} transition-colors">Services</a>
                <a href="{rel_prefix}about.html" class="text-sm font-medium {about_class} transition-colors">About us</a>
                <a href="{rel_prefix}faq.html" class="text-sm font-medium {faqs_class} transition-colors">FAQs</a>
                <a href="{rel_prefix}contact.html" class="text-sm font-medium {contact_class} transition-colors">Contact</a>
            </nav>
            
            <!-- CTAs -->
            <div class="flex items-center gap-6">
                <a href="tel:+919845056726" class="hidden text-sm font-medium text-slate-800 transition-colors hover:text-slate-900 md:inline-block">
                    Call: +91 98450 56726
                </a>
                <a href="{rel_prefix}contact.html" class="hidden h-11 items-center justify-center rounded-xl bg-slate-700 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-600 active:scale-98 md:inline-flex">
                    Book Consultation
                </a>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-900/5 lg:hidden" aria-label="Open menu" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                </button>
            </div>
        </div>
    </header>"""
 
def get_mobile_menu(rel_prefix, active_page=None):
    home_class = "text-slate-900 font-semibold" if active_page == "home" else "hover:text-slate-900"
    services_class = "text-slate-900 font-semibold" if active_page == "services" else "hover:text-slate-900"
    about_class = "text-slate-900 font-semibold" if active_page == "about" else "hover:text-slate-900"
    faqs_class = "text-slate-900 font-semibold" if active_page == "faqs" else "hover:text-slate-900"
    contact_class = "text-slate-900 font-semibold" if active_page == "contact" else "hover:text-slate-900"
 
    return f"""<!-- Mobile Drawer Overlay Menu -->
    <div id="mobile-menu" class="fixed inset-0 z-50 hidden flex-col bg-slate-50/95 backdrop-blur-lg p-6">
        <div class="flex items-center justify-between mb-8">
            <img src="{rel_prefix}galaxy_system_logo.svg" class="h-8 w-auto" alt="Galaxy System Logo">
            <button id="close-menu-btn" class="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <nav class="flex flex-col gap-4 text-lg font-medium text-slate-700">
            <a href="{rel_prefix}index.html" class="{home_class} py-2 border-b border-slate-200">Home</a>
            <a href="{rel_prefix}index.html#services" class="{services_class} py-2 border-b border-slate-200">Services</a>
            <a href="{rel_prefix}about.html" class="{about_class} py-2 border-b border-slate-200">About us</a>
            <a href="{rel_prefix}faq.html" class="{faqs_class} py-2 border-b border-slate-200">FAQs</a>
            <a href="{rel_prefix}contact.html" class="{contact_class} py-2 border-b border-slate-200">Contact</a>
        </nav>
        <div class="mt-auto flex flex-col gap-4">
            <a href="tel:+919845056726" class="py-3 border border-slate-200 text-slate-700 text-center rounded-xl hover:bg-slate-900/5">
                Call Us
            </a>
            <a href="{rel_prefix}contact.html" class="py-3 bg-slate-700 hover:bg-slate-600 transition text-center text-white font-medium rounded-xl">
                Book Consultation
            </a>
        </div>
    </div>"""

# Walk through all HTML files
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Find index of anchors
            header_start_idx = content.find("<!-- Header Section -->")
            main_start_idx = content.find("<!-- Main Content -->")
            
            if header_start_idx != -1 and main_start_idx != -1:
                rel_path = os.path.relpath(file_path, root_dir)
                if rel_path == "index.html":
                    rel_prefix = ""
                    active_page = "home"
                elif rel_path == "about.html":
                    rel_prefix = ""
                    active_page = "about"
                elif rel_path == "contact.html":
                    rel_prefix = ""
                    active_page = "contact"
                elif rel_path == "faq.html":
                    rel_prefix = ""
                    active_page = "faqs"
                elif "/" in rel_path:
                    rel_prefix = "../"
                    active_page = None
                else:
                    rel_prefix = ""
                    active_page = None
                
                header_html = get_header(rel_prefix, active_page)
                mobile_menu_html = get_mobile_menu(rel_prefix, active_page)
                
                # Rebuild file headers
                new_content = (
                    content[:header_start_idx] +
                    header_html + "\n\n    " +
                    mobile_menu_html + "\n\n    " +
                    content[main_start_idx:]
                )
                
                # Global replacements: Fintifi/Galaxy Systems -> Galaxy System
                new_content = new_content.replace("Fintifi", "Galaxy System")
                new_content = new_content.replace("Galaxy Systems", "Galaxy System")
                
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated header and rebranded page: {rel_path}")
            else:
                print(f"Skipping (could not find markup anchors): {os.path.relpath(file_path, root_dir)}")
