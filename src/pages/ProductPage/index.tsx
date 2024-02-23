import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Product } from '@/components/Product';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  
  return (
    <>
      <Product id={productId} />
    </>
  );
};
