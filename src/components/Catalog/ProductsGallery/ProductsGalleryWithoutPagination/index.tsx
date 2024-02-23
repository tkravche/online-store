import { FC } from 'react';
import { Typography } from '@mui/material';

import { ICardProps, IProductsGalleryWihoutPaginationProps } from '@/types';
import { StyledArticles } from '@/theme/styles/components/StyledCatalog';
import { Card } from '@/components/Card';

export const ProductsGalleryWithoutPagination: FC<
  IProductsGalleryWihoutPaginationProps
> = ({ articles }) => {
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
    </>
  );
};
