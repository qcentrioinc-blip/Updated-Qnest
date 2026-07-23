import { H2, P } from "../../../styles/Typography";



const Configurable = () => {
    return (
        <section className="w-full mx-auto min-h-auto lg:min-h-auto xl:min-h-screen flex flex-col lg:flex-row xl:flex-row overflow-hidden">

            {/* ────── LEFT COLUMN ────── */}
            <div
                className="w-full lg:w-1/2 min-h-auto lg:min-h-auto xl:min-h-screen flex-shrink-0 flex flex-col pt-12 lg:pt-0 xl:pt-0"
                style={{ backgroundColor: "#152934" }}
            >
                <div
                    className="flex flex-col px-6 py-12 sm:px-10 sm:py-16 lg:px-[52px] lg:pt-[160px] lg:pb-[40px] xl:px-[100px] xl:pt-[224px] xl:pb-[40px]"
                    style={{
                        gap: "clamp(40px, 8vw, 210px)",
                        borderTopRightRadius: "10.91px",
                        borderBottomLeftRadius: "10.91px",
                    }}
                >
                    {/* Heading */}
                    <H2
                        className="text-[#FAFAFA] text-[34px] sm:text-[46px] lg:text-[42px] xl:text-[56px] font-bold leading-none tracking-normal m-0 w-full lg:w-[380px] xl:w-[530px]"
                    >
                        Simplify Your Reconciliation Process Today
                    </H2>

                    {/* Paragraph */}
                    <P
                        className="relative xl:top-10 text-[#FAFAFA] text-[14px] sm:text-[16px] lg:text-[15px] xl:text-[19.64px] font-normal leading-[160%] tracking-normal m-0 w-full lg:w-[380px] xl:w-[530px]"
                    >
                        Automate complex data matching across banking, payments, and commerce. Reduce manual effort, cut costs, and gain real-time visibility. Handle SWIFT messages, bank statements, and merchant transactions with configurable rules and straight-through processing.
                    </P>
                </div>
            </div>

            {/* ────── RIGHT COLUMN ────── */}
            {/* <div className="flex flex-col flex-1 min-w-0">
                <div
                    className="relative overflow-hidden flex-1"
                    style={{
                        backgroundColor: "#00AA72",
                        minHeight: "260px",
                    }}
                >
                    <video src="/BNFConsilier/HEROCONCILIAR.mp4" autoPlay loop muted />
                </div>
 
 
                <div
                    className="flex items-center justify-center gap-4 lg:gap-5 xl:gap-6 px-6 lg:px-[40px] xl:px-[80px] py-8 lg:py-[36px] xl:py-1\0"
                    style={{
                        backgroundColor: "#D9D0C9",
                        minHeight: "200px",
                        height: "343px",
                    }}
                >
                    <img
                        src="/BNFConsilier/monitor-sun.svg"
                        alt="Configurable icon"
                        className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] object-contain flex-shrink-0"
                    />
                    <h3
                        className="text-[#152934] text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[37.09px] font-semibold leading-none tracking-normal m-0 lg:w-[280px] xl:w-[350px]"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                    >
                        Configurable and Automated
                    </h3>
                </div>
            </div> */}
            <div className=" hidden lg:flex flex-col flex-1 min-w-0">
                <div className="flex sm:flex-col flex-row flex-1">
                    <div
                        className="relative overflow-hidden flex-1"
                        style={{
                            backgroundColor: "#00AA72",
                            // minHeight: "260px",
                        }}
                    >
                        <video
                            src="/BNFConsilier/HEROCONCILIAR.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Beige Block */}
                    <div
                        className="
                            flex items-center justify-center
                            gap-3 sm:gap-4 lg:gap-5 xl:gap-6
                            px-3 sm:px-6 lg:px-[40px] xl:px-[80px]
                            py-6 sm:py-8 lg:py-[36px]
                            w-1/2 sm:w-full
                        "
                        style={{
                            backgroundColor: "#D9D0C9",
                            minHeight: "200px",
                            height: "343px",
                        }}
                    >
                        <img
                            src="/BNFConsilier/monitor-sun.svg"
                            alt="Configurable icon"
                            className="w-[40px] h-[40px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] object-contain flex-shrink-0"
                        />
                        <h3
                            className="text-[#152934] text-[14px] sm:text-[26px] lg:text-[28px] xl:text-[37.09px] font-semibold leading-tight sm:leading-none tracking-normal m-0 sm:w-auto lg:w-[280px] xl:w-[350px]"
                            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                        >
                            Configurable and Automated
                        </h3>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Configurable;

