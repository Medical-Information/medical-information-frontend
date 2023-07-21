import { getColor, IIconProps } from './utils';

export const HighTemperatureOneIcon = ({
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
    <path d="M17.3335 20.3733V7.33334C17.3335 6.97972 17.1931 6.64058 16.943 6.39053C16.693 6.14049 16.3538 6.00001 16.0002 6.00001C15.6466 6.00001 15.3074 6.14049 15.0574 6.39053C14.8073 6.64058 14.6669 6.97972 14.6669 7.33334V20.3733C14.2638 20.606 13.9287 20.9401 13.6948 21.3425C13.4609 21.7448 13.3363 22.2013 13.3335 22.6667C13.3335 23.3739 13.6145 24.0522 14.1146 24.5523C14.6147 25.0524 15.293 25.3333 16.0002 25.3333C16.7074 25.3333 17.3857 25.0524 17.8858 24.5523C18.3859 24.0522 18.6669 23.3739 18.6669 22.6667C18.6641 22.2013 18.5395 21.7448 18.3056 21.3425C18.0717 20.9401 17.7366 20.606 17.3335 20.3733ZM22.0002 17.3333V7.33334C22.0002 5.74204 21.3681 4.21592 20.2428 3.0907C19.1176 1.96548 17.5915 1.33334 16.0002 1.33334C14.4089 1.33334 12.8828 1.96548 11.7576 3.0907C10.6323 4.21592 10.0002 5.74204 10.0002 7.33334V17.3333C9.07866 18.3776 8.4457 19.6444 8.16395 21.0083C7.8822 22.3723 7.9614 23.7861 8.39374 25.1101C8.82607 26.434 9.59656 27.6222 10.629 28.557C11.6614 29.4918 12.92 30.1409 14.2802 30.44C14.8453 30.5688 15.4211 30.6447 16.0002 30.6667C17.5477 30.6739 19.0641 30.2321 20.3656 29.3949C21.667 28.5576 22.6978 27.3609 23.3328 25.9497C23.9678 24.5385 24.18 22.9734 23.9434 21.444C23.7069 19.9147 23.0319 18.4868 22.0002 17.3333ZM19.3335 26.76C18.6313 27.331 17.7952 27.7139 16.9042 27.8726C16.0131 28.0313 15.0963 27.9606 14.2401 27.6672C13.3839 27.3738 12.6164 26.8673 12.0099 26.1954C11.4035 25.5235 10.978 24.7084 10.7735 23.8267C10.5675 22.9354 10.5943 22.0061 10.8511 21.1282C11.108 20.2502 11.5863 19.4531 12.2402 18.8133C12.3662 18.6899 12.4664 18.5426 12.5351 18.3801C12.6037 18.2176 12.6395 18.0431 12.6402 17.8667V7.33334C12.6402 6.44929 12.9914 5.60144 13.6165 4.97632C14.2416 4.3512 15.0895 4.00001 15.9735 4.00001C16.8576 4.00001 17.7054 4.3512 18.3306 4.97632C18.9557 5.60144 19.3069 6.44929 19.3069 7.33334V17.92C19.3076 18.0964 19.3433 18.2709 19.412 18.4334C19.4807 18.5959 19.5809 18.7432 19.7069 18.8667C20.2519 19.3932 20.6784 20.0298 20.9581 20.7341C21.2378 21.4383 21.3642 22.1941 21.3288 22.9511C21.2935 23.708 21.0973 24.4488 20.7532 25.1239C20.4092 25.7991 19.9252 26.3932 19.3335 26.8667V26.76Z" />
  </svg>
);
