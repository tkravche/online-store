import { Button, PaginationItem, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Order } from '@/components/Order';
import { getIcon } from '@/helpers/getIcon';
import { useAppSelector } from '@/hooks';
import { selectOrders } from '@/lib/otherRedux/selectors';
import {
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledOrdersSection,
} from '@/theme/styles/components/StyledOrders';
import { EnumIcons } from '@/types';
import {
  StyledAllLink,
  StyledHistoryAllLinks,
  StyledLink,
} from '@/theme/styles/components/StyledOrder';
import { StyledPagination } from '@/theme/styles/components/StyledCatalog';

export const OrdersPage: FC = () => {
  const [page, setPage] = useState(1);
  const orders = useAppSelector(selectOrders);
  const ordersFiltered = orders.filter(
    (item: any) => item.status !== 'CENCELED' && item.status !== 'RECEIVED'
  );
  //For Pagination
  const pageSize = 2;
  const totalItems = orders;
  console.log(totalItems)
  const handlePageChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(totalItems / pageSize);
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
