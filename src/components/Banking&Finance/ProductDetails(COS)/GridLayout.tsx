import { type ImgHTMLAttributes } from "react";
import { H2, H3, P } from "../../../styles/Typography";

export default function GridLayout() {
  const img1Url = "/ProductDetails(COS)/img7.png";
  // const img2Url = "/ProductDetails(COS)/img8.png";

  const handleImageError: ImgHTMLAttributes<HTMLImageElement>["onError"] = (e) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src =
      "https://placehold.co/450x300/FEE2E2/B91C1C?text=Image+Error";
  };

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <H2 className="mb-4 text-black">
            Lorem ipsum dolor, consect adipis ipsum
          </H2>
          <P className="text-[#2A2A2A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </P>
        </div>

        {/* ================= GRID ================= */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">

            {/* CARD 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col md:h-[480px]">
              <H3 className="mb-2 font-semibold">Lorem ipsum</H3>
              <P className="mb-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </P>

              <div className="mt-auto">
                <img
                  src={img1Url}
                  alt="Illustration"
                  className="w-full object-contain rounded-md shadow-inner"
                  onError={handleImageError}
                />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col md:h-[320px]">
              <H3 className="mb-4 font-semibold">Lorem ipsum</H3>
              <P className="text-gray-800 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
              <P className="text-gray-800 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </P>
              <P className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </P>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">

            {/* CARD 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col md:h-[320px]">
              <H3 className="mb-4 font-semibold">Lorem ipsum</H3>
              <P className="text-gray-800 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
              <P className="text-gray-800 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </P>
              <P className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </P>
            </div>

            {/* CARD 4 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col md:h-[480px]">
              <H3 className="mb-2 font-semibold">Lorem ipsum</H3>
              <P className="mb-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </P>

              <div className="mt-auto">
                <img
                  src={img1Url}
                  alt="Illustration"
                  className="w-full object-contain rounded-md shadow-inner"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
