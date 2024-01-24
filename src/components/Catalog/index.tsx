import { FC, useEffect, useState } from 'react';
import { Breadcrumbs, Link, PaginationItem, Typography } from '@mui/material';

import { selectArticles, selectTotalPages } from '@/lib/otherRedux/selectors';
import { Card } from '../Card';
import {
  StyledArticles,
  StyledCatalog,
  StyledCatalogSection,
  StyledFilters,
  StyledPagination,
} from '@/theme/styles/components/StyledCatalog';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { getArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
import { useAppSelector } from '@/lib/redux/init/store';
import { useAppDispatch } from '@/hooks';
import { ICardProps } from '@/types';

export const Catalog: FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);

  const dispatch = useAppDispatch();
  const limit = pageSize;

  useEffect(() => {
    dispatch(getArticlesThunk({ page, limit }));
  }, [dispatch, page, limit]);

  const articles = useAppSelector(selectArticles);
  const totalPages = (Math.ceil(useAppSelector(selectTotalPages) / pageSize));

  const handlePageChange = (event: React.MouseEvent<HTMLElement>, newPage: number) => {
    setPage(newPage);
  };

  // const handlePageSizeChange = (newPageSize: any) => {
  //   setPageSize(newPageSize);
  //   setPage(1); // Reset to the first page when changing page size
  // };

  return (
    <StyledCatalogSection>
      <StyledContainer>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography
            color="text.primary"
            className="line-clamp-1"
            sx={{ textTransform: 'capitalize' }}
          >
            Catalog
          </Typography>
        </Breadcrumbs>
        <StyledCatalog>
          <StyledFilters>
            <Typography>Product filter</Typography>
          </StyledFilters>
          <StyledArticles>
            {articles?.map((item: ICardProps) => <Card key={item.id} {...item} />)}
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
          </StyledArticles>
        </StyledCatalog>
      </StyledContainer>
    </StyledCatalogSection>
  );
};
