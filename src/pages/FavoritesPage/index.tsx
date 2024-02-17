import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import { ProductsGallery } from '@/components/Catalog/ProductsGallery';
import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import { useAppSelector } from '@/hooks';
import { selectFavorites } from '@/lib/otherRedux/selectors';
import { StyledFavoriteSection, StyledNoCartItems, StyledNoCartItemsWrapper } from '@/theme/styles/components/StyledFavorites';
import { StyledAllLink } from '@/theme/styles/components/StyledFavorites';

export const FavoritesPage: FC = () => {
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const handlePageChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const favoriteArticles = useAppSelector(selectFavorites);
  const favoriteTotalItems = favoriteArticles?.length;

  return (
    <StyledFavoriteSection>
      <Typography variant="h1" component="h1" className="line-clamp-1" mb={3}>
        Favorites
      </Typography>
      {!favoriteArticles?.length ? (
        <StyledNoCartItemsWrapper>
          <StyledNoCartItems>
            Here you will find products that you mark as favorites.
          </StyledNoCartItems>
          <NavLink to="/online-store/catalog">
            <Button variant="contained">View the catalog</Button>
          </NavLink>
        </StyledNoCartItemsWrapper>) : (
        <ProductsGallery
          page={page}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
          articles={favoriteArticles}
          totalItems={favoriteTotalItems}
        />)}
      <StyledAllLink>
        <Link to="/online-store/catalog">
          Back to the catalog
          {getIcon(EnumIcons.arrowLong)}
        </Link>
      </StyledAllLink>
    </StyledFavoriteSection>
  );
};
