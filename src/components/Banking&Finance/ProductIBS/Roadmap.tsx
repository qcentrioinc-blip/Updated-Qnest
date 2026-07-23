import { motion } from "framer-motion";
import { H1, H2, P } from "../../../styles/Typography";

/* ─── All SVG Assets — UNCHANGED ─────────────────────────────────────── */
const CirclesSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="454" height="454" viewBox="0 0 454 454" fill="none">
        <circle cx="227" cy="227" r="227" fill="#00AA72" fillOpacity="0.3" />
        <circle cx="227" cy="227" r="220" stroke="#00AA72" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="18 12" fill="none" />
        <circle cx="227" cy="227" r="138" fill="#00AA72" fillOpacity="0.45" />
        <circle cx="227" cy="227" r="131" stroke="#5a8fd4" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="12 10" fill="none" />
        <circle cx="227" cy="227" r="85" fill="#00AA72" />
        <circle cx="227" cy="7" r="6" fill="#ffffff" fillOpacity="0.85" />
        <circle cx="447" cy="227" r="4" fill="#ffffff" fillOpacity="0.5" />
    </svg>
);

const RegistrationSVG = () => <img src="/ProductIBS/registration.svg" alt="registration" className="w-[58px] h-[58px] object-contain shrink-0" />;
const AccountSVG = () => <img src="/ProductIBS/account-maintenance.svg" alt="account" className="w-[58px] h-[58px] object-contain shrink-0" />;
const PaymentSVG = () => <img src="/ProductIBS/payment.svg" alt="payment" className="w-[58px] h-[58px] object-contain shrink-0" />;
const CoinSVG = () => <img src="/ProductIBS/coin.svg" alt="coin" className="w-[58px] h-[58px] object-contain shrink-0" />;
const BillingSVG = () => <img src="/ProductIBS/billing.svg" alt="billing" className="w-[58px] h-[58px] object-contain shrink-0" />;
const StatisticsSVG = () => <img src="/ProductIBS/statisctics.svg" alt="statistics" className="w-[58px] h-[58px] object-contain shrink-0" />;

const HandSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 36 49" fill="none">
        <path d="M36 31.092C36 31.092 35.9585 36.7583 35.9585 38.2199C35.9585 41.0587 34.2633 46.6691 34.2633 46.6691C34.2633 46.6691 34.1532 47.1038 33.8759 47.7713C33.7288 48.1254 33.262 49 31.9012 49C30.7555 49 17.2346 49 12.9869 49C11.8002 49 11.0751 48.1643 11.0751 48.1643L1.91814 36.2658C0.752324 35.1179 0.752324 33.2395 1.91814 32.0916C3.08404 30.9436 4.99197 30.9436 6.15769 32.0916L9.60098 34.8071C9.60098 34.8071 10.0444 35.0982 10.5217 35.0982C11.3248 35.0982 12.0225 34.4713 12.0225 33.6836C12.0225 32.8958 12.0172 13.7165 12.0172 13.7165C12.0172 12.093 13.3662 10.7648 15.015 10.7648C16.6639 10.7648 18.0128 12.093 18.0128 13.7165V24.0241C18.0126 24.0269 18.0112 24.0293 18.0112 24.0322C18.0112 24.0972 18.0646 24.1498 18.1305 24.1498C18.1891 24.1498 18.2355 24.1075 18.2458 24.0528C18.7 22.9891 19.7703 22.237 21.0107 22.237C22.6595 22.237 24.0085 23.5652 24.0085 25.1887V27.0434C24.0085 27.051 24.012 27.0582 24.0169 27.0653C24.0335 27.1085 24.0751 27.1394 24.1247 27.1394C24.1702 27.1394 24.2086 27.113 24.2277 27.0756L24.2317 27.0736C24.672 25.9805 25.7444 25.1887 27.0063 25.1887C28.6551 25.1887 30.0041 26.5168 30.0041 27.9674V29.9203C30.0039 29.9236 30.0022 29.9263 30.0022 29.9295C30.0022 29.9944 30.0557 30.047 30.1216 30.047C30.1735 30.047 30.2165 30.014 30.233 29.9686C30.2383 29.9657 30.2418 29.9641 30.2455 29.9624C30.2404 29.9594 30.2387 29.9499 30.2502 29.924C30.7121 28.8772 31.7739 28.1403 33.0019 28.1403C34.6511 28.1404 36 29.4686 36 31.092ZM20.5007 19.8104C20.6697 19.7949 20.8398 19.787 21.011 19.787C21.7691 19.787 22.488 19.9471 23.1455 20.2223C24.2403 18.6484 24.8833 16.7474 24.8833 14.7001C24.8833 9.29641 20.4181 4.9 14.9299 4.9C9.44177 4.9 4.97662 9.29641 4.97662 14.7001C4.97662 18.1443 6.79483 21.1734 9.53139 22.9215L9.53061 19.7668C8.2536 18.4479 7.46493 16.6664 7.46493 14.7004C7.46493 10.641 10.8071 7.35038 14.9299 7.35038C19.0526 7.35038 22.3948 10.6411 22.3948 14.7004C22.3948 16.5762 21.6751 18.2824 20.5006 19.5811L20.5007 19.8104ZM9.53275 28.3901L9.53217 25.7198C5.37154 23.736 2.48831 19.549 2.48831 14.7002C2.48831 7.94527 8.06941 2.4501 14.9299 2.4501C21.7898 2.4501 27.3716 7.94527 27.3716 14.7002C27.3716 17.2852 26.5492 19.682 25.1554 21.6606C25.4687 22.017 25.7391 22.411 25.95 22.8395C26.2939 22.7736 26.6475 22.739 27.0071 22.739C27.1392 22.739 27.2668 22.7579 27.3969 22.7672C28.9495 20.4491 29.8599 17.6787 29.8599 14.7001C29.8599 6.59461 23.1628 0 14.9299 0C6.69773 0 0 6.59461 0 14.7001C0 20.9302 3.9636 26.254 9.53275 28.3901Z" fill="white" />
    </svg>
);

