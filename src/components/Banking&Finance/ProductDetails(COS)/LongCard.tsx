const LongCard = () => {
    const blueSubCards = [
        { num: "01", title: "Lorem ip", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        { num: "02", title: "Lorem ip", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        { num: "03", title: "Lorem ip", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&family=Space+Grotesk:wght@700&family=Quicksand:wght@400&display=swap');
            `}</style>

            {/* ── Outer Container ── */}
            <div className="w-full flex flex-col items-center bg-[#F2F2F2]
                px-4 py-8 gap-5
                sm:px-8 sm:py-10 sm:gap-6
                lg:px-12 lg:py-14 lg:gap-7
                xl:px-20 xl:py-20 xl:gap-8
            ">

                {/* ── Title ── */}
                <h1 className="
                    font-['Bricolage_Grotesque'] font-semibold
                    text-[#141414] text-center leading-none
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    xl:text-[64px]
                    w-full max-w-[991px]
                ">
                    Lorem ipsum dolor , consect
                </h1>

                {/* ── Cards Grid ──
                    mobile:  1 col
                    sm:      2 col
                    lg:      2 col (iPad Pro — NOT 4 col)
                    xl:      4 col (Desktop only)
                ── */}
                <div className="
                    grid gap-4
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-2
                    xl:grid-cols-4
                    w-full max-w-[1278px]
                    lg:gap-5
                    xl:gap-[26px]
                ">

                    {/* ══ CARD 1 ══ */}
                    <div className="
                        flex flex-col overflow-hidden
                        bg-white rounded-[20px]
                        shadow-[0px_0px_8px_0px_#00000040]
                        min-h-[380px]
                        lg:min-h-[420px]
                        xl:h-[504px]
                    ">
                        <div className="flex flex-col items-center p-5 gap-4">
                            {/* Blue circle */}
                            <div className="
                                rounded-full bg-[#00AA72] shrink-0
                                w-16 h-16
                                sm:w-20 sm:h-20
                                xl:w-[99px] xl:h-[99px]
                            "/>

                            {/* Title */}
                            <h3 className="
                                font-['Space_Grotesk'] font-bold
                                text-[#2A2A2A] text-center leading-[120%]
                                text-xl
                                lg:text-2xl
                                xl:text-[32px]
                            ">
                                Lorem ipsum
                            </h3>

                            {/* Body */}
                            <p className="
                                font-['Quicksand'] font-normal
                                text-[#2A2A2A] text-center leading-[100%]
                                text-sm
                                xl:text-[16px]
                                w-full max-w-[260px]
                            ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod dffg tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Gray box */}
                        <div className="
                            mt-auto w-full bg-[#D9D9D9]
                            h-28
                            sm:h-36
                            lg:h-40
                            xl:h-[219px]
                        "/>
                    </div>

                    {/* ══ CARD 2 ══ */}
                    <div className="
                        flex flex-col justify-between
                        bg-white rounded-[20px]
                        shadow-[0px_0px_8px_0px_#00000040]
                        p-5 gap-5
                        min-h-[380px]
                        lg:min-h-[420px]
                        xl:h-[504px]
                    ">
                        <div className="flex flex-col gap-3 lg:gap-4">
                            {/* Small label */}
                            <p className="
                                font-['Space_Grotesk'] font-bold
                                text-[#2A2A2A] leading-[120%]
                                text-xl
                                lg:text-2xl
                                xl:text-[32px]
                            ">
                                Lorem ipsum
                            </p>

                            {/* Big heading */}
                            <h2 className="
                                font-['Bricolage_Grotesque'] font-semibold
                                text-[#2A2A2A] leading-[100%]
                                text-lg
                                lg:text-xl
                                xl:text-[32px]
                            ">
                                Lorem ipsum Lorem ipsum ipsum rem ip
                            </h2>

                            {/* Body */}
                            <p className="
                                font-['Quicksand'] font-normal
                                text-[#2A2A2A] leading-[100%]
                                text-sm
                                xl:text-[16px]
                            ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod dffg tempor incididunt ut labore et dolore
                            </p>
                        </div>

                        {/* Contact Us */}
                        <a href="#" className="
                            font-['Bricolage_Grotesque'] font-semibold
                            text-[#2A2A2A] leading-[100%] no-underline
                            text-xl
                            lg:text-2xl
                            xl:text-[32px]
                            hover:opacity-70 transition-opacity
                        ">
                            Contact Us →
                        </a>
                    </div>

                    {/* ══ CARD 3 ══ */}
                    <div className="
                        flex flex-col
                        bg-white rounded-[20px]
                        shadow-[0px_0px_8px_0px_#00000040]
                        p-4 gap-3
                        min-h-[380px]
                        lg:min-h-[420px]
                        xl:h-[504px]
                        lg:gap-4 xl:gap-4
                    ">
                        {blueSubCards.map((card) => (
                            <div key={card.num} className="
                                flex flex-col flex-1
                                bg-[#D1E0FF] rounded-[10px]
                                shadow-[0px_0px_4px_0px_#00000020]
                                p-4 gap-2
                            ">
                                <div className="flex items-center justify-between">
                                    <span className="
                                        font-['Bricolage_Grotesque'] font-semibold
                                        text-[#2A2A2A] leading-[100%]
                                        text-lg
                                        lg:text-xl
                                        xl:text-[32px]
                                    ">
                                        {card.title}
                                    </span>
                                    <span className="
                                        font-['Bricolage_Grotesque'] font-semibold
                                        text-[#00AA72] leading-[100%]
                                        text-lg
                                        lg:text-xl
                                        xl:text-[32px]
                                    ">
                                        {card.num}
                                    </span>
                                </div>
                                <p className="
                                    font-['Quicksand'] font-normal
                                    text-[#2A2A2A] leading-[100%]
                                    text-sm
                                    xl:text-[16px]
                                ">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ══ CARD 4 ══ */}
                    <div className="
                        flex flex-col overflow-hidden
                        bg-white rounded-[20px]
                        shadow-[0px_0px_8px_0px_#00000040]
                        gap-4
                        min-h-[380px]
                        lg:min-h-[420px]
                        xl:h-[504px]
                    ">
                        {/* Gray box top */}
                        <div className="
                            w-full bg-[#D9D9D9] shrink-0
                            h-28
                            sm:h-36
                            lg:h-40
                            xl:h-[219px]
                        "/>

                        {/* Bottom content */}
                        <div className="flex flex-col items-center px-5 pb-5 gap-4">
                            <h3 className="
                                font-['Space_Grotesk'] font-bold
                                text-[#2A2A2A] text-center leading-[120%]
                                text-xl
                                lg:text-2xl
                                xl:text-[32px]
                                w-full max-w-[260px]
                            ">
                                Lorem ipsum
                            </h3>

                            <p className="
                                font-['Quicksand'] font-normal
                                text-[#2A2A2A] text-center leading-[100%]
                                text-sm
                                xl:text-[16px]
                                w-full max-w-[260px]
                            ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod dffg tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            {/* Button */}
                            <button className="
                                w-full max-w-[260px]
                                flex items-center justify-center gap-2
                                bg-[#1A1A1A] text-white
                                font-['Bricolage_Grotesque'] font-semibold
                                tracking-[2px] uppercase
                                rounded-lg py-3 px-4
                                text-xs
                                xl:text-sm
                                hover:bg-gray-800 transition-colors cursor-pointer border-none
                            ">
                                CONTACT US
                                <span className="text-sm xl:text-base">↗</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LongCard;
