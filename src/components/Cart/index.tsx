import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCart } from '@/lib/otherRedux/selectors';
import { addItemToCart } from '@/lib/otherRedux/slice/user';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  Breadcrumbs,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { EnumIcons, ICartItemProps } from '@/types';
import { CartItem } from './CartItem';
import {
  StyledCartBottom,
  StyledCartDialog,
  StyledCartItemsWrapper,
  StyledCatalogLink,
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledDialogActions,
  StyledContinueLink,
  StyledPriceTotal,
  StyledSaleTotal,
  StyledTotal,
  StyledTotals,
  StyledCol1,
  StyledCol2,
  StyledCartSection,
  StyledCartWrapper,
  StyledCartRight,
} from '@/theme/styles/components/StyledCart';
import { NavLink, Outlet } from 'react-router-dom';
import Link from '@mui/material/Link';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { MailIcon } from '@/theme/icons/MailIcon';
import { getIcon } from '@/helpers/getIcon';

export const Cart = () => {
  const cart = useSelector(selectCart);
  const priceTotal = cart?.reduce((acc: any, item: any) => {
    return acc + item.quantity * item.price;
  }, 0);
  const saleTotal = cart?.reduce((acc: any, item: any) => {
    return acc + item.quantity * (isNaN(item.sale) ? 0 : item.sale);
  }, 0);
  const saleTotalChecked = isNaN(saleTotal) ? 0 : saleTotal;
  const total = priceTotal + saleTotalChecked;

  return (
    <>
      {!cart?.length ? (
        <StyledNoCartItemsWrapper>
          <Typography variant="h1" component="h3" className="line-clamp-1">
            Cart
          </Typography>
          <StyledNoCartItems>
            There are no products in your shopping cart yet.
          </StyledNoCartItems>
          {/* <StyledCatalogLink>
              <Link to="/online-store">View the catalog</Link>
            </StyledCatalogLink> */}
        </StyledNoCartItemsWrapper>
      ) : (
        <>
          <StyledCartItemsWrapper>
            <Typography variant="h1" component="h3" className="line-clamp-1">
              Cart
            </Typography>
            {cart?.map((item: any) => <CartItem key={item.id} {...item} />)}
          
          </StyledCartItemsWrapper>
        </>
      )}
    </>
  );
};
