import { useNavigate } from "react-router-dom";
import { H2, P } from "../../styles/Typography";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";


const Products = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;

    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    const scrollAmount = window.innerWidth < 1024 ? 300 : 450;
    const start = container.scrollLeft;
    const target = start + (direction === 'right' ? scrollAmount : -scrollAmount);
    const change = target - start;
    let startTime: number | null = null;
    const duration = 500;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Quartic Ease-Out for a smoother, more responsive feel
      const ease = 1 - Math.pow(1 - progress, 4);

      container.scrollLeft = start + change * ease;

      if (timeElapsed < duration) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const scrollLeft = () => scroll('left');
  const scrollRight = () => scroll('right');

  const products = [
    {
      id: 1,
      image: '/BNFHOME/P1.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/AWACS.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/almanac"
    },
    {
      id: 2,
      image: '/BNFHOME/P2.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/relier.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/bankfair"
    },
    {
      id: 3,
      image: '/BNFHOME/P3.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/sherlock.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/customer-onboarding-solutions"
    },
    {
      id: 4,
      image: '/BNFHOME/P4.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/conciliare.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',

      route: "/industries/banking-and-finance/products/internet-banking-system"
    },
    {
      id: 5,
      image: '/BNFHOME/P5.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/PAGO.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/loan-origination-system"
    },
    {
      id: 6,
      image: '/BNFHOME/P6.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/Simplified.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/pago"
    },
    {
      id: 7,
      image: '/BNFHOME/P7.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/relier.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/remitree"
    },
    {
      id: 8,
      image: '/BNFHOME/P8.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/relier.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/sams"
    },
    {
      id: 9,
      image: '/BNFHOME/P9.jpg',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique  ',
      logo: '/BNFlogo/relier.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/sherlock"
    }
  ];

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scroll") === "products") {
      const target = document.getElementById("productsSection");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);


  const handleProductClick = (route: string) => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    // Small delay to ensure scroll completes before navigation
    setTimeout(() => {
      navigate(route);
    }, 100);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto  ">

        {/* Header */}
        <div className="mb-8 relative md:mb-12 lg:pl-10 flex items-center justify-between">

          <H2 className="font-bold leading-tight">
            <span className="text-[#00AA72]">Sed ut perspiciatis</span><br />
            <span className="text-[#666666]">undeSed ut perspiciatis</span>
          </H2>
          {/* LEFT BUTTON */}
          <div className=" absolute right-2 lg:right-12  gap-4 lg:gap-8   flex">
            <button
              onClick={scrollLeft}
              className="bg-white shadow-lg w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full 
                 text-[#00AA72]"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              className="bg-white shadow-lg w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full 
                  text-[#00AA72]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative lg:pl-10">



          {/* Products Slider */}
          <div
            id="productsSection"
            ref={sliderRef}
            className="flex gap-6 md:gap-10 h-[300px] md:h-[350px] xl:h-[405px] overflow-x-auto scrollbar-hide no-scrollbar pb-4 overscroll-x-contain"
            style={{
              scrollBehavior: 'auto',
              willChange: 'scroll-position'
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative w-[280px] sm:w-[330px] md:w-[360px] lg:w-[384px]
                           flex-shrink-0 rounded-sm overflow-hidden shadow-md
                           hover:shadow-xl transition-shadow duration-300 group cursor-pointer
                           gpu-optimized"
                style={{
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                onClick={() => handleProductClick(product.route)}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />


                <div
                  className="absolute inset-0 pointer-events-none opacity-70"
                  style={{
                    background: "radial-gradient(circle at top, rgba(43,200,255,0.55) 90%, rgba(249,149,38,0.45) 100%)",
                    mixBlendMode: "overlay"
                  }}
                ></div>

                {product.hasContent && (
                  <>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black/60 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Title */}
                    <div className="absolute top-4 left-4 sm:top-6 md:left-6 md:pr-10 opacity-100
                                    group-hover:opacity-0 transition-opacity duration-300">
                      <P className="text-white">{product.title}</P>
                    </div>

                    {/* Logo sliding */}
                    <div className="absolute left-4 sm:left-6 bottom-6 w-[200px] rounded-md py-3
                                    transition-all duration-700 ease-in-out transform
                                    group-hover:-translate-y-62">
                      <img src={product.logo} className=" h-20  rounded-md w-full" />
                    </div>

                    {/* Hover Description */}
                    <div className="absolute bottom-[-100%] left-0 w-full px-6 text-white
                                    opacity-0 group-hover:bottom-12 group-hover:opacity-100
                                    transition-all duration-700 ease-in-out">
                      <P className="text-white">{product.para}</P>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;