 import React from 'react';
 import { Moon, Sun } from 'lucide-react';
 import { useTheme } from '@/hooks/use-theme';
 
 const ThemeToggle: React.FC = () => {
   const { theme, setTheme } = useTheme();
 
   const toggleTheme = () => {
     setTheme(theme === 'dark' ? 'light' : 'dark');
   };
 
   return (
     <button
       onClick={toggleTheme}
       className="relative w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all duration-300 hover:scale-105"
       aria-label="Toggle theme"
     >
       <Sun className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
       <Moon className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
     </button>
   );
 };
 
 export default ThemeToggle;