// Updated responsive version preserving desktop styles
import { Check } from "lucide-react";

const TwoPart = () => {
  return (
    <div className="w-full relative">
      {/* ================= DESKTOP (iPad Pro falls here if width >= 1024px) ================= */}
      <div
        className="hidden lg:flex w-full relative"
        style={{
          minHeight: "700px", // Reduced height from 100vh/800px
          height: "auto",
          position: "relative",
        }}
      >
        {/* Left Blue Section */}
        <div
          style={{
            width: "46.6%",
            minHeight: "700px", // Matched parent
            background: "#00AA72",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              width: "97px",
              height: "233px",
              top: "14.81px",
              left: "43.49px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(120px, 15vw, 192.82px)",
              lineHeight: "100%",
              color: "#FFFFFF",
            }}
          >
            *
          </span>
        </div>

        {/* Right Beige Section */}
        <div
          style={{
            width: "53.4%",
            minHeight: "700px", // Matched parent
            background: "#F5DDA9",
            position: "relative",
          }}
        >
          <div
            className="absolute flex flex-col"
            style={{
              width: "clamp(300px, 70%, 546px)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              gap: "36px",
              padding: "0 20px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4.5vw, 40px)",
                lineHeight: "110%",
                color: "#00AA72",
              }}
            >
              Consecte adipiscing werdasec ku werdasec ku
            </h2>

            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.8vw, 16px)",
                lineHeight: "150%",
                color: "#333",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>

            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={24} style={{ color: "#00AA72", marginTop: "2px" }} />
                  <p
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "clamp(14px, 1.8vw, 16px)",
                      color: "#333",
                      lineHeight: "140%",
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlapping Image - Responsive for Desktop/Large Tablet */}
        <img
          src="/Products/Products2/ImageRadius.png"
          alt="Contractor Information"
          className="absolute"
          style={{
            width: "clamp(450px, 45vw, 787.6px)", // Adjusted clamp for better scaling
            height: "auto",
            top: "50%",
            left: "5%", // Relative left position
            transform: "translateY(-50%)",
            borderRadius: "25px",
            objectFit: "cover",
            zIndex: 5,
          }}
        />

        {/* Pink Square - Responsive Positioning */}
        <div
        className="absolute lg:top-[25%] xl:top-[10%]"
          style={{
            position: "absolute",
            width: "clamp(80px, 6vw, 102.1px)",
            height: "clamp(80px, 6vw, 100.6px)",
            left: "47%", // Moved to percentage to stay relative to the container
            background: "#FFEAF2",
            borderRadius: "6px",
            opacity: 1,
            zIndex: 1
          }}
        />
      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:flex lg:hidden flex-col bg-[#F5DDA9] h-auto w-full py-16 px-8 md:px-12 gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(26px, 4vw, 32px)",
                color: "#00AA72",
                lineHeight: "115%",
              }}
            >
              Consecte adipiscing werdasec ku werdasec ku
            </h2>

            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "15px",
                lineHeight: "150%",
                color: "#333",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>

            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={22} style={{ color: "#00AA72", marginTop: "2px" }} />
                  <p
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "14px",
                      lineHeight: "140%",
                      color: "#333",
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <img
              src="/Products/Products2/ImageRadius.png"
              className="w-full h-auto max-h-[400px] rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col bg-[#F5DDA9] h-auto w-full py-12 px-6 gap-6">
        <h2
          className="font-bold"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(22px, 6vw, 28px)",
            color: "#00AA72",
            lineHeight: "115%",
          }}
        >
          Consecte adipiscing werdasec ku werdasec ku
        </h2>

        <p
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: "clamp(14px, 4vw, 15px)",
            lineHeight: "150%",
            color: "#333",
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        </p>

        <img
          src="/Products/Products2/ImageRadius.png"
          className="w-full h-auto rounded-xl max-h-[280px] object-cover shadow-md"
        />

        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <Check size={20} style={{ color: "#00AA72", marginTop: "2px" }} />
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "clamp(14px, 3.5vw, 15px)",
                  lineHeight: "140%",
                  color: "#333",
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoPart;
