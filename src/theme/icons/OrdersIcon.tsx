import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const OrdersIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={combineClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 6.27883H20M4 6.28883L4.01 6.27783M4 12.2888L4.01 12.2778M4 18.2888L4.01 18.2778M8 12.2788H20M8 18.2788H20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
