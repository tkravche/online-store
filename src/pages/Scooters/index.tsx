import { FC } from 'react';
import { Catalog } from '@/components/Catalog';


export const Scooters: FC = () => {
  return (
    <>
      <Catalog categoryForPage={'scooter'} />
    </>
  );
};
