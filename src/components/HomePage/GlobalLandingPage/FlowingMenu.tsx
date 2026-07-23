import React, { useMemo, useRef } from "react";
import { gsap } from "gsap";

const FlowingMenu: React.FC = () => {
  const items = [
    {
      text: "Cloud Finops AI",
      hoverText: "Cloud Diet",
      image: "/Global-Landing-Page/AzureLogo.webp",
      isLive: true,
      href: "/industries/cloud-finops-ai",
    },
    {
      text: "Other Industries",
      hoverText: "Coming Soon",
      image: "https://picsum.photos/600/400?random=1",
      isLive: true,
      href: "#",
    },
  ];

  return (
    <div className="relative w-full h-[250px] bg-black overflow-hidden font-quadran   border-t border-b border-white/15">
      <nav className="flex flex-col h-full">
        {items.map((item, i) => (
          <MenuItem
            key={i}
            {...item}
            isLast={i === items.length - 1}
          />
        ))}
      </nav>
    </div>
  );
};

interface MenuItemProps {
  text: string;
  hoverText: string;
  image: string;
  isLive: boolean;
  isLast: boolean;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  hoverText,
  image,
  isLive,
  isLast,
  href,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const animationDefaults: gsap.TweenVars = {
    duration: 0.3,
    ease: "expo.out",
  };

  /* ---------------- EDGE DETECTION ---------------- */
  const dist = (x: number, y: number, x2: number, y2: number) =>
    (x - x2) ** 2 + (y - y2) ** 2;

  const closestEdge = (
    mx: number,
    my: number,
    w: number,
    h: number
  ): "top" | "bottom" =>
    dist(mx, my, w / 2, 0) < dist(mx, my, w / 2, h) ? "top" : "bottom";

  /* ---------------- MARQUEE CONTROL ---------------- */
  const startScroll = () => {
    gsap.to(marqueeInnerRef.current, {
      x: "-50%",
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  };

  const stopScroll = () => {
    gsap.killTweensOf(marqueeInnerRef.current);
    gsap.set(marqueeInnerRef.current, { x: "0%" });
  };

  /* ---------------- EVENTS ---------------- */
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLive) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const r = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - r.left,
      e.clientY - r.top,
      r.width,
      r.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
        autoAlpha: 1,
      })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
        autoAlpha: 1,
        x: "0%",
      })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0)
      .to(linkRef.current, { opacity: 0 }, 0)
      .call(startScroll);
  };

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLive) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const r = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - r.left,
      e.clientY - r.top,
      r.width,
      r.height
    );

    stopScroll();

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
      })
      .to(
        marqueeInnerRef.current,
        {
          y: edge === "top" ? "101%" : "-101%",
          autoAlpha: 0,
        },
        0
      )
      .to(linkRef.current, { opacity: 1 }, 0);
  };

  /* ---------------- MARQUEE CONTENT ---------------- */
  const marqueeContent = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => (
        <React.Fragment key={i}>
          <span className="uppercase text-[4vh] font-normal px-[1vw] pt-[1vh] text-black whitespace-nowrap font-quadran  ">
            {hoverText}
          </span>

          {image && (
            <div
              className="w-[140px] h-[6vh] my-[0.25em] mx-[1.5vw] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </React.Fragment>
      )),
    [hoverText, image]
  );

  return (
    <div
      ref={itemRef}
      className={`relative flex-1 overflow-hidden text-center
        ${!isLast ? "border-b border-white/15" : ""}
        ${isLive ? "cursor-pointer" : "cursor-not-allowed opacity-50"}
      `}
    >
      {/* STATIC TEXT */}
      <a
        ref={linkRef}
        href={href}
        onClick={(e) => {
          if (!isLive || href === "#") e.preventDefault();
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="relative z-10 flex h-full items-center justify-center uppercase
          font-semibold text-white text-[4vh] select-none font-quadran  "
      >
        {text}
      </a>

      {/* HOVER MARQUEE */}
      {isLive && (
        <div
          ref={marqueeRef}
          className="pointer-events-none absolute inset-0 bg-white translate-y-[101%] opacity-0"
        >
          <div
            ref={marqueeInnerRef}
            className="flex w-[200%] h-full items-center opacity-0"
          >
            {marqueeContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowingMenu;
