import type { SVGProps } from 'react';

export default function EmptyWhiteCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='124' height='124' viewBox='0 0 124 124' fill='none' {...props}>
      <circle cx='62' cy='62' r='62' fill='url(#paint0_linear_46_26951)' />
      <defs>
        <linearGradient
          id='paint0_linear_46_26951'
          x1='84.5'
          y1='72.5'
          x2='14'
          y2='31.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9D9D9' />
          <stop offset='1' stopColor='#D9D9D9' stopOpacity='0.31' />
        </linearGradient>
      </defs>
    </svg>
  );
}
