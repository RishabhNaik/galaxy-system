import sys

def replace_hero():
    with open('index.html', 'r') as f:
        content = f.read()

    start_idx = content.find('        <!-- Hero Section -->')
    end_idx = content.find('        <!-- Asymmetrical Editorial Features Section directly below Hero -->')

    if start_idx == -1 or end_idx == -1:
        print("Could not find hero section boundaries.")
        sys.exit(1)

    hero_html = """        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center bg-gradient-to-b from-[#0a1018] to-[#0d1520] pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
            <!-- Smooth gradient fade to white section below -->
            <div class="absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

            <!-- Soft Glows behind image -->
            <div class="absolute top-[20%] right-[5%] lg:right-[15%] w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-[#4B9DCD] rounded-full mix-blend-screen filter blur-[100px] lg:blur-[140px] opacity-40 pointer-events-none z-0"></div>
            
            <div class="mx-auto max-w-7xl w-full px-5 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-12 lg:mt-0">
                
                <!-- Right Side: Image & Badges (Mobile Order 1, Desktop Order 2) -->
                <div class="w-full lg:w-1/2 order-1 lg:order-2 relative mt-4 lg:mt-0">
                    <!-- Image Container -->
                    <div class="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] xl:h-[600px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 animate-float z-10" style="animation-duration: 7s;">
                        <img src="assets/hero-main-user.jpg" alt="Galaxy System Client with Adaptive SUV" class="w-full h-full object-cover object-center lg:object-right-top">
                        <!-- Inner Gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0a1018]/80 via-transparent to-transparent"></div>
                    </div>

                    <!-- Floating Glassmorphism Trust Badges -->
                    <div class="absolute top-2 sm:top-8 -left-2 sm:-left-12 z-20 flex flex-col gap-3 sm:gap-4 pointer-events-none">
                        <!-- Badge 1 -->
                        <div class="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl animate-float" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); animation-delay: 0.2s; animation-duration: 5s;">
                            <div class="bg-[#4B9DCD] rounded-full p-1"><svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                            <span class="text-white text-sm sm:text-base font-semibold tracking-wide">RTO Approved</span>
                        </div>
                        <!-- Badge 2 -->
                        <div class="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl animate-float ml-8 sm:ml-16" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); animation-delay: 0.6s; animation-duration: 6s;">
                            <div class="bg-[#4B9DCD] rounded-full p-1"><svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                            <span class="text-white text-sm sm:text-base font-semibold tracking-wide">20+ Years Experience</span>
                        </div>
                        <!-- Badge 3 -->
                        <div class="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl animate-float" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); animation-delay: 0.4s; animation-duration: 5.5s;">
                            <div class="bg-[#4B9DCD] rounded-full p-1"><svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                            <span class="text-white text-sm sm:text-base font-semibold tracking-wide">1500+ Lives Empowered</span>
                        </div>
                    </div>
                </div>

                <!-- Left Side: Text Content (Mobile Order 2, Desktop Order 1) -->
                <div class="w-full lg:w-1/2 order-2 lg:order-1 max-w-[550px] relative z-20 pb-16 lg:pb-0">
                    <h1 class="hero-title text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-white font-display" style="animation: fade-in-up 1s ease-out forwards;">
                        Drive With Confidence Again
                    </h1>
                    <p class="mt-6 sm:mt-8 text-lg sm:text-xl leading-relaxed text-white/80" style="animation: fade-in-up 1s ease-out 0.2s forwards; opacity: 0;">
                        Helping people regain independence through adaptive driving solutions and custom prosthetics designed for everyday life.
                    </p>

                    <div class="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4" style="animation: fade-in-up 1s ease-out 0.4s forwards; opacity: 0;">
                        <!-- Primary Button -->
                        <a href="contact.html" class="inline-flex items-center justify-center bg-gradient-to-r from-[#4B9DCD] to-[#3a7ba0] text-white hover:from-[#5ab3e8] hover:to-[#4B9DCD] rounded-[20px] h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(75,157,205,0.3)] hover:shadow-[0_0_30px_rgba(75,157,205,0.5)] hover:-translate-y-1 transition-all duration-300 border border-white/10 w-full sm:w-auto">
                            Book Free Consultation
                        </a>
                        <!-- Secondary Button -->
                        <a href="#services" class="inline-flex items-center justify-center rounded-[20px] h-14 px-8 text-base font-semibold text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08);">
                            Explore Solutions
                        </a>
                    </div>
                </div>

            </div>

            <!-- Global Style updates for Hero Text Entrance animation -->
            <style>
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            </style>
        </section>
"""
    
    new_content = content[:start_idx] + hero_html + "\n" + content[end_idx:]
    with open('index.html', 'w') as f:
        f.write(new_content)
    print("Hero replaced successfully.")

if __name__ == '__main__':
    replace_hero()
