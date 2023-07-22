import { getColor, IIconProps } from './utils';

export const StormWeatherTwoIcon = ({
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
    <path d="M15.4401 22H13.7601L14.9067 20C15.0032 19.8482 15.068 19.6785 15.0972 19.5011C15.1264 19.3236 15.1194 19.1421 15.0766 18.9675C15.0338 18.7928 14.9561 18.6286 14.8482 18.4847C14.7403 18.3409 14.6045 18.2203 14.4488 18.1303C14.2931 18.0403 14.1208 17.9828 13.9423 17.9611C13.7638 17.9394 13.5827 17.954 13.41 18.0041C13.2373 18.0542 13.0765 18.1388 12.9373 18.2526C12.7982 18.3665 12.6834 18.5073 12.6001 18.6666L10.2934 22.6666C10.1767 22.8687 10.1151 23.0979 10.1148 23.3313C10.1144 23.5647 10.1753 23.7941 10.2914 23.9965C10.4075 24.199 10.5746 24.3674 10.7762 24.485C10.9778 24.6026 11.2067 24.6652 11.4401 24.6666H13.1334L12.0001 26.6666C11.8233 26.9743 11.7759 27.3396 11.8684 27.6821C11.9609 28.0247 12.1858 28.3165 12.4934 28.4933C12.8011 28.6701 13.1663 28.7175 13.5089 28.625C13.8515 28.5324 14.1433 28.3076 14.3201 28L16.6267 24C16.7438 23.7973 16.8054 23.5674 16.8054 23.3333C16.8054 23.0993 16.7438 22.8693 16.6267 22.6666C16.5071 22.4592 16.3337 22.2878 16.1249 22.1705C15.9161 22.0532 15.6795 21.9943 15.4401 22ZM28.9334 10.0933C28.7728 9.93553 28.5749 9.821 28.358 9.76038C28.1412 9.69976 27.9126 9.69503 27.6934 9.74664C27.4046 9.81265 27.1096 9.8484 26.8134 9.85331C25.7525 9.85331 24.7351 9.43188 23.985 8.68173C23.2348 7.93159 22.8134 6.91417 22.8134 5.85331C22.8172 5.56139 22.853 5.27077 22.9201 4.98664C22.973 4.76655 22.9691 4.53659 22.9086 4.31844C22.8482 4.10029 22.7331 3.90112 22.5744 3.73972C22.4157 3.57832 22.2184 3.45999 22.0013 3.39588C21.7842 3.33178 21.5544 3.32401 21.3334 3.37331C20.0064 3.66629 18.8028 4.36338 17.8882 5.36864C16.9737 6.37389 16.3933 7.63788 16.2267 8.98664C15.5024 8.77966 14.7534 8.67201 14.0001 8.66664C12.0785 8.66555 10.2208 9.35611 8.76657 10.6121C7.31231 11.868 6.3587 13.6054 6.08007 15.5066C5.13569 15.7653 4.29694 16.3152 3.68323 17.0781C3.06952 17.8411 2.71211 18.7782 2.66189 19.7561C2.61167 20.7339 2.87119 21.7027 3.40351 22.5245C3.93583 23.3463 4.71382 23.9793 5.62674 24.3333C5.79242 24.412 5.97255 24.4557 6.15589 24.4616C6.33922 24.4676 6.5218 24.4356 6.69222 24.3677C6.86263 24.2999 7.01721 24.1976 7.14629 24.0673C7.27536 23.9369 7.37616 23.7814 7.44238 23.6103C7.5086 23.4393 7.53881 23.2564 7.53112 23.0731C7.52343 22.8899 7.47801 22.7101 7.3977 22.5452C7.31739 22.3803 7.20392 22.2338 7.06438 22.1147C6.92484 21.9956 6.76224 21.9067 6.58674 21.8533C6.1572 21.6791 5.80151 21.361 5.58049 20.9536C5.35946 20.5461 5.28683 20.0746 5.37502 19.6195C5.4632 19.1644 5.70671 18.7541 6.06392 18.4587C6.42114 18.1633 6.86987 18.0012 7.33341 18C7.68703 18 8.02617 17.8595 8.27622 17.6094C8.52627 17.3594 8.66674 17.0203 8.66674 16.6666C8.66674 15.2522 9.22864 13.8956 10.2288 12.8954C11.229 11.8952 12.5856 11.3333 14.0001 11.3333C15.0347 11.3325 16.0463 11.6387 16.9067 12.2133C17.876 12.8509 18.6109 13.7871 19.0001 14.88C19.0763 15.1091 19.2133 15.3132 19.3965 15.4706C19.5796 15.6279 19.8021 15.7325 20.0401 15.7733C20.73 15.8955 21.3583 16.2472 21.8231 16.7715C22.2879 17.2957 22.5618 17.9617 22.6004 18.6612C22.639 19.3608 22.44 20.0528 22.0357 20.625C21.6315 21.1972 21.0457 21.616 20.3734 21.8133C20.0198 21.861 19.6996 22.0473 19.4833 22.3311C19.267 22.6149 19.1723 22.973 19.2201 23.3266C19.2678 23.6803 19.4541 24.0004 19.7379 24.2167C20.0217 24.433 20.3798 24.5277 20.7334 24.48C20.8526 24.4994 20.9742 24.4994 21.0934 24.48C22.3154 24.1433 23.3927 23.4139 24.1589 22.4043C24.9252 21.3946 25.3379 20.1608 25.3334 18.8933C25.3386 17.9642 25.1142 17.0481 24.6801 16.2266C25.8251 15.9069 26.8623 15.2832 27.6815 14.4217C28.5008 13.5601 29.0716 12.493 29.3334 11.3333C29.3784 11.1097 29.3652 10.8782 29.2952 10.6611C29.2252 10.444 29.1006 10.2485 28.9334 10.0933ZM22.8134 13.8533C22.627 13.8684 22.4398 13.8684 22.2534 13.8533C21.9623 13.6538 21.6545 13.4798 21.3334 13.3333C20.7869 12.1358 19.9534 11.0916 18.9067 10.2933C18.9067 10.1333 18.9067 9.95997 18.9067 9.79997C18.9067 9.22221 19.0318 8.6513 19.2735 8.12651C19.5152 7.60172 19.8677 7.13552 20.3067 6.75997C20.5132 8.18245 21.1739 9.5001 22.1902 10.5165C23.2066 11.5329 24.5243 12.1935 25.9467 12.4C25.5662 12.8609 25.0873 13.2308 24.545 13.4823C24.0028 13.7338 23.4111 13.8606 22.8134 13.8533Z" />
  </svg>
);
