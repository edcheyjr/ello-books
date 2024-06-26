import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}
const Favorite = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-loader-pinwheel'
    {...props}
  >
    <path d='M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5' />
    <path d='M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6' />
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6' />
    <circle cx='12' cy='12' r='10' />
  </svg>
)
export default Favorite
