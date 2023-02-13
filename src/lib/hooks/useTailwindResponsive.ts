import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config.cjs';

type DefaultScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type DefaultScreenConstraint = 'min' | 'max';
type Screens = {
  [key in DefaultScreenSize]: string;
};

const tailwindConfigResolved = resolveConfig(tailwindConfig);
const screenSizes = tailwindConfigResolved.theme?.screens as unknown as Screens;

// Inspired by https://juhanajauhiainen.com/posts/how-to-implement-usemediaquery-hook-in-react
export default function useTailWindResponsive(
  query: DefaultScreenSize,
  screenConstraint: DefaultScreenConstraint = 'min'
) {
  const inputQueryMapped = screenSizes[query];
  const inputMediaQuery = `(${screenConstraint}-width: ${inputQueryMapped})`;
  console.log('inputMediaQuery', inputMediaQuery);
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    console.log('IM RUNNING WOOOOO......');
    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }
    const matchQueryList = window.matchMedia(inputMediaQuery);
    console.log('matchQueryList', matchQueryList);
    setMatches(matchQueryList.matches);

    matchQueryList.addEventListener('change', handleChange);

    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, [query, inputMediaQuery]);

  return matches;
}
