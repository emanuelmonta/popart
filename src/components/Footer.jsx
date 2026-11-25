function Footer() {
    return (
        <footer class="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t-4 border-black px-4 md:px-10 h-12 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-[#FF0055] font-black text-[10px] uppercase">BOOM!</span>
                <span class="font-black text-xs uppercase tracking-wider">FESTIVAL POP ART 2026</span>
            </div>

            <div class="hidden sm:flex items-center gap-4 text-xs font-black uppercase">
                <span class="text-[#FFE600]">★ Parque Central</span>
                <span class="text-[#00E5FF]">★ @boomfest26</span>
            </div>

            <a href="/" class="px-2.5 py-0.5 bg-[#FFE600] text-black border border-white font-black text-[11px] uppercase hover:bg-[#00E5FF] transition-colors">
                ↑ Arriba
            </a>
        </footer>
    )
}

export default Footer