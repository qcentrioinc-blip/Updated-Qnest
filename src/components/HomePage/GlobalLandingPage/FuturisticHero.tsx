import { motion } from 'framer-motion';

const industries = [
  { name: 'HCLTech', icon: '🌐' },
  { name: 'HCLSoftware', icon: '💻' },
  { name: 'HCL Healthcare', icon: '🏥' },
  { name: 'HCL GUVI', icon: '🎓' },
  { name: 'HCL Infosystems', icon: '🖥️' },
];

const FuturisticHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center font-sans text-white">
      
      {/* 1. Background Plexus/Grid Effect */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #333 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. The Orbital Ring (SVG for the glow path) */}
      <svg className="absolute w-[600px] h-[600px] opacity-30">
        <motion.circle
          cx="300"
          cy="300"
          r="250"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Central Core Logo */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 p-[2px] shadow-[0_0_50px_rgba(139,92,246,0.3)]"
      >
        <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center overflow-hidden">
           {/* Replace with your NQ Logo Image */}
           <span className="text-4xl font-bold tracking-tighter italic">NQ</span>
        </div>
        
        {/* Breathing Aura */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-purple-500 rounded-full blur-2xl -z-10"
        />
      </motion.div>

      {/* 4. The Industry Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {industries.map((item, index) => {
          const angle = (index * (360 / industries.length)) * (Math.PI / 180);
          const radius = 280; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x, y }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              className="absolute group cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div className="relative px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md 
                            hover:bg-white/10 hover:border-white/20 transition-all duration-300
                            flex flex-col items-center gap-2 min-w-[160px] shadow-2xl">
                
                {/* Subtle Glow behind icon */}
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <span className="text-sm font-medium tracking-wide text-gray-300 group-hover:text-white">
                  {item.name}
                </span>

                {/* Connecting Line to Center (Optional) */}
                <div className="absolute top-1/2 left-1/2 -z-10 w-px h-full bg-gradient-to-b from-white/20 to-transparent origin-top"
                     style={{ transform: `rotate(${angle + Math.PI/2}rad) translateY(-100%)`, height: radius }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Header UI Overlay */}
      <div className="absolute top-8 left-12 flex items-center gap-4">
        <h1 className="text-2xl font-black italic tracking-tighter">HCL</h1>
        <div className="h-6 w-[1px] bg-white/20" />
        <span className="text-sm tracking-[0.2em] text-gray-400">HCL GROUP</span>
      </div>
    </div>
  );
};

export default FuturisticHero;