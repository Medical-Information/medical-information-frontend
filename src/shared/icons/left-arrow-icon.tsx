import { getColor, IIconProps } from './utils';

export const LeftArrowIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.33479 12.7721L12.2209 18.6902C12.3175 18.7883 12.4326 18.8663 12.5593 18.9194C12.686 18.9726 12.8219 19 12.9592 19C13.0965 19 13.2324 18.9726 13.3592 18.9194C13.4859 18.8663 13.6009 18.7883 13.6976 18.6902C13.8913 18.4939 14 18.2284 14 17.9517C14 17.675 13.8913 17.4095 13.6976 17.2133L8.54987 11.976L13.6976 6.79114C13.8913 6.59488 14 6.32941 14 6.05269C14 5.77596 13.8913 5.51049 13.6976 5.31423C13.6013 5.21526 13.4864 5.13653 13.3597 5.08259C13.2329 5.02864 13.0968 5.00058 12.9592 5C12.8216 5.00058 12.6855 5.02864 12.5588 5.08259C12.432 5.13653 12.3172 5.21526 12.2209 5.31423L6.33479 11.2323C6.22923 11.3304 6.14499 11.4495 6.08737 11.582C6.02975 11.7145 6 11.8575 6 12.0022C6 12.1469 6.02975 12.2899 6.08737 12.4224C6.14499 12.5549 6.22923 12.674 6.33479 12.7721Z" />
  </svg>
);
