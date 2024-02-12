import { useLoadProducts } from '@/hooks/useLoadProducts';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const SkateboardsSection = () => {
  const { errorProducts, isLoadingProducts, loadProducts, responseProducts } =
    useLoadProducts('skateboard');

  const retrieveContent = useMemo(() => {
    if (errorProducts) {
      return;
    }

    if (isLoadingProducts || !responseProducts) {
      return <Loading />;
    }

    return (
      <ProductSection
        data={responseProducts?.data.items}
        title={'Skateboards'}
      />
    );
  }, [errorProducts, isLoadingProducts, responseProducts]);

  useEffect(() => {
    if (!responseProducts && errorProducts === null) {
      loadProducts().catch(e => console.log('Skateboard', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
