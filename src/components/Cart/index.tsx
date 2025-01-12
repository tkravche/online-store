import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { Badge, ListItemText, TextField, Typography } from '@mui/material';

import {
  selectTemporaryCart,
  selectCurrentUserCart,
  selectIsLogged,
  selectCurrentUser,
} from '@/lib/otherRedux/selectors';
import { CartItem } from './CartItem';
import {
  StyledCartItemsWrapper,
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledPriceTotal,
  StyledSaleTotal,
  StyledTotal,
  StyledTotals,
  StyledCartSection,
  StyledCartLeftWrapper,
  StyledCartItemsContainer,
  StyledButtons,
  StyledPromocode,
  StyledDeliveryDetails,
  StyledTotalsBox,
  StyledDeliveryList,
  StyledDeliveryListItem,
} from '@/theme/styles/components/StyledCart';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';
import { StyledAllLink } from '@/theme/styles/components/StyledFavorites';
import { createOrderThunk } from '@/lib/otherRedux/thunks/user';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate=useNavigate();
  let cart;
  const cartTemporary = useAppSelector(selectTemporaryCart);
  const cartCurrentUser = useAppSelector(selectCurrentUserCart);
  const isLogged = useAppSelector(selectIsLogged);
  const currentUser = useAppSelector(selectCurrentUser)?.address;

  const badgeQuantityFromCart = cartCurrentUser.length;
  const badgeQuantityTemporary = cartTemporary.length;
  const badgeQuantity = isLogged
    ? badgeQuantityFromCart
    : badgeQuantityTemporary;

  if (isLogged) {
    cart = cartCurrentUser;
  } else {
    cart = cartTemporary;
  }

  const priceTotal = Math.ceil(
    cart?.reduce((acc: any, item: any) => {
      return acc + item.quantity * item.price;
    }, 0)
  );
  const discountTotal =
    cart?.reduce((acc: any, item: any) => {
      return (
        acc + item.quantity * (isNaN(item?.sale?.newPrise) ? 0 : item?.price)
      );
    }, 0) -
    cart?.reduce((acc: any, item: any) => {
      return (
        acc +
        item.quantity * (isNaN(item?.sale?.newPrise) ? 0 : item?.sale?.newPrise)
      );
    }, 0);
  const roundedDiscountTotal = Math.ceil(discountTotal);
  const total = Math.ceil(priceTotal - discountTotal);

  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  const data = {
    addition: ':)',
    street: currentUser?.street,
    city: currentUser?.city,
    country: currentUser?.country,
    postCode: currentUser?.postCode,
  };
  const handleClick = () => {
    dispatch(createOrderThunk(data));
    navigate('/online-store/profile/orders');
  };

  return (
    <StyledCartSection>
      <Badge badgeContent={badgeQuantity} color="error" overlap="rectangular">
        <Typography variant="h1" component="h1" className="line-clamp-1">
          Cart
        </Typography>
      </Badge>
      {!cart?.length ? (
        <StyledNoCartItemsWrapper>
          <StyledNoCartItems>
            There are no products in your shopping cart yet.
          </StyledNoCartItems>
          <NavLink to="/online-store/catalog">
            <Button variant="contained">View the catalog</Button>
          </NavLink>
        </StyledNoCartItemsWrapper>
      ) : (
        <>
          <StyledCartLeftWrapper>
            <StyledCartItemsContainer>
              <StyledCartItemsWrapper>
                {!isLogged
                  ? cartTemporary?.map((item: any) => (
                    <CartItem key={item.id} {...item} />
                  ))
                  : cartCurrentUser?.map((item: any) => (
                    <CartItem
                      key={item.article.id}
                      {...item.article}
                      quantity={item.quantity}
                      url={item.article.images[0].url}
                    />
                  ))}
              </StyledCartItemsWrapper>
            </StyledCartItemsContainer>
            <StyledTotals>
              <StyledTotalsBox>
                <Typography
                  variant="h2"
                  component="h2"
                  className="line-clamp-1"
                  mb={3}
                >
                  Order Summary
                </Typography>
                <StyledPromocode>
                  <Typography component="p" variant="body1">
                    Promocode
                  </Typography>
                  {/* <form onSubmit={handleSubmit(handleSendSubmit as any)}> */}
                  <TextField
                    placeholder="Enter a promo code"
                    {...register('promocode')}
                  />
                  {/* </form> */}
                </StyledPromocode>
                <StyledPriceTotal>
                  <Typography variant="body1">Price</Typography>
                  <Typography variant="body1" sx={{ color: '#878D99' }}>
                    ${priceTotal}
                  </Typography>
                </StyledPriceTotal>
                <StyledSaleTotal>
                  <Typography variant="body1">Sale</Typography>
                  <Typography variant="body1" sx={{ color: '#878D99' }}>
                    ${roundedDiscountTotal}
                  </Typography>
                </StyledSaleTotal>
                <StyledTotal>
                  <Typography variant="body1">Total</Typography>
                  <Typography variant="newPrice">${total}</Typography>
                </StyledTotal>
                <StyledButtons>
                  <Button onClick={handleClick} variant="contained">
                    Confirm
                  </Button>
                </StyledButtons>
              </StyledTotalsBox>
              <StyledDeliveryDetails>
                <StyledDeliveryList>
                  <StyledDeliveryListItem disablePadding>
                    {getIcon(EnumIcons.dot)}
                    <ListItemText
                      primary="fast delivery — 1-5 days*"
                      sx={{ fontSize: '14px' }}
                    />
                  </StyledDeliveryListItem>
                  <StyledDeliveryListItem disablePadding>
                    {getIcon(EnumIcons.dot)}
                    <ListItemText primary="$20 one price for delivery" />
                  </StyledDeliveryListItem>
                  <StyledDeliveryListItem disablePadding>
                    {getIcon(EnumIcons.dot)}
                    <ListItemText primary="free shipping from $1000" />
                  </StyledDeliveryListItem>
                </StyledDeliveryList>
                <Typography
                  component="p"
                  sx={{
                    fontSize: '10px',
                    lineHeight: '140%',
                    paddingLeft: '8px',
                  }}
                >
                  * Delivery terms depending on the destination and the selected
                  shipping method
                </Typography>
              </StyledDeliveryDetails>
            </StyledTotals>
          </StyledCartLeftWrapper>
        </>
      )}
      <StyledAllLink>
        <Link to="/online-store/catalog">
          Back to the catalog
          {getIcon(EnumIcons.arrowLong)}
        </Link>
      </StyledAllLink>
    </StyledCartSection>
  );
};
