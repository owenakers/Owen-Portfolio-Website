import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('color-theme');
    return stored !== 'light';
  });

  useEffect(() => {
    const updateTheme = () => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    };

    updateTheme();
  }, [isDark]);

  const toggleTheme = () => {
    console.log('Before toggle - isDark:', isDark);
    setIsDark(prev => {
      const newValue = !prev;
      console.log('After toggle - isDark will be:', newValue);
      return newValue;
    });
  };

  return { isDark, toggleTheme };
};
