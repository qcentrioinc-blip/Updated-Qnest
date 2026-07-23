// import { ContactUs } from "../../../styles/Button";

const bulletItems = [
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat",
];

const CosLanding = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700&family=Schibsted+Grotesk:wght@400&family=Quicksand:wght@600&display=swap');
            `}</style>

            <section className="w-full overflow-hidden bg-[#3B68E8] max-w-8xl mx-auto">

                {/* ════════════════════════════════════════
                    MOBILE + TABLET + LG iPad Pro Layout
                    Visible: < 1280px  |  Hidden: ≥ 1280px
                ════════════════════════════════════════ */}
                <div className="xl:hidden flex flex-col px-5 py-14 gap-6 sm:px-8 sm:py-16 sm:gap-7 md:px-18 md:py-12 lg:px-14 lg:py-36 lg:gap-8">

                    {/* Row 1 — Heading left, Para right */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">

                        {/* Heading */}
                        <h1
                            className="text-[#FAFAFA] leading-[105%] font-bold
                                text-[36px]
                                sm:text-[44px]
                                md:text-[50px]
                                lg:text-[44px] lg:w-[48%] lg:shrink-0"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                            Lorem ipsum dolor,<br />
                            consectetur adipis
                        </h1>

                        {/* Paragraph */}
                        <p
                            className="text-[#FAFAFA] leading-[150%]
                                text-[14px]
                                sm:text-[15px]
                                md:text-[16px]
                                lg:text-[15px] lg:leading-[145%] lg:w-[48%] lg:pt-1"
                            style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 400 }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                        </p>
                    </div>

                    {/* Row 2 — Card left, Image right */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-6">

                        {/* Card */}
                        <div
                            className="flex flex-col border border-white bg-[#15386C33] rounded-[17px] shrink-0
                                w-full max-w-[374px]
                                p-[14px] gap-[20px]
                                sm:p-[16px] sm:gap-[22px]
                                lg:w-[300px] lg:p-[17px] lg:gap-[20px]"
                        >
                            {/* White Box */}
                            <div className="flex flex-col bg-white rounded-[7px] p-5 gap-3">
                                <p
                                    className="text-[#00AA72] leading-none
                                        text-[20px]
                                        sm:text-[22px]
                                        lg:text-[22px]"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 500 }}
                                >
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </p>
                                {/* <ContactUs>CONTACT US</ContactUs> */}
                            </div>

                            {/* Bullets */}
                            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
                                {bulletItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="rounded-full shrink-0 bg-[#D9D9D9] w-[44px] h-[44px] sm:w-[49px] sm:h-[49px]" />
                                        <p
                                            className="text-[#FAFAFA] leading-[130%] text-[12px] sm:text-[13px]"
                                            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Corner Image */}
                        <div className="w-full lg:flex-1 lg:self-end">
                            <img
                                src="/BNFCos/corner.png"
                                alt="Team circles"
                                className="w-full object-contain object-bottom
                                    max-h-[240px]
                                    sm:max-h-[300px]
                                    lg:max-h-[340px]"
                            />
                        </div>
                    </div>
                </div>

                {/* ════════════════════════════════════════
                    DESKTOP XL Layout  (≥ 1280px)
                    Exact pixel-perfect absolute positions
                    Hidden: < 1280px
                ════════════════════════════════════════ */}
                <div className="hidden xl:block relative min-h-screen">

                    {/* Heading */}
                    <h1
                        className="absolute text-[#FAFAFA] font-bold leading-none text-[64px]"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            top: "150px", left: "95px",
                            width: "660px", height: "172px",
                        }}
                    >
                        Lorem ipsum dolor,<br />
                        consectetur adipis
                    </h1>

                    {/* Paragraph */}
                    <p
                        className="absolute text-[#FAFAFA] text-[18px] leading-[120%]"
                        style={{
                            fontFamily: "'Schibsted Grotesk', sans-serif",
                            fontWeight: 400,
                            top: "160px", left: "835px",
                            width: "535px", height: "110px",
                        }}
                    >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                    </p>

                    {/* Left Card */}
                    <div
                        className="absolute flex flex-col border border-white bg-[#15386C33]"
                        style={{
                            top: "300px", left: "95px",
                            width: "374.1px", height: "420px",
                            padding: "17.04px", gap: "30.68px",
                            borderRadius: "17.04px",
                        }}
                    >
                        {/* White Box */}
                        <div
                            className="flex flex-col bg-white shrink-0"
                            style={{
                                width: "340px",
                                padding: "20.45px", gap: "13.63px",
                                borderRadius: "6.82px",
                            }}
                        >
                            <p
                                className="text-[#00AA72] leading-none"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "26.42px",
                                    width: "299px",
                                }}
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </p>
                            {/* <ContactUs>CONTACT US</ContactUs> */}
                        </div>

                        {/* Bullets */}
                        <div className="flex flex-col" style={{ gap: "40px" }}>
                            {bulletItems.map((item, i) => (
                                <div key={i} className="flex items-center" style={{ gap: "12px" }}>
                                    <div
                                        className="rounded-full shrink-0 bg-[#D9D9D9]"
                                        style={{ width: "49.43px", height: "49.43px" }}
                                    />
                                    <p
                                        className="text-[#FAFAFA] leading-none"
                                        style={{
                                            fontFamily: "'Quicksand', sans-serif",
                                            fontWeight: 600,
                                            fontSize: "15.34px",
                                            width: "245.43px",
                                        }}
                                    >
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Corner Image */}
                    <div
                        className="absolute bottom-0"
                        style={{ left: "580px", top: "300px", width: "800px", height: "450px" }}
                    >
                        <img
                            src="/BNFCos/corner.png"
                            alt="Team circles"
                            className="w-full h-full object-contain object-top"
                        />
                    </div>
                </div>

            </section>
        </>
    );
};

export default CosLanding;
