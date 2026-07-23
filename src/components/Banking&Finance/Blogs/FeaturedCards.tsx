"use client";

import { H2, P } from "../../../styles/Typography";

export default function BlogFeaturedSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-16">
      {/* Heading */}
      <H2 className="mb-10">Consecte adipiscing</H2>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-4">
        
        {/* LEFT BIG CARD */}
        <div className="bg-white rounded-xl overflow-hidden text-black">
          <img
            src="/Blogs/FeaturedCards/img1.jpg"
            alt="Featured Image"
            
            className="w-full h-[280px] md:h-[450px] object-cover"
          />

          <div className="p-6 space-y-3">
            <P className="text-black font-bold">Lorem ipsum</P>

            <P className="max-w-2xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium accusantium doloremque laudantium
            </P>

            <div className="flex items-center justify-between text-gray-500 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">✒ Author</span>
              </div>

              <div className="flex items-center gap-1 text-sm">
                📅 <span>AUGUST 19,2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN OF SMALL CARDS */}
        <div className="space-y-4">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl overflow-hidden text-black flex flex-col md:flex-row">
            <img
              src="/Blogs/FeaturedCards/img4.jpg"
              alt="Card Image"
              width={300}
              height={250}
              className="w-full md:w-[40%] h-[150px] md:h-[200px] object-cover"
            />

            <div className="p-5 flex flex-col justify-between">
              <div>
                <P className="text-black font-bold">Lorem ipsum</P>

                <P className=" leading-snug mt-4 max-w-2xl sm:max-w-sm lg:max-w-xl xl:max-w-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </P>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm mt-3">
                <span>✒ Author</span>
                <span>📅 AUGUST 19,2025</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl overflow-hidden text-black flex flex-col md:flex-row">
            <img
              src="/Blogs/FeaturedCards/img4.jpg"
              alt="Card Image"
              width={300}
              height={200}
              className="w-full md:w-[40%] h-[150px] md:h-[200px] object-cover"
            />

            <div className="p-5 flex flex-col justify-between">
              <div>
                <P className="text-black font-bold">Lorem ipsum</P>

                <P className=" leading-snug mt-4 max-w-2xl sm:max-w-sm lg:max-w-xl xl:max-w-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </P>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm mt-3">
                <span>✒ Author</span>
                <span>📅 AUGUST 19,2025</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl overflow-hidden text-black flex flex-col md:flex-row">
            <img
              src="/Blogs/FeaturedCards/img4.jpg"
              alt="Card Image"
              width={300}
              height={200}
              className="w-full md:w-[40%] h-[150px] md:h-[200px] object-cover"
            />

            <div className="p-5 flex flex-col justify-between">
              <div>
                <P className="text-black font-bold">Lorem ipsum</P>

                <P className=" leading-snug mt-4  max-w-2xl sm:max-w-sm lg:max-w-xl xl:max-w-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </P>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm mt-3">
                <span>✒ Author</span>
                <span>📅 AUGUST 19,2025</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
