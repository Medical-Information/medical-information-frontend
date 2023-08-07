import { getColor, IIconProps } from './utils';

export const UpArrowLongIcon = ({
  color,
  size = '24',
  ...props
}: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289L11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071C19.3166 11.0976 18.6834 11.0976 18.2929 10.7071L13 5.41422L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V5.41422L5.70711 10.7071C5.31658 11.0976 4.68342 11.0976 4.29289 10.7071Z"
      fill={getColor(color)}
    />
  </svg>
);
