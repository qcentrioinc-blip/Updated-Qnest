import { H1 } from '../../../styles/Typography';
import BNFNav from '../Navbar/BNFnav';
// import Title_img from '/AboutUs/Title_img.jpg';

const HeroSection = () => {
    return (
        <>
            <BNFNav />
            <div className="relative w-full h-screen">
                {/* Background Image */}
                {/* <img
                    src={Title_img}
                    alt="Hero"
                    className="w-full h-full object-cover object-center"
                /> */}

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-start">
                    <H1
                        className="
                        text-white
                        ml-6 
                        max-w-[90%]
                        sm:max-w-[80%]
                        md:max-w-[70%]
                    "
                    >
                        Sed ut perspiciatis <br /> unde omnis iste natus
                    </H1>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
