import React from "react";
import { useParams } from "react-router-dom";

// Types
type Content = {
    heroHeading: React.ReactNode;
    imgSrc: string;
    bgSrc: string; // The background image applied behind
};

// Content for sub-industries of Banking & Finance
const CONTENT: Record<string, Content> = {
    "banks": {
        heroHeading: <>Modern banking requires modern solutions. We deliver both.</>,
        imgSrc: "/BuiltForBnf/bank5th.webp",
        bgSrc: "/BuiltForBnf/Bank.webp",
    },
    "credit-union": {
        heroHeading: <>Built for credit unions. Powered by innovation. Focused on members.</>,
        imgSrc: "/BuiltForBnf/credit5th.webp",
        bgSrc: "/BuiltForBnf/credit.webp",
    },
    "financial-unions": {
        heroHeading: <>Enterprise banking solutions for financial institutions</>,
        imgSrc: "/BuiltForBnf/finance5th.webp",
        bgSrc: "/BuiltForBnf/financial1.webp",
    },
};

export default function BnfImg() {
    const { builtForType } = useParams<{ builtForType: string }>();

    // Default to banks if type is not found
    const content = CONTENT[builtForType || "banks"] || CONTENT["banks"];

    return (
        <section
            className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${content.bgSrc})`,
                minHeight: "500px",
            }}
        >
            <div
                className="relative mx-auto w-full lg:max-w-[1440px] lg:h-[740.62px] flex flex-col lg:block px-12 py-16 lg:p-0"
            >

                {/* HEADING CONTAINER */}
                <div
                    className="lg:absolute z-10 w-full mb-8 lg:mb-0"
                >
                    <div className="lg:absolute lg:top-[100px] lg:left-[40px] xl:left-[81.21px] lg:max-w-2xl xl:w-5xl">
                        <h2
                            className="font-quadran   text-[#00AA72] leading-none m-0 pt-0"
                            style={{
                                fontWeight: 600, // SemiBold
                                fontSize: "clamp(36px, 5vw, 64px)",
                            }}
                        >
                            {content.heroHeading}
                        </h2>
                    </div>
                </div>

                {/* IMAGE CONTAINER */}
                <div
                    className="lg:absolute z-0 w-full flex justify-center lg:block"
                >
                    <div className="w-[240px] max-w-[500px] aspect-square absolute top-[280px] left-[180px] h-[250px] sm:aspect-auto sm:absolute sm:top-[200px] sm:left-[400px] sm:w-[350px] sm:h-[350px] md:aspect-auto md:absolute md:top-[220px] md:left-[400px] md:w-[350px] md:h-[350px] lg:max-w-none lg:aspect-auto lg:absolute lg:top-[200px] lg:right-[40px] xl:right-auto lg:left-auto xl:left-[820px] lg:w-[450px] xl:w-[700px] lg:h-[450px] xl:h-[600px]">
                        <img
                            src={content.imgSrc}
                            alt="Enterprise banking solutions"
                            className="w-full h-full object-contain"
                            style={{
                                borderTopRightRadius: "70px",
                                borderBottomLeftRadius: "70px",
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
