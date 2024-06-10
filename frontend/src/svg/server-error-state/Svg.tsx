import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}
const Svg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={119}
    height={98}
    viewBox='0 0 119 98'
    fill='none'
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M80.18 28.63c-8.36 0-16.86-.33-24.82-2.55C47.4 23.86 40.42 19.71 34 14.85c-4.19-3.17-8-5.68-13.43-5.3a24.75 24.75 0 0 0-14.49 5.66c-6.91 6-5.86 17.23-3.1 25.1 4.15 11.85 16.79 20.08 27.53 25.45 12.41 6.2 26 9.8 39.71 11.87 12 1.82 27.37 3.14 37.75-4.68 9.54-7.19 12.16-23.6 9.82-34.69a13.642 13.642 0 0 0-4.9-8.31c-6.7-4.89-16.69-1.62-24.22-1.46-2.8.06-5.67.13-8.49.14Z'
    />
    <path
      stroke='#FAAD00'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M31.22 28.9v4.3M29.07 31.05h4.3'
    />
    <path
      fill='#FAAD00'
      d='M57.82 10.65a.98.98 0 1 0 0-1.96.98.98 0 0 0 0 1.96ZM21.28 6.55a.98.98 0 1 0 0-1.96.98.98 0 0 0 0 1.96Z'
    />
    <path
      fill='#'
      d='M63.92 97.04c20.241 0 36.65-1.02 36.65-2.28 0-1.26-16.409-2.28-36.65-2.28s-36.65 1.02-36.65 2.28c0 1.26 16.409 2.28 36.65 2.28Z'
    />
    <path fill=' #2BB8B8' d='M48.83 31.4h-3.81v26.34h3.81V31.4Z' />
    <path
      fill=' #2BB8B8'
      d='m44.945 33.318 1.815 3.35 22.025-11.933-1.816-3.35-22.024 11.933Z'
    />
    <path
      fill='#fff'
      stroke='#54CCCC'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M43.8 55.46h5.83a11.21 11.21 0 0 1 11.21 11.21v.82H32.59v-.82A11.21 11.21 0 0 1 43.8 55.46Z'
    />
    <path
      stroke='#54CCCC'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M64.69 67.62H28.74'
    />
    <path
      fill='#fff'
      stroke='#54CCCC'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M47.16 41.1a6.61 6.61 0 1 0 0-13.22 6.61 6.61 0 0 0 0 13.22ZM83.93 59.68c-.17-.06-1.45.06-1.61 0-1.15-.43-1.56 1-2.62.41a31.09 31.09 0 0 1 21.38-57.9 32.37 32.37 0 0 1 3.72 1.14c.23.08-.33 1.32-.11 1.4L83.93 59.68Z'
    />
    <path
      fill='#CFFAFA'
      d='M103.82 36C99 48.91 91.88 58.73 86.11 61.25a6.73 6.73 0 0 1-2.46.63 4.64 4.64 0 0 1-1.9-.27 4.351 4.351 0 0 1-1.31-.77 4.167 4.167 0 0 1-.6-.59c-4-4.57-3.35-18 2-32.4 5.3-14.18 13.42-24.67 19.43-25.75.372-.077.751-.11 1.13-.1.509.01 1.012.105 1.49.28.682.26 1.295.674 1.79 1.21.535.57.98 1.217 1.32 1.92 2.69 5.69 1.62 17.77-3.18 30.59Z'
    />
    <path
      stroke='#54CCCC'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m82.43 27.24 31.24 11.41'
    />
    <path
      fill='#fff'
      stroke='#54CCCC'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M38.84 14.55a4.18 4.18 0 0 1-4.19 4.18H24.38a3 3 0 0 1 0-6c.394 0 .784.075 1.15.22a2.874 2.874 0 0 1-.06-.59 3.25 3.25 0 0 1 6.37-.88 4.07 4.07 0 0 1 2.81-1.1 4.182 4.182 0 0 1 4.19 4.17Z'
    />
  </svg>
)
export default Svg
