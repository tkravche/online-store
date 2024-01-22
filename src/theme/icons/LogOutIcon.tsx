import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const LogOutIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M12 12.2788H19M19 12.2788L16 15.2788M19 12.2788L16 9.27881M19 6.27881V5.27881C19 4.74838 18.7893 4.23967 18.4142 3.86459C18.0391 3.48952 17.5304 3.27881 17 3.27881H7C6.46957 3.27881 5.96086 3.48952 5.58579 3.86459C5.21071 4.23967 5 4.74838 5 5.27881V19.2788C5 19.8092 5.21071 20.3179 5.58579 20.693C5.96086 21.0681 6.46957 21.2788 7 21.2788H17C17.5304 21.2788 18.0391 21.0681 18.4142 20.693C18.7893 20.3179 19 19.8092 19 19.2788V18.2788"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

