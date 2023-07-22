import { getColor, IIconProps } from './utils';

export const DiagnosticsIcon = ({
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
    <path d="M20.1101 17.49L15.0001 8.73V4H16.0001C16.2654 4 16.5197 3.89464 16.7073 3.70711C16.8948 3.51957 17.0001 3.26522 17.0001 3C17.0001 2.73478 16.8948 2.48043 16.7073 2.29289C16.5197 2.10536 16.2654 2 16.0001 2H8.00015C7.73493 2 7.48058 2.10536 7.29304 2.29289C7.1055 2.48043 7.00015 2.73478 7.00015 3C7.00015 3.26522 7.1055 3.51957 7.29304 3.70711C7.48058 3.89464 7.73493 4 8.00015 4H9.00015V8.73L3.89015 17.49C3.62469 17.9457 3.48406 18.4634 3.48244 18.9908C3.48081 19.5182 3.61825 20.0367 3.88089 20.494C4.14354 20.9514 4.52211 21.3314 4.97844 21.5958C5.43478 21.8602 5.95275 21.9996 6.48015 22H17.4801C18.0075 21.9996 18.5255 21.8602 18.9818 21.5958C19.4382 21.3314 19.8168 20.9514 20.0794 20.494C20.342 20.0367 20.4795 19.5182 20.4779 18.9908C20.4762 18.4634 20.3356 17.9457 20.0701 17.49H20.1101ZM10.8601 9.49C10.9483 9.3415 10.9966 9.17268 11.0001 9V4H13.0001V9C13.002 9.17609 13.0503 9.34857 13.1401 9.5L14.0001 11H10.0001L10.8601 9.49ZM18.3801 19.49C18.2929 19.6411 18.1676 19.7668 18.0167 19.8545C17.8659 19.9422 17.6947 19.9889 17.5201 19.99H6.52015C6.34563 19.9889 6.17443 19.9422 6.02356 19.8545C5.87269 19.7668 5.7474 19.6411 5.66015 19.49C5.57238 19.338 5.52617 19.1655 5.52617 18.99C5.52617 18.8145 5.57238 18.642 5.66015 18.49L8.83015 13H15.1801L18.3801 18.5C18.4679 18.652 18.5141 18.8245 18.5141 19C18.5141 19.1755 18.4679 19.348 18.3801 19.5V19.49ZM10.0001 15C9.80236 15 9.60902 15.0586 9.44457 15.1685C9.28013 15.2784 9.15195 15.4346 9.07627 15.6173C9.00058 15.8 8.98077 16.0011 9.01936 16.1951C9.05795 16.3891 9.15319 16.5673 9.29304 16.7071C9.43289 16.847 9.61107 16.9422 9.80506 16.9808C9.99904 17.0194 10.2001 16.9996 10.3828 16.9239C10.5656 16.8482 10.7217 16.72 10.8316 16.5556C10.9415 16.3911 11.0001 16.1978 11.0001 16C11.0001 15.7348 10.8948 15.4804 10.7073 15.2929C10.5197 15.1054 10.2654 15 10.0001 15ZM14.0001 16C13.8024 16 13.609 16.0586 13.4446 16.1685C13.2801 16.2784 13.152 16.4346 13.0763 16.6173C13.0006 16.8 12.9808 17.0011 13.0194 17.1951C13.0579 17.3891 13.1532 17.5673 13.293 17.7071C13.4329 17.847 13.6111 17.9422 13.8051 17.9808C13.999 18.0194 14.2001 17.9996 14.3828 17.9239C14.5656 17.8482 14.7217 17.72 14.8316 17.5556C14.9415 17.3911 15.0001 17.1978 15.0001 17C15.0001 16.7348 14.8948 16.4804 14.7073 16.2929C14.5197 16.1054 14.2654 16 14.0001 16Z" />
  </svg>
);
