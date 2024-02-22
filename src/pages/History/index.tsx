import { Button, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

import { getIcon } from '@/helpers/getIcon';
import { useAppSelector } from '@/hooks';
import { selectOrders } from '@/lib/otherRedux/selectors';
import {
  StyledAllLink,
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledOrdersSection,
} from '@/theme/styles/components/StyledOrders';
import { EnumIcons } from '@/types';
import { OrderHistoryItem } from '@/components/Order/OrderHistoryItem';

export const History = () => {
  const orders = useAppSelector(selectOrders);

  const ordersArchived = orders.filter(
    (item: any) => item.status === 'CENCELED' || item.status === 'RECEIVED'
  );
  console.log(ordersArchived);
  return (
    <StyledOrdersSection>
      <Typography
        variant="h1"
        component="h1"
        className="line-clamp-1"
        marginBottom="24px"
      >
        Orders History
      </Typography>
      {!ordersArchived?.length ? (
        <StyledNoCartItemsWrapper>
          <StyledNoCartItems>You have no orders history yet.</StyledNoCartItems>

          <NavLink to="/online-store/catalog">
            <Button variant="contained">View the catalog</Button>
          </NavLink>
        </StyledNoCartItemsWrapper>
      ) : (
        ordersArchived?.map((item: any) => <OrderHistoryItem key={item.id} {...item} />)
      )}
      <StyledAllLink>
        <Link to="/online-store/catalog">
          Back to the catalog
          {getIcon(EnumIcons.arrowLong)}
        </Link>
      </StyledAllLink>
    </StyledOrdersSection>
  );
};
