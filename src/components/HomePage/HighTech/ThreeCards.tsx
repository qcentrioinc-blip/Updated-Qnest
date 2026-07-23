const ThreeCards = () => {
  const cards = [
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
    },
  ];

  return (
    <div className="w-full bg-black py-16 sm:py-18 lg:py-20">
      {/* ================= MOBILE + TABLET LAYOUT ================= */}
      <div className="block lg:hidden max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top dot + text */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#8338EC" }} />
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "clamp(14px, 3.5vw, 18px)",
              color: "#F5F5F5",
            }}
          >
            Duis aute irure dolor in reprehenderit
          </p>
        </div>

        {/* Center headings */}
        <div className="w-full flex flex-col items-center text-center mb-10">
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(24px, 6vw, 32px)",
              lineHeight: "110%",
              color: "#F5F5F5",
              marginBottom: "8px",
            }}
          >
            Sed ut perspiciatis
          </h2>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(22px, 6vw, 30px)",
              lineHeight: "110%",
              color: "#F99526",
              whiteSpace: "normal",
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>

        {/* Cards - stacked on mobile, 2 / 3 columns on bigger tablets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white rounded-lg px-5 py-6 sm:px-6 sm:py-7 h-full"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-5"
                style={{ background: "#D9D9D9" }}
              />
              <h4
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 3.6vw, 20px)",
                  lineHeight: "130%",
                  color: "#000",
                }}
              >
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden lg:block">
        <div className="w-full bg-black py-20">
          {/* ------------ CONTENT CONTAINER ------------ */}
          <div className="max-w-8xl mx-10 px-6 lg:px-8 xl:px-10">
            {/* ---------------- TOP LEFT DOT TEXT ---------------- */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ background: "#8338EC" }} />
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "clamp(10px, 3.5vw, 14px)",
                  color: "#F5F5F5",
                }}
              >
                Duis aute irure dolor in reprehenderit
              </p>
            </div>

            {/* ---------------- CENTER HEADINGS ---------------- */}
            <div className="w-full flex flex-col items-center text-center -mt-10 mb-12 lg:mb-20">
              <h2
                className="text-3xl lg:text-4xl xl:text-[42px]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  position: "relative",
                  lineHeight: "100%",
                  color: "#F5F5F5",
                  marginBottom: "12px",
                }}
              >
                Sed ut perspiciatis
              </h2>

              <h3
                className="text-3xl lg:text-5xl xl:text-[48px]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  position: "relative",
                  lineHeight: "100%",
                  color: "#F99526",
                  whiteSpace: "nowrap",
                }}
              >
                Unde Seduo ut perspiciatis
              </h3>
            </div>

            {/* ---------------- CARDS CENTERED ---------------- */}
            <div className="flex flex-row justify-center items-stretch gap-6 lg:gap-6 xl:gap-8">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between flex-1 w-full max-w-[505px]"
                  style={{
                    minHeight: "350px",
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "32px",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-8"
                    style={{ background: "#D9D9D9" }}
                  />

                  <h4
                    className="text-xl lg:text-xl xl:text-[24px]"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      lineHeight: "110%",
                      color: "#000",
                    }}
                  >
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
