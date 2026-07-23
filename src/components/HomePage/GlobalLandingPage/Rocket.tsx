import { H2,  } from "../../../styles/Typography";

const Rocket = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Rocket */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/Rocket.png" // replace with your rocket image path
              alt="Rocket"
              className="w-52 sm:w-64 md:w-72 lg:w-80 h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <H2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for smarter Tech
            </H2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
              Designed and developed to help financial institutions apply a
              risk-based approach to monitoring customer behavior. Designed and
              developed to help financial institutions apply a risk-based
              approach to monitoring customer behavior.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Designed and developed to help financial institutions apply a
              risk-based approach to monitoring customer behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rocket;