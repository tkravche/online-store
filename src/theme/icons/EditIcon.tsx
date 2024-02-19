import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const EditIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={combineClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 21H21M12.222 5.828L15.05 3L20 7.95L17.172 10.778M12.222 5.828L6.615 11.435C6.42745 11.6225 6.32206 11.8768 6.322 12.142V16.678H10.858C11.1232 16.6779 11.3775 16.5725 11.565 16.385L17.172 10.778M12.222 5.828L17.172 10.778"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

