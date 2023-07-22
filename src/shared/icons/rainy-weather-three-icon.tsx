import { getColor, IIconProps } from './utils';

export const RainyWeatherThreeIcon = ({
  color,
  size = '32',
  ...props
}: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.7332 19.1066C14.5141 18.9605 14.2566 18.8824 13.9932 18.8824C13.7298 18.8824 13.4723 18.9605 13.2532 19.1066C13.1198 19.2133 9.99985 21.3333 9.99985 24.6666C9.99985 25.7275 10.4213 26.7449 11.1714 27.4951C11.9216 28.2452 12.939 28.6666 13.9998 28.6666C15.0607 28.6666 16.0781 28.2452 16.8283 27.4951C17.5784 26.7449 17.9998 25.7275 17.9998 24.6666C17.9998 21.3333 14.8798 19.2 14.7332 19.1066ZM13.9998 26C13.6462 26 13.3071 25.8595 13.057 25.6095C12.807 25.3594 12.6665 25.0203 12.6665 24.6666C12.7507 23.6391 13.2284 22.6838 13.9998 22C14.7713 22.6838 15.249 23.6391 15.3332 24.6666C15.3332 25.0203 15.1927 25.3594 14.9427 25.6095C14.6926 25.8595 14.3535 26 13.9998 26ZM27.9998 9.99998H26.9332C26.7953 9.4017 26.5612 8.8298 26.2398 8.30665L26.9865 7.55998C27.2049 7.30491 27.3191 6.97681 27.3061 6.64124C27.2932 6.30567 27.1541 5.98735 26.9166 5.74989C26.6791 5.51244 26.3608 5.37333 26.0252 5.36036C25.6897 5.3474 25.3616 5.46154 25.1065 5.67998L24.3598 6.42665C23.8367 6.10533 23.2648 5.87117 22.6665 5.73331V4.66665C22.6665 4.31302 22.526 3.97389 22.276 3.72384C22.0259 3.47379 21.6868 3.33331 21.3332 3.33331C20.9796 3.33331 20.6404 3.47379 20.3904 3.72384C20.1403 3.97389 19.9998 4.31302 19.9998 4.66665V5.73331C19.4051 5.86906 18.8372 6.10341 18.3198 6.42665L17.5598 5.67998C17.3048 5.46154 16.9767 5.3474 16.6411 5.36036C16.3055 5.37333 15.9872 5.51244 15.7498 5.74989C15.5123 5.98735 15.3732 6.30567 15.3602 6.64124C15.3473 6.97681 15.4614 7.30491 15.6798 7.55998L16.4265 8.31998C16.3065 8.51998 16.2132 8.74665 16.1065 8.95998C15.421 8.76647 14.7122 8.66777 13.9998 8.66665C12.0783 8.66555 10.2206 9.35611 8.76634 10.6121C7.31209 11.868 6.35847 13.6054 6.07984 15.5066C5.15136 15.7652 4.3257 16.3049 3.71629 17.0516C3.10688 17.7983 2.74362 18.7154 2.6764 19.6768C2.60919 20.6383 2.84132 21.597 3.34091 22.4212C3.84049 23.2454 4.58303 23.8948 5.46651 24.28C5.63643 24.3473 5.8171 24.3834 5.99985 24.3866C6.30811 24.3892 6.60771 24.2848 6.84768 24.0913C7.08765 23.8978 7.25316 23.6271 7.31603 23.3253C7.37891 23.0235 7.33526 22.7093 7.19253 22.436C7.0498 22.1628 6.8168 21.9474 6.53318 21.8266C6.17544 21.6743 5.87069 21.4196 5.6572 21.0946C5.4437 20.7696 5.33098 20.3888 5.33318 20C5.33318 19.4695 5.54389 18.9608 5.91896 18.5858C6.29404 18.2107 6.80275 18 7.33318 18C7.6868 18 8.02594 17.8595 8.27599 17.6095C8.52604 17.3594 8.66651 17.0203 8.66651 16.6666C8.67223 15.4076 9.12321 14.1911 9.93963 13.2326C10.756 12.2741 11.8853 11.6353 13.1274 11.4294C14.3695 11.2234 15.6444 11.4635 16.7265 12.1073C17.8086 12.751 18.6281 13.7568 19.0398 14.9466C19.1161 15.1758 19.2531 15.3799 19.4362 15.5372C19.6194 15.6946 19.8419 15.7992 20.0798 15.84C20.6991 15.9317 21.276 16.2091 21.7343 16.6357C22.1925 17.0622 22.5106 17.6178 22.6464 18.2289C22.7822 18.84 22.7293 19.478 22.4949 20.0585C22.2604 20.6389 21.8553 21.1346 21.3332 21.48C21.0361 21.6745 20.8285 21.979 20.756 22.3266C20.6835 22.6741 20.752 23.0363 20.9465 23.3333C21.141 23.6304 21.4455 23.838 21.7931 23.9105C22.1407 23.983 22.5028 23.9145 22.7998 23.72C23.9059 22.9983 24.729 21.9168 25.1298 20.6584C25.5307 19.4 25.4848 18.0418 24.9998 16.8133L25.1732 16.9866C25.4215 17.233 25.7567 17.3718 26.1065 17.3733C26.282 17.3743 26.4559 17.3407 26.6184 17.2743C26.7808 17.208 26.9286 17.1102 27.0532 16.9866C27.3015 16.7368 27.4409 16.3989 27.4409 16.0466C27.4409 15.6944 27.3015 15.3565 27.0532 15.1066L26.3065 14.36C26.6046 13.8327 26.8161 13.261 26.9332 12.6666H27.9998C28.3535 12.6666 28.6926 12.5262 28.9427 12.2761C29.1927 12.0261 29.3332 11.6869 29.3332 11.3333C29.3332 10.9797 29.1927 10.6406 28.9427 10.3905C28.6926 10.1405 28.3535 9.99998 27.9998 9.99998ZM23.5465 13.5333C23.3085 13.7543 23.0389 13.9385 22.7465 14.08C22.3138 13.7643 21.8378 13.5128 21.3332 13.3333C20.7206 11.9957 19.7577 10.8485 18.5465 10.0133C18.6922 9.67129 18.9002 9.35933 19.1598 9.09331C19.7564 8.54041 20.5398 8.23322 21.3532 8.23322C22.1666 8.23322 22.9499 8.54041 23.5465 9.09331C24.1183 9.68291 24.4381 10.472 24.4381 11.2933C24.4381 12.1147 24.1183 12.9037 23.5465 13.4933V13.5333Z" />
  </svg>
);
