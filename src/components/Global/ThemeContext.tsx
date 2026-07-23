import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'light' | 'dark';
interface ThemeContextType { theme: Theme; toggleTheme: () => void; }

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', toggleTheme: () => {},
});

const DARK_MODE_PATH_PREFIXES = [
  "/industries/banking-and-finance/products/",
  "/industries/cloud-finops-ai",
  "/industries/banking-and-finance",
  "/",
  "/contact",
   "/industries/ehr-and-pms/privacy-policy",
  "/industries/ehr-and-pms/cookie-policy",
  "/industries/ehr-and-pms/terms-and-conditions"
  
];
const DARK_MODE_BLOCKED_PREFIXES = [
  "/industries/banking-and-finance/built-for/sada",
 

  
];
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  // const isAllowed = DARK_MODE_PATH_PREFIXES.some(prefix => location.pathname.startsWith(prefix));
const isBlocked = DARK_MODE_BLOCKED_PREFIXES.some(prefix =>
  location.pathname.startsWith(prefix)
);

const isAllowed = !isBlocked && DARK_MODE_PATH_PREFIXES.some(prefix =>
  location.pathname.startsWith(prefix)
);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const isAllowedOnLoad = DARK_MODE_PATH_PREFIXES.some(prefix => window.location.pathname.startsWith(prefix));
    return (saved === 'dark' && isAllowedOnLoad) ? 'dark' : 'light';
  });

  // Apply/remove dark class based on theme + page
  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (theme === 'dark' && isAllowed) {
  //     root.classList.add('dark');
  //   } else {
  //     root.classList.remove('dark');
  //   }
  // }, [theme, isAllowed]);
  useEffect(() => {
  const root = document.documentElement;

  if (isBlocked) {
    root.classList.remove('dark');
    setTheme('light');
    localStorage.removeItem('theme');
    return;
  }

  if (theme === 'dark' && isAllowed) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}, [theme, isAllowed, isBlocked]);

  // Reset when navigating away from allowed page
  useEffect(() => {
    if (!isAllowed) {
      setTheme('light');
      localStorage.removeItem('theme');
    }
  }, [isAllowed]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);