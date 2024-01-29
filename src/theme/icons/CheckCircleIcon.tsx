import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const CheckCircleIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={combineClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.666 20.8332L16.666 25.8332L28.3327 14.1665"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9997 36.6666C29.2047 36.6666 36.6663 29.2049 36.6663 19.9999C36.6663 10.7949 29.2047 3.33325 19.9997 3.33325C10.7947 3.33325 3.33301 10.7949 3.33301 19.9999C3.33301 29.2049 10.7947 36.6666 19.9997 36.6666Z"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
