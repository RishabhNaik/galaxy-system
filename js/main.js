// Galaxy Systems — Main Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-slate-50/95', 'border-slate-200', 'shadow-lg');
        } else {
            header.classList.remove('bg-slate-50/95', 'border-slate-200', 'shadow-lg');
        }
    });

    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }

    // 3. FAQ Accordion functionality
    const faqItems = document.querySelectorAll('[data-faq-item]');
    faqItems.forEach(item => {
        const button = item.querySelector('[data-faq-trigger]');
        const content = item.querySelector('[data-faq-content]');
        const icon = item.querySelector('[data-faq-icon]');

        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = item.getAttribute('data-state') === 'open';
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.setAttribute('data-state', 'closed');
                        const otherContent = otherItem.querySelector('[data-faq-content]');
                        const otherIcon = otherItem.querySelector('[data-faq-icon]');
                        if (otherContent) otherContent.style.maxHeight = null;
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                if (isOpen) {
                    item.setAttribute('data-state', 'closed');
                    content.style.maxHeight = null;
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                } else {
                    item.setAttribute('data-state', 'open');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        }
    });

    // 4. Contact Form interaction (only if present on page)
    const contactForm = document.getElementById('consultation-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const phoneInput = document.getElementById('form-phone');
            
            let isValid = true;
            [nameInput, emailInput, phoneInput].forEach(input => {
                if (input && !input.value.trim()) {
                    input.classList.add('border-red-500');
                    isValid = false;
                } else if (input) {
                    input.classList.remove('border-red-500');
                }
            });

            if (!isValid) return;

            // Successful submission animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Booking...
            `;

            setTimeout(() => {
                // Show custom elegant success message modal
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm';
                modal.innerHTML = `
                    <div class="bg-white border border-slate-200 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
                        <div class="w-16 h-16 bg-slate-800/10 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-semibold text-slate-800 mb-2">Consultation Booked</h3>
                        <p class="text-slate-600 mb-6">Thank you, <span class="text-slate-600 font-medium">${nameInput.value}</span>. Our workshop and engineering team will reach out within 24 hours.</p>
                        <button id="modal-close-btn" class="w-full py-3 bg-slate-700 hover:bg-slate-600 active:scale-98 transition text-white font-medium rounded-xl">
                            Back to Site
                        </button>
                    </div>
                `;
                document.body.appendChild(modal);
                document.body.classList.add('overflow-hidden');

                // Clear form
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                document.getElementById('modal-close-btn').addEventListener('click', () => {
                    modal.remove();
                    document.body.classList.remove('overflow-hidden');
                });
            }, 1500);
        });
    }

    // 5. Before/After Showcase Tab Switcher
    const tabButtons = document.querySelectorAll('#showcase-tabs button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                // Toggle buttons classes
                tabButtons.forEach(otherBtn => {
                    otherBtn.classList.remove('bg-slate-700', 'text-white');
                    otherBtn.classList.add('hover:bg-slate-100', 'text-slate-600');
                });
                btn.classList.add('bg-slate-700', 'text-white');
                btn.classList.remove('hover:bg-slate-100', 'text-slate-600');
                
                // Hide and show contents
                ['hand-controls', 'clutch', 'accelerator'].forEach(tabName => {
                    const contentDiv = document.getElementById(`tab-${tabName}`);
                    if (contentDiv) {
                        if (tabName === targetTab) {
                            contentDiv.classList.remove('hidden');
                            contentDiv.classList.add('grid');
                        } else {
                            contentDiv.classList.add('hidden');
                            contentDiv.classList.remove('grid');
                        }
                    }
                });
            });
        });
    }

    // 6. Global Accessibility Panel Widget
    // Create and inject accessibility CSS rules
    const accessibilityStyles = document.createElement('style');
    accessibilityStyles.id = 'accessibility-styles';
    accessibilityStyles.innerHTML = `
        /* High Contrast overrides */
        .accessibility-high-contrast {
            background-color: #000000 !important;
            color: #ffffff !important;
        }
        .accessibility-high-contrast header,
        .accessibility-high-contrast main,
        .accessibility-high-contrast footer,
        .accessibility-high-contrast section,
        .accessibility-high-contrast div,
        .accessibility-high-contrast article,
        .accessibility-high-contrast nav {
            background: #000000 !important;
            color: #ffffff !important;
            border-color: #ffffff !important;
            box-shadow: none !important;
            background-image: none !important;
        }
        .accessibility-high-contrast p,
        .accessibility-high-contrast span,
        .accessibility-high-contrast li,
        .accessibility-high-contrast h1,
        .accessibility-high-contrast h2,
        .accessibility-high-contrast h3,
        .accessibility-high-contrast h4,
        .accessibility-high-contrast label {
            color: #ffffff !important;
        }
        .accessibility-high-contrast a,
        .accessibility-high-contrast button {
            background-color: #000000 !important;
            color: #ffff00 !important;
            border: 2px solid #ffff00 !important;
            text-decoration: underline !important;
        }
        .accessibility-high-contrast a:hover,
        .accessibility-high-contrast button:hover {
            background-color: #ffff00 !important;
            color: #000000 !important;
            text-decoration: none !important;
        }
        .accessibility-high-contrast svg {
            stroke: #ffff00 !important;
            fill: none !important;
        }
        
        /* Font sizes */
        .accessibility-font-medium {
            font-size: 1.125rem !important;
        }
        .accessibility-font-large {
            font-size: 1.25rem !important;
        }
        
        /* Floating Widget Button */
        #accessibility-widget-btn {
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            transition: transform 0.2s ease, background-color 0.2s ease;
        }
        #accessibility-widget-btn:hover {
            transform: scale(1.1);
        }
        #accessibility-panel {
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
    `;
    document.head.appendChild(accessibilityStyles);

    // Dynamic Accessibility Control panel
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4 select-none';
    widgetContainer.innerHTML = `
        <!-- Accessibility Panel -->
        <div id="accessibility-panel" class="hidden w-72 rounded-3xl border border-slate-200/80 bg-white/95 p-6 backdrop-blur-md shadow-2xl flex-col gap-5">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <span class="text-sm font-bold text-slate-800 flex items-center gap-1.5 font-display">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-slate-700"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                    Accessibility Controls
                </span>
                <button id="accessibility-panel-close" class="text-slate-400 hover:text-slate-700 text-xs p-1">Close</button>
            </div>
            
            <!-- Font Resize -->
            <div class="flex flex-col gap-2">
                <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Text Size Zoom</label>
                <div class="grid grid-cols-3 gap-1.5 bg-slate-50 p-1 rounded-xl">
                    <button id="btn-zoom-normal" class="py-1.5 text-xs font-semibold rounded-lg bg-white shadow-sm text-slate-800">100%</button>
                    <button id="btn-zoom-medium" class="py-1.5 text-xs font-semibold rounded-lg hover:bg-white/50 text-slate-600">115%</button>
                    <button id="btn-zoom-large" class="py-1.5 text-xs font-semibold rounded-lg hover:bg-white/50 text-slate-600">130%</button>
                </div>
            </div>
            
            <!-- Contrast mode -->
            <div class="flex items-center justify-between">
                <div>
                    <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">High Contrast</label>
                    <span class="text-[10px] text-slate-500">Improves readability for visually impaired</span>
                </div>
                <button id="btn-contrast-toggle" class="h-6 w-11 rounded-full bg-slate-200 p-0.5 transition-colors duration-200 outline-none flex items-center justify-start">
                    <span class="h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200"></span>
                </button>
            </div>
            
            <!-- Read Aloud (Speech synthesizer) -->
            <div class="flex items-center justify-between">
                <div>
                    <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Voice Read Aloud</label>
                    <span class="text-[10px] text-slate-500">Speak out text when hovering/clicking</span>
                </div>
                <button id="btn-speech-toggle" class="h-6 w-11 rounded-full bg-slate-200 p-0.5 transition-colors duration-200 outline-none flex items-center justify-start">
                    <span class="h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200"></span>
                </button>
            </div>
            
            <!-- Reset Button -->
            <button id="btn-accessibility-reset" class="w-full py-2.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition">
                Reset Options
            </button>
        </div>
        
        <!-- Toggle Button -->
        <button id="accessibility-widget-btn" class="h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-700 flex items-center justify-center text-white cursor-pointer z-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-accessibility"><path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m2 22 5-6 1-3 1-3.5 1.5-1.5H15l1.5 1.5 1 3.5 1 3M9 18v4m6-4v4"/></svg>
        </button>
    `;
    document.body.appendChild(widgetContainer);

    const widgetBtn = document.getElementById('accessibility-widget-btn');
    const panel = document.getElementById('accessibility-panel');
    const panelClose = document.getElementById('accessibility-panel-close');
    const btnZoomNormal = document.getElementById('btn-zoom-normal');
    const btnZoomMedium = document.getElementById('btn-zoom-medium');
    const btnZoomLarge = document.getElementById('btn-zoom-large');
    const btnContrastToggle = document.getElementById('btn-contrast-toggle');
    const btnSpeechToggle = document.getElementById('btn-speech-toggle');
    const btnReset = document.getElementById('btn-accessibility-reset');

    // Accessibility state variables
    let textZoom = localStorage.getItem('accessibility-zoom') || 'normal';
    let highContrast = localStorage.getItem('accessibility-contrast') === 'true';
    let readAloud = localStorage.getItem('accessibility-speech') === 'true';

    // Panel toggle
    widgetBtn.addEventListener('click', () => {
        if (panel.classList.contains('hidden')) {
            panel.classList.remove('hidden');
            panel.classList.add('flex');
        } else {
            panel.classList.add('hidden');
            panel.classList.remove('flex');
        }
    });

    panelClose.addEventListener('click', () => {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
    });

    // Font size controls
    const setZoom = (size) => {
        textZoom = size;
        localStorage.setItem('accessibility-zoom', size);
        
        document.documentElement.classList.remove('accessibility-font-medium', 'accessibility-font-large');
        [btnZoomNormal, btnZoomMedium, btnZoomLarge].forEach(btn => btn.className = 'py-1.5 text-xs font-semibold rounded-lg hover:bg-white/50 text-slate-600');
        
        if (size === 'medium') {
            document.documentElement.classList.add('accessibility-font-medium');
            btnZoomMedium.className = 'py-1.5 text-xs font-semibold rounded-lg bg-white shadow-sm text-slate-800';
        } else if (size === 'large') {
            document.documentElement.classList.add('accessibility-font-large');
            btnZoomLarge.className = 'py-1.5 text-xs font-semibold rounded-lg bg-white shadow-sm text-slate-800';
        } else {
            btnZoomNormal.className = 'py-1.5 text-xs font-semibold rounded-lg bg-white shadow-sm text-slate-800';
        }
    };

    btnZoomNormal.addEventListener('click', () => setZoom('normal'));
    btnZoomMedium.addEventListener('click', () => setZoom('medium'));
    btnZoomLarge.addEventListener('click', () => setZoom('large'));

    // High Contrast control
    const setContrast = (active) => {
        highContrast = active;
        localStorage.setItem('accessibility-contrast', active);
        const toggleSpan = btnContrastToggle.querySelector('span');
        
        if (active) {
            document.documentElement.classList.add('accessibility-high-contrast');
            btnContrastToggle.classList.remove('bg-slate-200');
            btnContrastToggle.classList.add('bg-slate-700');
            toggleSpan.style.transform = 'translateX(20px)';
        } else {
            document.documentElement.classList.remove('accessibility-high-contrast');
            btnContrastToggle.classList.remove('bg-slate-700');
            btnContrastToggle.classList.add('bg-slate-200');
            toggleSpan.style.transform = 'translateX(0px)';
        }
    };

    btnContrastToggle.addEventListener('click', () => setContrast(!highContrast));

    // Speech synthesis reader functionality
    let currentUtterance = null;
    
    const speakText = (text) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        
        if (text.trim().length === 0) return;
        
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = 1.0;
        window.speechSynthesis.speak(currentUtterance);
    };

    const handleSpeechHover = (e) => {
        if (!readAloud) return;
        // Restrict speech triggering to direct readable tags to avoid noise
        const target = e.target;
        const tag = target.tagName.toLowerCase();
        if (['p', 'h1', 'h2', 'h3', 'h4', 'span', 'li', 'a'].includes(tag)) {
            // Wait slightly before speaking to avoid rapid noise on quick mouse passes
            if (target.speechTimer) clearTimeout(target.speechTimer);
            target.speechTimer = setTimeout(() => {
                speakText(target.innerText || target.textContent);
            }, 400);
        }
    };

    const handleSpeechHoverOut = (e) => {
        if (e.target.speechTimer) clearTimeout(e.target.speechTimer);
    };

    const setSpeech = (active) => {
        readAloud = active;
        localStorage.setItem('accessibility-speech', active);
        const toggleSpan = btnSpeechToggle.querySelector('span');
        
        if (active) {
            btnSpeechToggle.classList.remove('bg-slate-200');
            btnSpeechToggle.classList.add('bg-slate-700');
            toggleSpan.style.transform = 'translateX(20px)';
            
            // Add listeners
            document.body.addEventListener('mouseover', handleSpeechHover);
            document.body.addEventListener('mouseout', handleSpeechHoverOut);
        } else {
            btnSpeechToggle.classList.remove('bg-slate-700');
            btnSpeechToggle.classList.add('bg-slate-200');
            toggleSpan.style.transform = 'translateX(0px)';
            
            // Remove listeners
            document.body.removeEventListener('mouseover', handleSpeechHover);
            document.body.removeEventListener('mouseout', handleSpeechHoverOut);
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        }
    };

    btnSpeechToggle.addEventListener('click', () => setSpeech(!readAloud));

    // Reset controls
    btnReset.addEventListener('click', () => {
        setZoom('normal');
        setContrast(false);
        setSpeech(false);
    });

    // Initialize state
    setZoom(textZoom);
    setContrast(highContrast);
    setSpeech(readAloud);
});