/* ─── Layout Constants — UNCHANGED ──────────────────────────────────── */
const CX = 550, CY = 260;
const IW = 100, IH = 100;
const PW = 150, PH = 58;
const GAP = 12;
const L_ICON_X = 10;
const L_PILL_X = L_ICON_X + IW + GAP;
const L_CONN_X = L_PILL_X + PW;
const L_ICON_RX = L_ICON_X + IW;
const R_CONN_X = CX + (CX - L_CONN_X);
const R_PILL_X = R_CONN_X;
const R_ICON_X = 1100 - L_ICON_X - IW;
const YS = [80, 250, 420];

const leftPath = (y: number, i: number) => {
    if (i === 1) return `M ${L_ICON_RX},${y} C ${L_ICON_RX + 140},${y} ${CX - 20},${y} ${CX},${CY}`;
    const cp2y = i === 0 ? CY - 90 : CY + 90;
    return `M ${L_ICON_RX},${y} C ${L_ICON_RX + 280},${y} ${CX - 60},${cp2y} ${CX},${CY}`;
};
const rightPath = (y: number, i: number) => {
    if (i === 1) return `M ${R_ICON_X},${y} C ${R_ICON_X - 140},${y} ${CX + 20},${y} ${CX},${CY}`;
    const cp2y = i === 0 ? CY - 90 : CY + 90;
    return `M ${R_ICON_X},${y} C ${R_ICON_X - 280},${y} ${CX + 60},${cp2y} ${CX},${CY}`;
};

