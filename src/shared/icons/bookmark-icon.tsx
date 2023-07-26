import { getColor, IIconProps } from './utils';

export const BookmarkIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9243 4.41833C13.3312 3.9836 10.6691 3.9836 8.07598 4.41833C7.58798 4.50014 7.20039 4.87507 7.10311 5.35801C6.21803 9.75199 6.16974 14.2735 6.96077 18.6854L7.12432 19.5976L10.7948 16.1106C11.4703 15.4689 12.53 15.4689 13.2055 16.1106L16.876 19.5976L17.0395 18.6854C17.8306 14.2735 17.7823 9.75199 16.8972 5.35801C16.7999 4.87507 16.4123 4.50014 15.9243 4.41833ZM7.82797 2.93898C10.5853 2.47672 13.415 2.47672 16.1723 2.93898C17.2716 3.12326 18.1472 3.96707 18.3677 5.06181C19.29 9.64072 19.3403 14.3525 18.516 18.9501L18.2945 20.1854C18.1086 21.2223 16.8446 21.6367 16.0809 20.9112L12.1723 17.1981C12.0759 17.1064 11.9245 17.1064 11.828 17.1981L7.91944 20.9112C7.15574 21.6367 5.8917 21.2223 5.70579 20.1854L5.48431 18.9501C4.65999 14.3525 4.71032 9.64073 5.63265 5.06181C5.85316 3.96707 6.72875 3.12326 7.82797 2.93898Z"
    />
    <path
      fill="none"
      d="M8.07598 4.41833C10.6691 3.9836 13.3312 3.9836 15.9243 4.41833C16.4123 4.50014 16.7999 4.87507 16.8972 5.35801C17.7823 9.75199 17.8306 14.2735 17.0395 18.6854L16.876 19.5976L13.2055 16.1106C12.53 15.4689 11.4703 15.4689 10.7948 16.1106L7.12432 19.5976L6.96077 18.6854C6.16974 14.2735 6.21803 9.75199 7.10311 5.35801C7.20039 4.87507 7.58798 4.50014 8.07598 4.41833Z"
    />
  </svg>
);
