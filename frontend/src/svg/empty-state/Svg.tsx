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
    height={96}
    viewBox='0 0 119 96'
    fill='none'
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M79.63 26.63c-8.37 0-16.86-.33-24.82-2.55-7.96-2.22-14.94-6.37-21.37-11.23-4.18-3.17-8-5.68-13.42-5.3a24.75 24.75 0 0 0-14.49 5.66c-6.91 6-5.86 17.23-3.1 25.1C6.58 50.16 19.22 58.39 30 63.76c12.41 6.2 26 9.8 39.71 11.87 12 1.82 27.37 3.14 37.75-4.68 9.54-7.19 12.16-23.6 9.82-34.69a13.65 13.65 0 0 0-4.95-8.26c-6.69-4.89-16.69-1.62-24.21-1.46-2.8.01-5.64.08-8.49.09Z'
    />
    <path
      stroke='#FAAD00'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M103.32 71.04v4.29M101.17 73.18h4.29M28.47 12.51v4.3M26.33 14.66h4.29'
    />
    <path
      fill='#FAAD00'
      d='M100.46 12.9a.98.98 0 1 0 0-1.96.98.98 0 0 0 0 1.96ZM31.81 44.23a.98.98 0 1 0 0-1.96.98.98 0 0 0 0 1.96Z'
    />
    <path
      fill='#fff'
      d='M63.37 95.04c20.241 0 36.65-1.02 36.65-2.28 0-1.26-16.409-2.28-36.65-2.28s-36.65 1.02-36.65 2.28c0 1.26 16.409 2.28 36.65 2.28Z'
    />
    <path
      fill='#2BB8B8'
      d='M79.64 71.84 61.85 61.16a3.909 3.909 0 0 0-4 0l-17.38 10.6a3.9 3.9 0 0 1-5.93-3.33V4.73a3.9 3.9 0 0 1 3.9-3.9h43.25a3.91 3.91 0 0 1 3.9 3.9v63.76a3.899 3.899 0 0 1-5.95 3.35Z'
    />
    <path
      fill='#fff'
      stroke='#2BB8B8'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M87.23 79.62 68.66 68.47a4.08 4.08 0 0 0-4.22 0L46.3 79.55a4.08 4.08 0 0 1-6.2-3.48V9.56a4.08 4.08 0 0 1 4.08-4.07h45.15a4.07 4.07 0 0 1 4.07 4.07v66.57a4.07 4.07 0 0 1-6.17 3.49Z'
    />
    <path
      fill='#CFFAFA'
      d='M66.75 52.02c10.333 0 18.71-8.377 18.71-18.71S77.083 14.6 66.75 14.6s-18.71 8.377-18.71 18.71 8.377 18.71 18.71 18.71Z'
    />
    <path
      fill='#fff'
      stroke='#2BB8B8'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m67.71 20.12 3.44 7 7.68 1.12a1.07 1.07 0 0 1 .59 1.82l-5.56 5.42 1.31 7.65a1.07 1.07 0 0 1-1.55 1.13l-6.87-3.66-6.87 3.62a1.07 1.07 0 0 1-1.55-1.13l1.32-7.65L54.09 30a1.06 1.06 0 0 1 .59-1.82l7.68-1.12 3.44-7a1.07 1.07 0 0 1 1.91.06Z'
    />
  </svg>
)
export default Svg
