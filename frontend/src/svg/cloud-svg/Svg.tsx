import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}
const SvgComponent = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={1200}
    height={1187}
    viewBox='0 0 1200 1187'
    fill='none'
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M921.625 43.503C902.343 17.13 871.172 0 836 0c-51.119 0-93.787 36.186-103.785 84.34C715.85 73.387 696.171 67 675 67c-38.688 0-72.394 21.33-89.999 52.871C568.481 108.594 548.511 102 527 102c-20.919 0-40.381 6.236-56.629 16.951C452.302 101.053 427.442 90 400 90c-11.838 0-23.196 2.057-33.736 5.833C352.193 64.12 320.43 42 283.5 42c-10.374 0-20.34 1.745-29.621 4.959C244.188 32.51 227.705 23 209 23c-25.717 0-47.235 17.977-52.673 42.05-26.902 1.01-49.92 17.202-60.735 40.256C86.582 100.637 76.349 98 65.5 98 29.492 98 .27 127.056.002 163H0v1024h1200V163h-.07c-1.81-43.388-37.13-78-80.43-78-14.37 0-27.86 3.811-39.54 10.49C1068.41 86.413 1053.84 81 1038 81c-6 0-11.82.778-17.37 2.238C1005.8 57.401 977.93 40 946 40a86.027 86.027 0 0 0-24.375 3.503Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgComponent
