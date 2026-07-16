import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';
import { GithubIcon, YoutubeIcon, LinkedinIcon, XIcon } from '@/components/icons';
import React from 'react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold text-amber-500 hover:opacity-90">
          <span className="text-xl">⚡</span>
          <span className="font-extrabold tracking-tight">{appName}</span>
        </div>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        type: 'icon',
        label: 'GitHub',
        icon: <GithubIcon className="h-5 w-5 text-zinc-400 hover:text-zinc-100 transition-colors" />,
        url: 'https://github.com',
        text: 'GitHub',
      },
      {
        type: 'icon',
        label: 'YouTube',
        icon: <YoutubeIcon className="h-5 w-5 text-zinc-400 hover:text-zinc-100 transition-colors" />,
        url: 'https://youtube.com',
        text: 'YouTube',
      },
      {
        type: 'icon',
        label: 'LinkedIn',
        icon: <LinkedinIcon className="h-5 w-5 text-zinc-400 hover:text-zinc-100 transition-colors" />,
        url: 'https://linkedin.com',
        text: 'LinkedIn',
      },
      {
        type: 'icon',
        label: 'Twitter',
        icon: <XIcon className="h-5 w-5 text-zinc-400 hover:text-zinc-100 transition-colors" />,
        url: 'https://twitter.com',
        text: 'Twitter',
      },
    ],
  };
}
