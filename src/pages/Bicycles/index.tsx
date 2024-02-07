import { Catalog } from '@/components/Catalog';
import { FC } from 'react';


export const Bicycles: FC = () => {
  return (
    <>
      <Catalog categoryForPage={'bicycle'} />
    </>
  );
};
