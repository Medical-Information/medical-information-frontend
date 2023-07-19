import React from 'react';
import { getColor, IIconProps } from './utils';

export const MoonWithWindIcon = ({
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
    <path d="M15.9999 25.3333H9.33324C8.97962 25.3333 8.64048 25.4738 8.39043 25.7239C8.14038 25.9739 7.99991 26.3131 7.99991 26.6667C7.99991 27.0203 8.14038 27.3594 8.39043 27.6095C8.64048 27.8595 8.97962 28 9.33324 28H15.9999C16.3521 28.0047 16.6885 28.1466 16.9376 28.3957C17.1866 28.6447 17.3286 28.9812 17.3332 29.3333C17.3332 29.687 17.4737 30.0261 17.7238 30.2762C17.9738 30.5262 18.313 30.6667 18.6666 30.6667C19.0202 30.6667 19.3593 30.5262 19.6094 30.2762C19.8594 30.0261 19.9999 29.687 19.9999 29.3333C19.9988 28.2728 19.577 27.2561 18.8271 26.5062C18.0772 25.7563 17.0604 25.3345 15.9999 25.3333ZM18.6666 12C18.9303 12 19.1881 11.9218 19.4073 11.7753C19.6266 11.6288 19.7975 11.4206 19.8984 11.1769C19.9993 10.9333 20.0257 10.6652 19.9743 10.4066C19.9228 10.1479 19.7959 9.91034 19.6094 9.72387C19.4229 9.5374 19.1853 9.41041 18.9267 9.35896C18.6681 9.30752 18.4 9.33392 18.1563 9.43484C17.9127 9.53576 17.7045 9.70665 17.5579 9.92592C17.4114 10.1452 17.3332 10.403 17.3332 10.6667C17.3332 11.0203 17.4737 11.3594 17.7238 11.6095C17.9738 11.8595 18.313 12 18.6666 12ZM23.9999 12H26.6666C27.7271 11.9989 28.7438 11.5771 29.4937 10.8272C30.2436 10.0773 30.6654 9.06052 30.6666 8.00001C30.6666 7.64639 30.5261 7.30725 30.2761 7.0572C30.026 6.80715 29.6869 6.66668 29.3332 6.66668C28.9796 6.66668 28.6405 6.80715 28.3904 7.0572C28.1404 7.30725 27.9999 7.64639 27.9999 8.00001C27.9953 8.35219 27.8533 8.68863 27.6042 8.93767C27.3552 9.18672 27.0187 9.32869 26.6666 9.33335H23.9999C23.6463 9.33335 23.3071 9.47382 23.0571 9.72387C22.807 9.97392 22.6666 10.3131 22.6666 10.6667C22.6666 11.0203 22.807 11.3594 23.0571 11.6095C23.3071 11.8595 23.6463 12 23.9999 12ZM26.6666 20H23.7848C24.55 18.803 25.0697 17.4659 25.3137 16.0664C25.3528 15.8388 25.3321 15.6049 25.2537 15.3877C25.1752 15.1705 25.0417 14.9774 24.8663 14.8273C24.6908 14.6771 24.4794 14.5751 24.2526 14.5312C24.0259 14.4873 23.7917 14.503 23.5728 14.5768C22.7484 14.857 21.8836 14.9999 21.0129 15C18.8726 14.9992 16.82 14.1495 15.3054 12.6373C13.7907 11.1251 12.9377 9.07391 12.9335 6.93361C12.9425 6.4649 12.986 5.99749 13.0637 5.53517C13.0985 5.30903 13.0745 5.07774 12.994 4.86357C12.9134 4.64941 12.7791 4.45959 12.6039 4.3124C12.4288 4.16522 12.2186 4.06563 11.9938 4.02323C11.7689 3.98083 11.537 3.99705 11.3202 4.07032C9.77457 4.58593 8.36696 5.44744 7.20457 6.58924C6.04217 7.73103 5.15564 9.12302 4.61247 10.6592C4.0693 12.1954 3.88383 13.8352 4.07016 15.4539C4.25649 17.0726 4.80973 18.6274 5.68773 20H3.99991C3.64629 20 3.30715 20.1405 3.0571 20.3905C2.80705 20.6406 2.66657 20.9797 2.66657 21.3333C2.66657 21.687 2.80705 22.0261 3.0571 22.2762C3.30715 22.5262 3.64629 22.6667 3.99991 22.6667H10.6666C11.0202 22.6667 11.3593 22.5262 11.6094 22.2762C11.8594 22.0261 11.9999 21.687 11.9999 21.3333C11.9999 20.9797 11.8594 20.6406 11.6094 20.3905C11.3593 20.1405 11.0202 20 10.6666 20H9.10725C8.24374 19.1622 7.57933 18.1413 7.16303 17.0125C6.74673 15.8837 6.58917 14.6758 6.70196 13.478C6.81475 12.2801 7.19502 11.1229 7.81472 10.0916C8.43442 9.06038 9.27773 8.1814 10.2825 7.51955C10.4374 10.2612 11.6352 12.8396 13.6304 14.7264C15.6256 16.6131 18.267 17.6651 21.0129 17.6667C21.3643 17.6669 21.7154 17.6495 22.065 17.6146C21.6506 18.5068 21.076 19.3153 20.3696 20H15.9999C15.6463 20 15.3071 20.1405 15.0571 20.3905C14.8071 20.6406 14.6666 20.9797 14.6666 21.3333C14.6666 21.687 14.8071 22.0261 15.0571 22.2762C15.3071 22.5262 15.6463 22.6667 15.9999 22.6667H26.6666C27.0202 22.6667 27.3593 22.8072 27.6094 23.0572C27.8594 23.3073 27.9999 23.6464 27.9999 24C27.9999 24.3536 27.8594 24.6928 27.6094 24.9428C27.3593 25.1929 27.0202 25.3333 26.6666 25.3333C26.313 25.3333 25.9738 25.4738 25.7238 25.7239C25.4737 25.9739 25.3332 26.3131 25.3332 26.6667C25.3332 27.0203 25.4737 27.3594 25.7238 27.6095C25.9738 27.8595 26.313 28 26.6666 28C27.7274 28 28.7449 27.5786 29.495 26.8284C30.2451 26.0783 30.6666 25.0609 30.6666 24C30.6666 22.9391 30.2451 21.9217 29.495 21.1716C28.7449 20.4214 27.7274 20 26.6666 20ZM3.4934 25.4401C3.33175 25.5076 3.18288 25.6023 3.05329 25.7201C2.80709 25.9739 2.66853 26.3131 2.66657 26.6667C2.6643 26.8862 2.71684 27.1029 2.81945 27.297C2.92205 27.4912 3.07147 27.6566 3.25417 27.7784C3.43688 27.9002 3.64708 27.9745 3.86574 27.9946C4.0844 28.0146 4.30461 27.9798 4.50641 27.8932C4.66792 27.8255 4.81675 27.7309 4.94657 27.6133C5.07054 27.489 5.16856 27.3413 5.23494 27.1788C5.30132 27.0163 5.33473 26.8422 5.33324 26.6667C5.32803 26.3137 5.18996 25.9757 4.94657 25.72C4.75893 25.5353 4.52086 25.4102 4.2623 25.3604C4.00375 25.3106 3.73623 25.3383 3.4934 25.4401Z" />
  </svg>
);
