import { ProductsGallery } from '@/components/Catalog/ProductsGallery';
import { getIcon } from '@/helpers/getIcon';
import { useAppSelector } from '@/hooks';
import { selectFavorites } from '@/lib/otherRedux/selectors';
import { StyledFavoriteSection } from '@/theme/styles/components/StyledFavorites';
import { StyledAllLink } from '@/theme/styles/components/StyledFavorites';
import { EnumIcons } from '@/types';
import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Typography variant="h1" component="h1" className="line-clamp-1">
        Favorites
      </Typography>
{/* 
      <ProductsGallery
        page={page}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
        articles={favoriteArticles}
        totalItems={favoriteTotalItems}
      /> */}
      <StyledAllLink>
        <Link to="/online-store/catalog">
          Back to the catalog
          {getIcon(EnumIcons.arrowLong)}
        </Link>
      </StyledAllLink>
    </StyledFavoriteSection>
  );
};
