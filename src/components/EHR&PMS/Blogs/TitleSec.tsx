import { H1 } from "../../../styles/Typography";

const TitleSec = () => {
    return (
        <section
            className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center"
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)",
            }}
        >
            <H1>Blogs</H1>

        </section>
    );
}

export default TitleSec;