import { getColor, IIconProps } from './utils';

export const MoonsetIcon = ({ color, size = '32', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.6667 25.3333H10.6667C10.313 25.3333 9.97391 25.4738 9.72386 25.7239C9.47381 25.9739 9.33333 26.313 9.33333 26.6667C9.33333 27.0203 9.47381 27.3594 9.72386 27.6095C9.97391 27.8595 10.313 28 10.6667 28H14.6667C15.0203 28 15.3594 27.8595 15.6095 27.6095C15.8595 27.3594 16 27.0203 16 26.6667C16 26.313 15.8595 25.9739 15.6095 25.7239C15.3594 25.4738 15.0203 25.3333 14.6667 25.3333ZM26.6667 20H25.12C25.8871 18.8023 26.4125 17.4661 26.6667 16.0667C26.7053 15.8384 26.6837 15.604 26.6043 15.3866C26.5248 15.1692 26.39 14.9762 26.2133 14.8267C26.0341 14.6689 25.8159 14.5622 25.5813 14.5177C25.3468 14.4731 25.1046 14.4923 24.88 14.5733C24.0556 14.8539 23.1909 14.9981 22.32 15C20.1908 15.0001 18.1477 14.1598 16.6347 12.6618C15.1217 11.1637 14.2611 9.12905 14.24 6.99999C14.2521 6.55291 14.2967 6.10729 14.3733 5.66666C14.4079 5.43931 14.3832 5.20687 14.3014 4.99193C14.2196 4.77699 14.0836 4.58685 13.9067 4.43999C13.7261 4.28451 13.5072 4.18024 13.2728 4.13803C13.0383 4.09582 12.7968 4.11722 12.5733 4.19999C10.4787 4.9229 8.65874 6.27563 7.36267 8.07294C6.0666 9.87025 5.3578 12.0243 5.33333 14.24C5.33465 16.2825 5.92238 18.2817 7.02667 20H5.33333C4.97971 20 4.64057 20.1405 4.39052 20.3905C4.14048 20.6406 4 20.9797 4 21.3333C4 21.6869 4.14048 22.0261 4.39052 22.2761C4.64057 22.5262 4.97971 22.6667 5.33333 22.6667H26.6667C27.0203 22.6667 27.3594 22.5262 27.6095 22.2761C27.8595 22.0261 28 21.6869 28 21.3333C28 20.9797 27.8595 20.6406 27.6095 20.3905C27.3594 20.1405 27.0203 20 26.6667 20ZM21.7067 20H10.44C9.56996 19.1658 8.89965 18.1458 8.47917 17.0162C8.05868 15.8866 7.89888 14.6766 8.0117 13.4765C8.12453 12.2765 8.50706 11.1175 9.13072 10.086C9.75439 9.05457 10.6031 8.17739 11.6133 7.51999C11.7667 10.2626 12.9645 12.8424 14.9606 14.7295C16.9568 16.6165 19.5997 17.6675 22.3467 17.6667C22.6975 17.6865 23.0492 17.6865 23.4 17.6667C22.9795 18.5394 22.406 19.3296 21.7067 20ZM21.3333 25.3333H20C19.6464 25.3333 19.3072 25.4738 19.0572 25.7239C18.8071 25.9739 18.6667 26.313 18.6667 26.6667C18.6667 27.0203 18.8071 27.3594 19.0572 27.6095C19.3072 27.8595 19.6464 28 20 28H21.3333C21.687 28 22.0261 27.8595 22.2761 27.6095C22.5262 27.3594 22.6667 27.0203 22.6667 26.6667C22.6667 26.313 22.5262 25.9739 22.2761 25.7239C22.0261 25.4738 21.687 25.3333 21.3333 25.3333Z" />
  </svg>
);
