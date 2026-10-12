import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false
};

export const SteamIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 3c-1.5 2 1.5 3.5 0 5.5M12 2c-1.5 2 1.5 3.5 0 5.5M16 3c-1.5 2 1.5 3.5 0 5.5" />
    <path d="M4 11h14v4a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6z" />
    <path d="M18 12.5h1.5a2.5 2.5 0 0 1 0 5H17.6" />
  </svg>
);

export const IceIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
    <path d="M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  // Points left (the forward direction in RTL); mirrored by CSS on LTR pages.
  <svg {...base} className="icon-arrow" {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

export const CupIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 7h12l-1.3 12.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8z" />
    <path d="M5 4.5h14V7H5zM9 2.5h6" />
  </svg>
);

export const HandIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10m0-1V4a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v6.5A6.5 6.5 0 0 1 12.5 21h-.7a6 6 0 0 1-4.6-2.2L4.2 15a1.6 1.6 0 0 1 2.4-2.1L7 13.4" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ChatIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20l1.4-4A8 8 0 1 1 8 19.6z" />
  </svg>
);

export function TempIcon({ temp, ...p }: IconProps & { temp: 'hot' | 'iced' }) {
  return temp === 'hot' ? <SteamIcon {...p} /> : <IceIcon {...p} />;
}
