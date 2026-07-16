import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-50 px-6 text-center">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-semibold tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
          Error 404
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Lost in the Stack?
        </h1>
        <p className="max-w-md mx-auto text-zinc-400 text-base leading-relaxed">
          The page you are looking for doesn't exist. It might have been moved, renamed, or is currently compiling.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/docs"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-amber-500 px-6 font-semibold text-zinc-950 transition-colors hover:bg-amber-400 active:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          Go to Documentation
        </Link>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-6 font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-700"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
