import * as React from 'react'
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
    width={601}
    height={1147}
    viewBox='0 0 601 1147'
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
      d='M460.889 22.546C451.246 8.878 435.659 0 418.072 0c-25.564 0-46.901 18.756-51.902 43.715-8.183-5.675-18.022-8.984-28.606-8.984-19.349 0-36.206 11.058-45.01 27.408-8.263-5.849-18.253-9.27-29.014-9.27-10.461 0-20.193 3.233-28.318 8.787-9.036-9.276-21.468-15.005-35.19-15.005-3.519 0-6.952.377-10.266 1.093C180.556 26.658 160.17 12 136.5 12c-18.738 0-35.418 9.186-46.125 23.475a33.851 33.851 0 0 0-10.861-1.78c-14.024 0-26.122 8.547-31.709 20.89a31.694 31.694 0 0 0-15.05-3.788C14.666 50.797 0 65.997 0 84.748c0 .664.018 1.324.055 1.979V1147h600V88.32c.03-.667.045-1.34.045-2.015 0-23.332-18.024-42.245-40.257-42.245-7.184 0-13.929 1.974-19.768 5.435-5.779-4.703-13.065-7.508-20.983-7.508-3.003 0-5.915.403-8.689 1.16-7.418-13.395-21.355-22.417-37.325-22.417-4.234 0-8.325.634-12.189 1.816Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgComponent
