import { H2, P } from '../../../styles/Typography';

const Second = () => {
    return (
        <div className="w-full py-12 px-4  dark:bg-black md:px-8 bg-white flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                <H2 className="text-[#2E68C6] font-bold mb-4">
                    Complete Cross-Border Remittance Platform - OFAC, BSA, and FFIEC Compliant
                </H2>
                <P className="max-w-4xl mx-auto text-center !leading-[150%] text-gray-700">
                    REMITREE is an advanced middleware solution that facilitates seamless cross-border remittance transactions with OFAC sanctions screening, BSA compliance, and FINCEN reporting. It acts as an intermediary between core banking systems and the Swift Alliance Gateway, enabling efficient bi-directional message handling with full compliance to MT and MX standards.  Meets FFIEC expectations for cross-border payment systems and Section 311 of USA PATRIOT Act for special measures compliance.
                </P>
            </div>
        </div>
    );
};

export default Second;