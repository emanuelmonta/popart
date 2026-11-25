function Header() {
    return (
        <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-10 h-16 flex items-center justify-between">
            <a href="/" class="flex items-center gap-2 group">
                <div class="px-2.5 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-base uppercase tracking-tight -rotate-3 shadow-[3px_3px_0px_0px_#000] group-hover:rotate-0 transition-transform">
                    BOOM!
                </div>
                <span class="font-black text-lg uppercase tracking-tight hidden sm:inline">FEST <span class="text-[#0047FF]">26</span></span>
            </a>

            <nav class="hidden lg:flex items-center gap-2">
                <a href="/" class="px-2.5 py-1 bg-[#FFE600] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">01 Inicio</a>
                <a href="/LineUp" class="px-2.5 py-1 bg-[#00E5FF] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">02 Lineup</a>
                <a href="/galeria" class="px-2.5 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">03 Galería</a>
                <a href="/entradas" class="px-2.5 py-1 bg-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">04 Entradas</a>
                <a href="/mapa" class="px-2.5 py-1 bg-[#0047FF] text-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">05 Mapa</a>
                <a href="/club" class="px-2.5 py-1 bg-[#FFE600] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">06 Club</a>
            </nav>

            <a href="/entradas" class="px-4 py-1.5 bg-[#0047FF] text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#FF0055] transition-colors">
                Tickets!
            </a>
        </header>
    )
}

export default Header