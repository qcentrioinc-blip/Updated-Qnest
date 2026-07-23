import { useEffect, useRef, useState } from 'react'
import { H2, H3, P } from '../../../styles/Typography'

 
const cards = [
  {
    id: 1,
    variant: 'dark',       // dark navy background
    iconBg: 'blue',        // blue icon circle
    title: 'Digital Loan Application',
    description: 'Simplified application form with a subset of fields for quick submission across all devices',
    showBadge: false,
  },
  {
    id: 2,
    variant: 'light',      // light blue background
    iconBg: 'dark',        // dark icon circle
    title: ' Pre-Approved Offers',
    description: ' Manage and upload pre-approved offers for selected customers with quick screening and auto-approval ',
    showBadge: true,       // "S" badge on this card
  },
  {
    id: 3,
    variant: 'dark',
    iconBg: 'blue',
    title: ' Product Rule Enrichment',
    description: ' Inherits the core system product rules with the provision to add additional checks and controls',
    showBadge: false,
  },
  {
    id: 4,
    variant: 'light',
    iconBg: 'dark',
    title: 'Score Factor Setup ',
    description: 'Configure built-in and custom score parameters for individual and corporate customers',
    showBadge: false,
  },
]

const Card = ({
  card,
  index,
  visible,
}: {
  card: (typeof cards)[0]
  index: number
  visible: boolean
}) => {
  const isDark = card.variant === 'dark'
  const isBlueIcon = card.iconBg === 'blue'

  return (
    <div
      className={`
        relative flex flex-col justify-between rounded-2xl p-6 h-100 xl:h-[350px]
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDark ? 'bg-[#004A32] text-white' : 'bg-[#00AA72] text-[#143D79]'}
        hover:-translate-y-2 hover:shadow-2xl
      `}
      style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
    >
      {/* Icon */}
      <div
        className={`
          w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
          ${isBlueIcon ? 'bg-[#00AA72]' : 'bg-black'}
        `}
      >
     <div
  className={`
    w-12 h-12 rounded-full flex items-center font-quadran   tect-[18px] justify-center flex-shrink-0
    ${isBlueIcon ? 'bg-[#00AA72] text-white' : 'bg-black text-white'}
    font-bold text-lg
  `}
>
  {index + 1}
</div>
      </div>

       

      {/* Text */}
      <div className="mt-auto pt-6">
        <H3 className={`text-xl font-bold leading-snug mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {card.title}
        </H3>
    <P
  className={`text-sm leading-relaxed ${
    isDark ? '!text-[#CCCCCC]' : '!text-[#141414]'
  }`}
>
          {card.description}
        </P>
      </div>
    </div>
  )
}

const Automate = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white dark:bg-black px-4 py-6 sm:px-6 md:py-10  xl:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <H2 className="text-3xl dark:text-white sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mx-auto">
           Digital Application and Intelligent Loan Processing 
          </H2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Automate