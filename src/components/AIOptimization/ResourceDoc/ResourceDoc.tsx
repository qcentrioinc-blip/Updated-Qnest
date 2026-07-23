import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resourceConfig } from "./resource.config";
import { H4, P } from "../../../styles/Typography";
import AINavbar from "../Navbar/AINavbar";

type Params = {
  industry: string;
  category: keyof typeof resourceConfig;
  slug?: string;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const ResourceDoc: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { industry, category, slug } = useParams<Params>();
  const navigate = useNavigate();

  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Audio playback state
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoadingDuration, setIsLoadingDuration] = useState(false);

  // Format time helper (converts seconds to MM:SS format)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  /* ---------------------------------------------
     Resolve category + items
  --------------------------------------------- */
  const categoryConfig = category ? resourceConfig[category] : undefined;
  const items = useMemo(() => categoryConfig?.items ?? [], [categoryConfig]);

  /* ---------------------------------------------
     Redirect category root → first item
  --------------------------------------------- */
  useEffect(() => {
    if (category && !slug && items.length > 0) {
      navigate(
        `/industries/${industry}/resources/${category}/${items[0].slug}`,
        { replace: true }
      );
    }
  }, [category, slug, items, industry, navigate]);

  /* ---------------------------------------------
     Resolve current item
  --------------------------------------------- */
  const flatItems = useMemo(
    () =>
      Object.entries(resourceConfig).flatMap(([catKey, cat]) =>
        cat.items.map((item) => ({
          ...item,
          category: catKey
        }))
      ),
    []
  );

  const flatIndex = useMemo(
    () => flatItems.findIndex((i) => i.slug === slug && i.category === category),
    [flatItems, slug, category]
  );

  const currentItem = flatItems[flatIndex];

  /* ---------------------------------------------
     Memoize ContentComponent
  --------------------------------------------- */
  const ContentComponent = useMemo(() => {
    return currentItem ? React.lazy(currentItem.component) : null;
  }, [currentItem]);

  /* ---------------------------------------------
     Reset TOC when slug changes
  --------------------------------------------- */
  useEffect(() => {
    setToc([]);
    setActiveId("");
    setIsContentLoaded(false);

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, [slug]);

  /* ---------------------------------------------
     Build TOC with Observer
  --------------------------------------------- */
  useEffect(() => {
    if (!slug || !contentRef.current) return;

    let attempts = 0;
    const maxAttempts = 10;

    const tryBuild = () => {
      const container = contentRef.current;
      if (!container) return;
      const headings = container.querySelectorAll("h1,h2,h3");

      if (headings.length === 0 && attempts < maxAttempts) {
        attempts++;
        return setTimeout(tryBuild, 200);
      }

      if (headings.length === 0) {
        setIsContentLoaded(true);
        setToc([]);
        return;
      }

      const tocItems = Array.from(headings).map((h) => {
        if (!h.id) {
          h.id = h.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        }
        return {
          id: h.id,
          text: h.textContent || "",
          level: parseInt(h.tagName.replace("H", ""))
        };
      });

      setToc(tocItems);
      setIsContentLoaded(true);

      if (observerRef.current) observerRef.current.disconnect();

      const visibleIds = new Set<string>();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleIds.add(entry.target.id);
            } else {
              visibleIds.delete(entry.target.id);
            }
          });

          const firstVisible = tocItems.find((item) => visibleIds.has(item.id));
          if (firstVisible) {
            setActiveId(firstVisible.id);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: [0, 1] }
      );

      headings.forEach((h) => {
        if (observerRef.current) observerRef.current.observe(h);
      });
    };

    tryBuild();

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    window.scrollTo({ top: 0, left: 0 });
  }, [slug]);

  /* ---------------------------------------------
     Audio playback handler
  --------------------------------------------- */
  const handleAudioToggle = () => {
    if (!currentItem?.audio) return;

    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current || audioRef.current.src !== currentItem.audio) {
        audioRef.current = new Audio(currentItem.audio);

        audioRef.current.onloadedmetadata = () => {
          setDuration(audioRef.current?.duration || 0);
        };

        audioRef.current.ontimeupdate = () => {
          setCurrentTime(audioRef.current?.currentTime || 0);
        };

        audioRef.current.onended = () => {
          setIsPlaying(false);
          setCurrentTime(0);
        };
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
      }
    };
  }, [slug]);

  useEffect(() => {
    if (!currentItem?.audio) {
      setDuration(0);
      setIsLoadingDuration(false);
      return;
    }

    setIsLoadingDuration(true);

    const tempAudio = new Audio();
    tempAudio.preload = "metadata";

    tempAudio.onloadedmetadata = () => {
      if (
        tempAudio.duration &&
        !isNaN(tempAudio.duration) &&
        isFinite(tempAudio.duration)
      ) {
        setDuration(tempAudio.duration);
      }
      setIsLoadingDuration(false);
    };

    tempAudio.onerror = () => {
      console.warn("Could not preload audio duration");
      setDuration(0);
      setIsLoadingDuration(false);
    };

    tempAudio.src = currentItem.audio;
    tempAudio.load();

    return () => {
      tempAudio.onloadedmetadata = null;
      tempAudio.onerror = null;
      tempAudio.src = "";
    };
  }, [currentItem?.audio]);

  /* ---------------------------------------------
     Render
  --------------------------------------------- */
  return (
    <section className="w-full   bg-[#FAFAFA]">
      <AINavbar />
      <div
        id="landingpage"
        className="flex  md:px-[60px] xl:px-[160px] min-h-screen pt-28   bg-[#FAFAFA]"
      >
        {/* LEFT NAV */}
        <aside
          className={`
            fixed scrollbar-hide lg:sticky top-0 z-40 h-full w-64
            bg-[#FAFAFA]/95  backdrop-blur
            border-r border-gray-200
            transition-transform duration-300
            lg:translate-x-0
            ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}
            lg:block
          `}
        >
          <div className="px-6 py-8 overflow-y-auto scrollbar-hide h-full">
            {/* CLOSE BUTTON (MOBILE ONLY) */}
            <div className="flex justify-end mb-4 lg:hidden">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="font-quadran text-gray-700 "
              >
                ✕
              </button>
            </div>

            {Object.entries(resourceConfig).map(([key, cat]) => (
              <div key={key} className="mb-4">
                <H4 className="mb-1 font-quadran font-bold">{cat.label}</H4>

                {cat.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/industries/${industry}/resources/${key}/${item.slug}`}
                    onClick={() => setMobileNavOpen(false)}
                    className={`relative block text-md py-1 font-quadran font-medium rounded px-3 transition-colors ${
                      slug === item.slug
                        ? "text-[#009565]  font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#009565]"
                        : "text-gray-700  hover:bg-gray-100 "
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </aside>

        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          />
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-white  shadow-xl m-4 lg:m-10 rounded-2xl px-6 lg:px-14 py-10 max-w-4xl">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2 rounded-md border border-gray-300"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <P className="font-quadran font-medium text-gray-700 ">
              {currentItem?.label}
            </P>
          </div>

          {/* BREADCRUMB */}
          <div className="font-quadran text-[#009565]  mb-6 flex items-center gap-1.5 flex-wrap text-sm">
            <Link
              to="/industries/cloud-finops-ai"
              className="hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#009565] ">
              {categoryConfig?.label}
            </span>
            <span>&gt;</span>
            <span className="text-[#009565] font-medium ">
              {currentItem?.label}
            </span>
          </div>

          {/* DYNAMIC COMPONENT CONTENT */}
          <div ref={contentRef} key={slug}>
            {ContentComponent && (
              <Suspense fallback={null}>
                <ContentComponent />
              </Suspense>
            )}
          </div>

          {/* PREV / NEXT NAVIGATION */}
          <div className="flex justify-between mt-20 pt-6 border-t border-gray-300">
            {flatItems[flatIndex - 1] ? (
              <Link
                to={`/industries/${industry}/resources/${
                  flatItems[flatIndex - 1].category
                }/${flatItems[flatIndex - 1].slug}`}
                className="text-[#009565] font-quadran font-bold text-[18px] flex items-center gap-3 hover:text-green-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#CCCCCC] flex items-center justify-center">
                  <img
                    src="/AIProduct/RightArrowAI.png"
                    alt="Previous"
                    className="h-3 w-4"
                  />
                </div>
                <span>Previous</span>
              </Link>
            ) : (
              <span />
            )}

            {flatItems[flatIndex + 1] ? (
              <Link
                to={`/industries/${industry}/resources/${
                  flatItems[flatIndex + 1].category
                }/${flatItems[flatIndex + 1].slug}`}
                className="text-[#009565] font-quadran font-bold text-[18px] flex items-center gap-3 hover:text-green-800 transition-colors"
              >
                <span>Next</span>
                <div className="w-8 h-8 rounded-full bg-[#CCCCCC] flex items-center justify-center">
                  <img
                    src="/AIProduct/RightArrowAI.png"
                    alt="Next"
                    className="h-3 w-4 -scale-x-100"
                  />
                </div>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </main>

        {/* RIGHT TOC + AUDIO ACTIONS */}
        <aside className="w-64 hidden scrollbar-hide xl:flex flex-col gap-6 px-6 py-10 sticky top-0 h-screen overflow-y-auto">
          {/* TOC SECTION */}
          <div className="bg-[#FDFDFD]  ">
            <div className="mb-4 p-6">
              <P className="font-semibold font-quadran text-gray-900  uppercase text-xs tracking-wider">
                Contents
              </P>
            </div>

            {!isContentLoaded && (
              <P className="text-gray-400 font-quadran text-sm animate-pulse">
                Loading table of contents...
              </P>
            )}

            {isContentLoaded && toc.length === 0 && (
              <P className="text-gray-400 font-quadran text-sm">
                No headings found
              </P>
            )}

            {isContentLoaded && toc.length > 0 && (
              <nav>
                <ul className="space-y-1 text-sm border-l-2 border-gray-200">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block py-1.5 px-3 -ml-[2px] border-l-2 font-quadran border-[#009565] transition-all duration-200 ${
                          activeId === item.id
                            ? "text-[#009565]  border-[#009565] font-medium bg-blue-50/50"
                            : "text-gray-600  border-transparent hover:text-[#009565] hover:border-gray-300"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(item.id);
                          if (element) {
                            const yOffset = -80;
                            const y =
                              element.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* AUDIO PLAYER */}
          <div className="flex flex-col gap-4 mt-4">
            {currentItem?.audio && (
              <div className="w-full p-4 rounded-lg shadow   bg-white font-quadran">
                {/* Play/Pause Button and Status */}
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={handleAudioToggle}
                    className="w-10 h-10 rounded-full bg-[#009565] flex items-center justify-center hover:bg-[#4440EE] transition flex-shrink-0"
                  >
                    {isPlaying ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    )}
                  </button>
                  <P className="font-medium font-quadran text-gray-800 ">
                    {isPlaying ? "Now Playing" : "Listen Now"}
                  </P>
                </div>

                {/* Progress Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-2 bg-gray-200 rounded-full cursor-pointer mb-2 group"
                >
                  <div
                    className="h-full bg-[#009565] rounded-full transition-all relative"
                    style={{
                      width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%"
                    }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#009565] rounded-full opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>

                {/* Time Display */}
                <div className="flex justify-between text-xs text-gray-500 font-quadran">
                  <span>{formatTime(currentTime)}</span>
                  <span>
                    {isLoadingDuration ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      formatTime(duration)
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ResourceDoc;