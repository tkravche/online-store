import { useLoadBestSellerProduct } from '@/hooks/useLoadBestSellerProduct';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const BestSellerSection = () => {
  const {
    errorBestSeller,
    responseBestSeller,
    loadBestSeller,
    isLoadingBestSeller,
  } = useLoadBestSellerProduct();

  const retrieveContent = useMemo(() => {
    if (errorBestSeller) {
      return null;
    }

    if (isLoadingBestSeller || !responseBestSeller) {
      return (
        <StyledContainer>
          <Loading />
        </StyledContainer>
      );
    }

    return (
      <ProductSection
        data={responseBestSeller?.data.items}
        title={'Sale'}
      />
    );
  }, [responseBestSeller, errorBestSeller]);

  useEffect(() => {
    if (!responseBestSeller && errorBestSeller === null) {
      loadBestSeller().catch(e => console.log('Sale exception', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
