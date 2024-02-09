import { FC, useState } from 'react';
import { ProductsGallery } from '@/components/Catalog/ProductsGallery';
import { useAppSelector } from '@/hooks';
import { selectFoundArticles, selectFoundTotalItems } from '@/lib/otherRedux/selectors';
import { StyledSearchSection } from '@/theme/styles/components/StyledSearch';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';

export const SearchPage: FC = () => {
  const [page, setPage] = useState(1);
  const foundArticles = useAppSelector(selectFoundArticles);
  const totalFoundItems = useAppSelector(selectFoundTotalItems);
  const handlePageChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };
  return (
    <StyledSearchSection>
      <StyledContainer>
        <ProductsGallery
          totalItems = {totalFoundItems}
          handlePageChange={handlePageChange}
          page={page}
          pageSize={8}
          articles={foundArticles}
        />
      </StyledContainer>
    </StyledSearchSection>
  );
};
