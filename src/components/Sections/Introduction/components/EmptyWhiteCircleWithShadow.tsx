import type { SVGProps } from 'react';

export default function EmptyWhiteCircleWithShadow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' width='132' height='132' viewBox='0 0 132 132' fill='none'>
      <g filter='url(#filter0_d_46_26950)'>
        <circle cx='64' cy='62' r='62' fill='#D9D9D9' />
      </g>
      <defs>
        <filter
          id='filter0_d_46_26950'
          x='0'
          y='0'
          width='132'
          height='132'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='2' dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_46_26950' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_46_26950' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}
