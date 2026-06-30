declare module 'lenis/react' {
  import type { ReactNode } from 'react';

  interface LenisOptions {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  interface ReactLenisProps {
    root?: boolean;
    options?: LenisOptions;
    children?: ReactNode;
    className?: string;
  }

  export function ReactLenis(props: ReactLenisProps): JSX.Element;
  export function useLenis(
    callback?: (lenis: unknown) => void,
    deps?: unknown[],
  ): unknown;
}
