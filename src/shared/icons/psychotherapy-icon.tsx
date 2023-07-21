import { getColor, IIconProps } from './utils';

export const PsychotherapyIcon = ({
  color,
  size = '24',
  ...props
}: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.9491 1.99998C12.8917 2.00011 14.7678 2.70687 16.2277 3.98842C17.6875 5.26997 18.6314 7.03881 18.8831 8.96498L21.1331 12.504C21.2811 12.737 21.2511 13.084 20.9081 13.232L18.9491 14.07V17C18.9491 17.5304 18.7384 18.0391 18.3633 18.4142C17.9882 18.7893 17.4795 19 16.9491 19C16.9491 19 15.5982 18.6589 14.9501 19C14 19.5 14.9493 22 13.4493 22C11.9493 22 7.94911 22 6.94928 22C5.44928 22 5.94911 18.306 5.94911 18.306C5.94911 17.126 5.51311 16.009 4.70411 15.001C3.76181 13.8244 3.17109 12.4056 3 10.908C2.82891 9.41035 3.08443 7.89485 3.7371 6.5361C4.38977 5.17735 5.41304 4.03064 6.68901 3.2281C7.96498 2.42556 9.44173 1.99983 10.9491 1.99998ZM10.9491 3.99998C9.81869 3.99994 8.71125 4.31923 7.75437 4.92108C6.79749 5.52293 6.03009 6.38286 5.54058 7.4018C5.05108 8.42073 4.85937 9.55722 4.98756 10.6804C5.11574 11.8035 5.55859 12.8676 6.26511 13.75C7.35911 15.114 7.94911 16.667 7.94911 18.306C7.94911 18.306 8 18.5 8 19.5C8 20.5 13 20.5 13 19.5C13 18.5 12.998 17.5 13 17C13.002 16.5 15.8121 18.07 16.9491 17C18.1572 15.863 16.9491 12.752 16.9491 12.752L18.4991 12.088L16.9561 9.66298L16.8991 9.22098C16.7098 7.77689 16.0018 6.45093 14.907 5.49032C13.8123 4.5297 12.4056 4.00001 10.9491 3.99998ZM10.9491 6.99998C11.2143 6.99998 11.4687 7.10534 11.6562 7.29288C11.8438 7.48041 11.9491 7.73477 11.9491 7.99998V8.99998H12.9491C13.2143 8.99998 13.4687 9.10534 13.6562 9.29288C13.8438 9.48041 13.9491 9.73477 13.9491 9.99998C13.9491 10.2652 13.8438 10.5196 13.6562 10.7071C13.4687 10.8946 13.2143 11 12.9491 11H11.9491V12C11.9491 12.2652 11.8438 12.5196 11.6562 12.7071C11.4687 12.8946 11.2143 13 10.9491 13C10.6839 13 10.4295 12.8946 10.242 12.7071C10.0545 12.5196 9.94911 12.2652 9.94911 12V10.999L8.94911 11C8.68389 11 8.42954 10.8946 8.242 10.7071C8.05446 10.5196 7.94911 10.2652 7.94911 9.99998C7.94911 9.73477 8.05446 9.48041 8.242 9.29288C8.42954 9.10534 8.68389 8.99998 8.94911 8.99998L9.94911 8.99898V7.99998C9.94911 7.73477 10.0545 7.48041 10.242 7.29288C10.4295 7.10534 10.6839 6.99998 10.9491 6.99998Z" />
  </svg>
);