/* ─── Desktop Subcomponents — UNCHANGED ─────────────────────────────── */
const IconBox = ({ icon }: { icon: React.ReactNode }) => (
    <div style={{ width: IW, height: IH, flexShrink: 0, backgroundColor: "#0f0f0f", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(0,0,0,0.35)" }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
        </motion.div>
    </div>
);

const ICONS = [<RegistrationSVG />, <AccountSVG />, <PaymentSVG />, <CoinSVG />, <BillingSVG />, <StatisticsSVG />];
const PILL_LABELS = ["Self Registration", "Account Services", "Transaction Controls", "Payee Management", "Utility Bill Payment", "Dashboard Overview"];

const Pill = ({ label }: { label: string }) => (
    <div className="bg-white dark:bg-slate-950" style={{ width: PW, height: PH, flexShrink: 0, position: "relative", top: "80px", border: "1.5px solid #c8d6ea", borderRadius: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13.5, color: "#1a3468", lineHeight: 1.45, textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}>
        <P>{label}</P>
    </div>
);

const ConnectorLines = () => (
    <svg viewBox="0 0 1100 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, overflow: "visible" }}>
        {YS.map((y, i) => (
            <g key={i}>
                <path d={leftPath(y, i)} stroke="#1e56a0" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d={leftPath(y, i)} stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeDasharray="3 11" strokeLinecap="round" fill="none" />
                <motion.path d={leftPath(y, i)} stroke="rgba(255,255,255,0.95)" strokeWidth="4" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="0.18 0.82" animate={{ strokeDashoffset: [0, 1] }} transition={{ duration: 1.6, delay: i * 0.45, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }} />
                <polygon points={`${L_ICON_RX},${y - 8} ${L_ICON_RX + 20},${y} ${L_ICON_RX},${y + 8}`} fill="#1e56a0" />
                <path d={rightPath(y, i)} stroke="#1e56a0" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d={rightPath(y, i)} stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeDasharray="3 11" strokeLinecap="round" fill="none" />
                <motion.path d={rightPath(y, i)} stroke="rgba(255,255,255,0.95)" strokeWidth="4" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="0.18 0.82" animate={{ strokeDashoffset: [0, 1] }} transition={{ duration: 1.6, delay: i * 0.45, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }} />
                <polygon points={`${R_ICON_X},${y - 8} ${R_ICON_X - 20},${y} ${R_ICON_X},${y + 8}`} fill="#1e56a0" />
            </g>
        ))}
    </svg>
);

/* ─── Roadmap Component ──────────────────────────────────────────────── */
const Roadmap = () => (
    <div className=" bg-[#eef2f9] dark:bg-black" style={{
        
        minHeight: "auto",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
    }}>

        {/* ══════════════════════════════════════════
            DESKTOP TITLE  (lg and above)
        ══════════════════════════════════════════ */}
        <div className="hidden lg:block" style={{ margin: "0 0 52px" }}>
            <H1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1 }}>
                <span style={{ color: "#00AA72" }}>Key Modules of</span>
                <span className="dark:text-white text-[#111827]"  > the Platform</span>
            </H1>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE / TABLET TITLE  (below lg)
        ══════════════════════════════════════════ */}
        <div className="lg:hidden mb-8 sm:mb-10 text-center px-4">
            <H2 className="text-[24px]  sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight leading-tight">
                <span className="text-[#00AA72]">Key Modules of </span>
                <span className="dark:text-white text-[#111827]"> the Platform</span>
            </H2>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP CANVAS  (lg and above)
        ══════════════════════════════════════════ */}
        <div className="hidden lg:block w-[825px] h-[390px] xl:w-[1100px] xl:h-[520px] mx-auto shrink-0 relative overflow-visible">
            <div className="lg:scale-[0.75] xl:scale-100 origin-top-left absolute top-0 left-0" style={{ width: 1100, height: 520 }}>

            <ConnectorLines />

            <motion.div
                style={{ position: "absolute", left: CX - 227, top: CY - 227, zIndex: 2, pointerEvents: "none", transformOrigin: "227px 227px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <CirclesSVG />
            </motion.div>

            <motion.div
                style={{ position: "absolute", left: CX - 16, top: CY - 22, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}
                animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <HandSVG />
            </motion.div>

            {YS.map((y, i) => (
                <div key={`li${i}`} style={{ position: "absolute", left: L_ICON_X, top: y - IH / 2, zIndex: 5 }}>
                    <IconBox icon={ICONS[i]} />
                </div>
            ))}
            {YS.map((y, i) => (
                <div key={`lp${i}`} style={{ position: "absolute", left: L_PILL_X, top: y - IH / 2 - 10 - PH, zIndex: 6 }}>
                    <Pill  label={PILL_LABELS[i]} />
                </div>
            ))}
            {YS.map((y, i) => (
                <div key={`ri${i}`} style={{ position: "absolute", left: R_ICON_X, top: y - IH / 2, zIndex: 5 }}>
                    <IconBox icon={ICONS[i + 3]} />
                </div>
            ))}
            {YS.map((y, i) => (
                <div key={`rp${i}`} style={{ position: "absolute", left: R_PILL_X, top: y - IH / 2 - 10 - PH, zIndex: 6 }}>
                    <Pill label={PILL_LABELS[3 + i]} />
                </div>
            ))}
            </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE / TABLET LAYOUT  (below lg)
        ══════════════════════════════════════════ */}
        <div className="lg:hidden w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">

            {/* Scaled rotating circle */}
            <div className="flex justify-center mb-8 sm:mb-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]"
                >
                    {/* Inline SVG so it scales with the wrapper div */}
                    <svg viewBox="0 0 454 454" fill="none" className="w-full h-full">
                        <circle cx="227" cy="227" r="227" fill="#00AA72" fillOpacity="0.3" />
                        <circle cx="227" cy="227" r="220" stroke="#00AA72" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="18 12" fill="none" />
                        <circle cx="227" cy="227" r="138" fill="#00AA72" fillOpacity="0.45" />
                        <circle cx="227" cy="227" r="131" stroke="#5a8fd4" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="12 10" fill="none" />
                        <circle cx="227" cy="227" r="85" fill="#00AA72" />
                        <circle cx="227" cy="7" r="6" fill="#ffffff" fillOpacity="0.85" />
                        <circle cx="447" cy="227" r="4" fill="#ffffff" fillOpacity="0.5" />
                    </svg>
                </motion.div>
            </div>

            {/* Feature Cards:
                  mobile  → 1 column
                  sm/iPad → 2 columns
                  md/lg   → 3 columns              */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {PILL_LABELS.map((label, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(43,104,195,0.18)" }}
                        className="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#c8d6ea] cursor-default transition-shadow"
                    >
                        {/* Dark icon box */}
                        <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[64px] md:h-[64px] bg-[#0f0f0f] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                            <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[46px] md:h-[46px] flex items-center justify-center">
                                {ICONS[i]}
                            </div>
                        </div>

                        {/* Label */}
                        <p className="font-bold text-[12px] sm:text-[13px] md:text-[14px] text-[#1a3468] leading-snug">
                            {label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

    </div>
);

export default Roadmap;