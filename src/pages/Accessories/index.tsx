import { FC } from 'react';
import { Catalog } from '@/components/Catalog';

export const Accessories: FC = () => {
  return (
    <>
      <Catalog categoryForPage={'accessory'} />
    </>
  );
};
