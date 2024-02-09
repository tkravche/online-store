import { FC } from 'react';
import { PaginationItem, Typography } from '@mui/material';

import { Card } from '../../Card';
import { ICardProps, IProductsGalleryProps } from '@/types';
import {
  StyledArticles,
  StyledPagination,
} from '@/theme/styles/components/StyledCatalog';

export const ProductsGallery: FC<IProductsGalleryProps> = ({
  pageSize,
  handlePageChange,
  page,
  articles,
  totalItems,
}) => {
 
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <>
      {!articles?.length && (
        <Typography component="p" sx={{ width: '952px', textAlign: 'center' }}>
          Sorry, there are no products corresponding to these filter values.
        </Typography>
      )}
      <StyledArticles>
        {articles?.map((item: ICardProps) => <Card key={item.id} {...item} />)}
      </StyledArticles>
      {articles?.length > 0 && (
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          renderItem={item => (
            <PaginationItem
              component="div"
              {...item}
              onClick={e => handlePageChange(e, item.page)}
            />
          )}
          variant="outlined"
          shape="rounded"
        />
      )}
    </>
  );
};
