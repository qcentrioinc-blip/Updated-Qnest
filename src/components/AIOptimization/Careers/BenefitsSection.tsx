import React, { useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, type PanInfo } from 'framer-motion';
// Keeping your custom typography import
import { H1 } from "../../../styles/Typography";

// --- Sub-component: CardRotate ---
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_event: any, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    }
    // Always reset x/y so the next card starts at center
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={`absolute inset-0 ${disableDrag ? 'cursor-pointer' : 'cursor-grab'}`}
      style={disableDrag ? { x: 0, y: 0 } : { x, y, rotateX, rotateY }}
      drag={!disableDrag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={!disableDrag ? { cursor: 'grabbing' } : {}}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// --- Sub-component: Stack ---
interface CardData {
  id: number;
  content: React.ReactNode;
  randomRot: number; // Store rotation here to prevent jitter
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: { id: number; content: React.ReactNode }[];
  animationConfig?: { stiffness: number; damping: number };
  onCardChange?: (id: number) => void;
}

function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onCardChange
}: StackProps) {
  // Initialize stack with a fixed random rotation for each card
  const [stack, setStack] = useState<CardData[]>(() => 
    cards.map(c => ({
      ...c,
      randomRot: randomRotation ? Math.random() * 10 - 5 : 0
    }))
  );

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card); // Move to bottom of array (visually back)
      
      // Notify parent: The NEW top card is the one now at the end of the array
      if (onCardChange) {
        onCardChange(newStack[newStack.length - 1].id);
      }
      return newStack;
    });
  };

  return (
    <div className="relative w-full h-full" style={{ perspective: 1000 }}>
      {stack.map((card, index) => {
        const isTop = index === stack.length - 1;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-md overflow-hidden w-full h-full bg-white shadow-xl"
              onClick={() => sendToBackOnClick && isTop && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + card.randomRot,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%',
              }}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

// --- Main Component: BenefitsSection ---
export default function BenefitsSection() {
  const benefits = useMemo(() => [
    {
      id: 1,
      image: "/AI/Careers/img1.jpg",
      leftText: "Fast Career \n Growth ",
      rightText: "Remote Work \n Options "
    },
    {
      id: 2,
      image: "/AI/Careers/img2.jpg",
      leftText: "Full \n Health",
      rightText: "Medical \n Coverage"
    },
    {
      id: 3,
      image: "/AI/Careers/img3.jpg",
      leftText: "Global \n Team",
      rightText: "Remote \n First"
    }
  ], []);

  // Set the initial active ID to the card that will be on top (the last one in the array)
  const [activeId, setActiveId] = useState(benefits[benefits.length - 1].id);
  const activeData = benefits.find(b => b.id === activeId);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center text-center gap-10">
        
        {/* Left Text */}
        <div className="relative h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <H1 className="text-[#020059] leading-tight whitespace-pre-line">
                {activeData?.leftText}
              </H1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Image Stack */}
        <div className="relative flex justify-center items-center h-[350px] w-[280px] mx-auto">
          <Stack
            randomRotation={true}
            sensitivity={150}
            sendToBackOnClick={true}
            onCardChange={setActiveId}
            cards={benefits.map((b) => ({
              id: b.id,
              content: (
                <img
                  src={b.image}
                  alt="benefit"
                  className="w-full h-full object-cover pointer-events-none"
                />
              )
            }))}
          />
        </div>

        {/* Right Text */}
        <div className="relative h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <H1 className="text-[#020059] leading-tight whitespace-pre-line">
                {activeData?.rightText}
              </H1>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}