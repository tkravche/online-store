import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const DotIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      className={combineClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.07501 11.2631C11.792 9.5465 12.6167 5.93053 10.917 3.18659C9.21719 0.442654 5.63667 -0.390178 2.91964 1.32641C0.202598 3.043 -0.622073 6.65897 1.07769 9.40291C2.77745 12.1468 6.35797 12.9797 9.07501 11.2631Z" />
    </svg>
  );
};
