import React from 'react';
import { Info, AlertTriangle, Flame, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/cn';

export type CalloutType = 'note' | 'tip' | 'warning' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const typeConfig = {
  note: {
    icon: Info,
    borderColor: 'border-blue-500/30 dark:border-blue-500/20',
    bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
    textColor: 'text-blue-900 dark:text-blue-200',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'Note',
  },
  tip: {
    icon: Lightbulb,
    borderColor: 'border-emerald-500/30 dark:border-emerald-500/20',
    bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/20',
    textColor: 'text-emerald-900 dark:text-emerald-200',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'Tip',
  },
  warning: {
    icon: AlertTriangle,
    borderColor: 'border-amber-500/30 dark:border-amber-500/20',
    bgColor: 'bg-amber-50/50 dark:bg-amber-950/20',
    textColor: 'text-amber-900 dark:text-amber-200',
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Warning',
  },
  danger: {
    icon: Flame,
    borderColor: 'border-red-500/30 dark:border-red-500/20',
    bgColor: 'bg-red-50/50 dark:bg-red-950/20',
    textColor: 'text-red-900 dark:text-red-200',
    iconColor: 'text-red-600 dark:text-red-400',
    title: 'Danger',
  },
};

export function Callout({
  type = 'note',
  title,
  children,
  className,
}: CalloutProps) {
  const config = typeConfig[type] || typeConfig.note;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'my-6 flex flex-col gap-3 rounded-lg border p-4 text-[15px] leading-relaxed shadow-sm transition-all duration-200 hover:shadow-md',
        config.borderColor,
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <div className="flex items-center gap-2.5 font-semibold tracking-wide">
        <Icon className={cn('h-5 w-5 shrink-0', config.iconColor)} />
        <span>{title || config.title}</span>
      </div>
      <div className="callout-content prose-sm prose-neutral dark:prose-invert">
        {children}
      </div>
    </div>
  );
}
