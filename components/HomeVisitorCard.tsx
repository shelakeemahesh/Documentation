"use client";

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export function HomeVisitorCard() {
  const [count, setCount] = useState<number | null>(null);
  const [displayVal, setDisplayVal] = useState<string>('—');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visitor-counted');
    let url = 'https://abacus.jasoncameron.dev/get/fullstackdocs/home-visits';

    if (!hasVisited) {
      url = 'https://abacus.jasoncameron.dev/hit/fullstackdocs/home-visits';
      sessionStorage.setItem('visitor-counted', 'true');
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          const target = data.value;
          setCount(target);
          setLoading(false);

          // Animate count-up on load over 1000ms
          const duration = 1000;
          const start = Date.now();
          
          const step = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            // Easing function (outQuad)
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(easeProgress * target);
            
            // Format current value with compact notation
            const formatted = new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(current);
            
            setDisplayVal(formatted);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              const finalFormatted = new Intl.NumberFormat('en-US', {
                notation: 'compact',
              }).format(target);
              setDisplayVal(finalFormatted);
            }
          };

          requestAnimationFrame(step);
        } else {
          setLoading(false);
          setDisplayVal('—');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch/increment home visits:', err);
        setLoading(false);
        setDisplayVal('—');
      });
  }, []);

  return (
    <div className="flex flex-col p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-500 mb-4">
        <Users className="h-6 w-6" />
      </div>
      
      {loading ? (
        <div className="space-y-2">
          {/* Skeleton loading animation */}
          <div className="h-9 w-20 rounded-md bg-zinc-800/80 animate-pulse" />
          <div className="h-4 w-16 rounded bg-zinc-800/40 animate-pulse" />
        </div>
      ) : (
        <>
          <div className="text-3xl font-extrabold tracking-tight text-zinc-100">
            {displayVal}
          </div>
          <div className="text-sm text-zinc-400 mt-1">Visitors</div>
        </>
      )}
    </div>
  );
}
