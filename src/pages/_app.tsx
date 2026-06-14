import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStart = () => {
      setTransitioning(true);
    };
    const handleComplete = () => {
      setTransitioning(false);
      if (wrapperRef.current) {
        wrapperRef.current.classList.remove('page-transition-enter');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        wrapperRef.current.offsetHeight;
        wrapperRef.current.classList.add('page-transition-enter');
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div
      ref={wrapperRef}
      className="page-transition-enter"
      style={{
        opacity: transitioning ? 0.3 : undefined,
        transition: 'opacity 0.2s ease',
      }}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
