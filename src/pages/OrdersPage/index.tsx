import { getIcon } from '@/helpers/getIcon';
import { StyledAllLink, StyledNoCartItems, StyledNoCartItemsWrapper, StyledOrdersSection } from '@/theme/styles/components/StyledOrders';
import { EnumIcons } from '@/types';
import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const OrdersPage: FC = () => {
  return (
    <>
      <StyledOrdersSection>
        <Typography variant="h1" component="h1" className="line-clamp-1">
          Orders
        </Typography>
        <StyledNoCartItemsWrapper>
          <StyledNoCartItems>
            You have no ordered products yet.
          </StyledNoCartItems>
          <NavLink to="/online-store/catalog">
            <Button variant="contained">View the catalog</Button>
          </NavLink>
        </StyledNoCartItemsWrapper>
        <StyledAllLink>
          <Link to="/online-store/catalog">
            Back to the catalog
            {getIcon(EnumIcons.arrowLong)}
          </Link>
        </StyledAllLink>
      </StyledOrdersSection>
    </>
  );
};
