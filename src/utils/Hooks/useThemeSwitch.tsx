"use client"
import { useTheme } from 'next-themes';

const useThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return {
    theme,
    setTheme,
    resolvedTheme,
  };
};

export default useThemeSwitch;
