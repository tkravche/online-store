import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const SettingIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M12 15.2788C12.7956 15.2788 13.5587 14.9627 14.1213 14.4001C14.6839 13.8375 15 13.0745 15 12.2788C15 11.4832 14.6839 10.7201 14.1213 10.1575C13.5587 9.59488 12.7956 9.27881 12 9.27881C11.2044 9.27881 10.4413 9.59488 9.87868 10.1575C9.31607 10.7201 9 11.4832 9 12.2788C9 13.0745 9.31607 13.8375 9.87868 14.4001C10.4413 14.9627 11.2044 15.2788 12 15.2788Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.622 10.6738L18.525 8.02381L20 6.27881L18 4.27881L16.265 5.76181L13.558 4.64881L12.935 2.27881H10.981L10.349 4.67981L7.704 5.79481L6 4.27881L4 6.27881L5.453 8.06781L4.373 10.7248L2 11.2788V13.2788L4.401 13.9338L5.516 16.5788L4 18.2788L6 20.2788L7.791 18.8188L10.397 19.8908L11 22.2788H13L13.604 19.8918L16.255 18.7938C16.697 19.1098 18 20.2788 18 20.2788L20 18.2788L18.516 16.5288L19.614 13.8768L22 13.2568V11.2788L19.622 10.6738Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
