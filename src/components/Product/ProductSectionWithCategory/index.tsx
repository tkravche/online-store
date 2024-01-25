import { FC, useEffect, useMemo } from 'react';

import { useLoadProducts } from '@/hooks/useLoadProducts';
import { Loading } from '@/components/Loading';
import { ProductSectionWithCategory } from './ProductSectionWithCategory';

interface ICategoryProps {
  category: string;
}

export const ProductSectionByCategory: FC<ICategoryProps> = ({ category }) => {
  const { errorProducts, isLoadingProducts, loadProducts, responseProducts } =
    useLoadProducts(category);

  const retrieveContent = useMemo(() => {
    if (errorProducts) {
      return;
    }

    if (isLoadingProducts || !responseProducts) {
      return <Loading />;
    }

    return (
      <ProductSectionWithCategory
        data={responseProducts?.data.items}
        category={category}
      />
    );
  }, [errorProducts, responseProducts]);

  useEffect(() => {
    if (!responseProducts && errorProducts === null) {
      loadProducts().catch(e => console.log('ProductSectionWithCategory', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
