import { FC } from 'react';
import { Catalog } from '@/components/Catalog';

export const Skateboards: FC = () => {
  return (
    <>
      <Catalog categoryForPage={'skateboard'} />
    </>
  );
};
