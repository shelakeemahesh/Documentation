"use client";

import React, { useEffect, useState } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Prevent double-counting unique sessions by storing a flag in sessionStorage
    const hasVisited = sessionStorage.getItem('doc_hub_visited');
    let url = 'https://api.counterapi.dev/v1/shelakeemahesh-docs/visits/';
    
    if (!hasVisited) {
      url = 'https://api.counterapi.dev/v1/shelakeemahesh-docs/visits/up';
      sessionStorage.setItem('doc_hub_visited', 'true');
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === 'number') {
          setCount(data.count + 5800); // Base offset of 5.8K visits
        }
      })
      .catch((err) => {
        console.error('Failed to update/fetch visitor count:', err);
      });
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold text-zinc-300 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:scale-105 hover:border-amber-500/40 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{count.toLocaleString()} visits</span>
    </div>
  );
}
