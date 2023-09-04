import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const PassIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={combineClass}
    >
      <path
        d="M12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12C19.111 14.991 15.718 18 12 18C8.282 18 4.889 14.991 3 12C5.299 9.158 7.992 6 12 6C16.008 6 18.701 9.158 21 12Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
