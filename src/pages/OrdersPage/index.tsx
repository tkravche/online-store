import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Order } from '@/components/Order';
import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import { useAppSelector } from '@/hooks';
import { selectOrders } from '@/lib/otherRedux/selectors';
import {
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledOrdersSection,
} from '@/theme/styles/components/StyledOrders';
import {
  StyledAllLink,
  StyledHistoryAllLinks,
  StyledLink,
} from '@/theme/styles/components/StyledOrder';

export const OrdersPage: FC = () => {
  const orders = useAppSelector(selectOrders);
  
  const ordersSorted = [...orders]?.sort((a: any, b: any) => {
    return b.id - a.id;
  });
  const ordersFiltered = ordersSorted?.filter(
    (item: any) => item.status !== 'CENCELED' && item.status !== 'RECEIVED'
  );

  return (
    <>
      <StyledOrdersSection>
        <Typography
          variant="h1"
          component="h1"
          className="line-clamp-1"
          marginBottom="24px"
        >
          Orders
        </Typography>
        {!ordersFiltered?.length ? (
          <StyledNoCartItemsWrapper>
            <StyledNoCartItems>
              You have no ordered products yet.
            </StyledNoCartItems>

            <NavLink to="/online-store/catalog">
              <Button variant="contained">View the catalog</Button>
            </NavLink>
          </StyledNoCartItemsWrapper>
        ) : (
          ordersFiltered?.map((item: any) => <Order key={item.id} {...item} />)
        )}
        <StyledHistoryAllLinks>
          <StyledLink>
            <Link to="/online-store/profile/orders/history">
              Orders history
            </Link>
          </StyledLink>
          <StyledAllLink>
            <Link to="/online-store/catalog">
              Back to the catalog
              {getIcon(EnumIcons.arrowLong)}
            </Link>
          </StyledAllLink>
        </StyledHistoryAllLinks>
      </StyledOrdersSection>
    </>
  );
};
