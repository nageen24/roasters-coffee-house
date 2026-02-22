'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide loader once the page content has loaded
    const timer = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="page-loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo">
        ROASTERS <span>&</span> GRILL
      </div>
      <div className="loader-ring" />
    </div>
  );
}
