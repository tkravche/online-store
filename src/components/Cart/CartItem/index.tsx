import { FC } from 'react';
import { Typography } from '@mui/material';
import Image from 'react-image-webp';
import { toast } from 'react-toastify';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons, ICartItemProps } from '@/types';
import {
  addItemToTemporaryCart,
  removeItemFromTemporaryCart,
} from '@/lib/otherRedux/slice/user';
import {
  StyledCartItemActions,
  StyledCartItemInfo,
  StyledCartItemWrapper,
  StyledCartPrices,
  StyledCheckbox,
  StyledFormControlLabel,
  StyledIconButton,
  StyledImageWrapper,
  StyledMinus,
  StyledPlus,
  StyledProductLink,
  StyledQuantity,
  StyledQuantityAndPricesWrapper,
  StyledQuantityButtons,
  StyledQuantityNumber,
} from '@/theme/styles/components/StyledCart';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  selectCurrentUserCart,
  selectFavorites,
  selectIsLogged,
} from '@/lib/otherRedux/selectors';
import {
  addItemToCartThunk,
  addToFavoritesThunk,
  removeFromFavoritesThunk,
  removeItemFromCartThunk,
} from '@/lib/otherRedux/thunks/user';

export const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  url,
  quantity,
  price,
  sale,
}) => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectIsLogged);
  const newPrice = sale?.newPrise ?? 0;
  const item = { id, name, url, price, sale: newPrice };
  const article = id;
  const changeQuantity = (item: any, quantity: any) => {
    if (!isLogged) {
      dispatch(addItemToTemporaryCart({ ...item, quantity }));
    } else {
      dispatch(addItemToCartThunk({ article, quantity }));
    }
  };

  const removeItem = (id: any) => {
    dispatch(removeItemFromTemporaryCart(id));
  };

  const deleteInfo = {
    quantity: quantity,
    article: id,
  };

  const handleDeleteClick = () => {
    if (isLogged) {
      dispatch(removeItemFromCartThunk(deleteInfo));
    } else {
      removeItem(id);
    }
  };

  //Favorites
  const favoriteItems = useAppSelector(selectFavorites);
  const isFavorite = favoriteItems?.some((item: any) => item.id === id);
  const handleFavoritesChange = () => {
    if (!isLogged) {
      toast.info('You need to be logged in to like!', {});
    } else {
      if (!isFavorite) {
        dispatch(addToFavoritesThunk({ id }));
      } else {
        dispatch(removeFromFavoritesThunk({ id }));
      }
    }
  };

  return (
    <>
      <StyledCartItemWrapper>
        <StyledImageWrapper>
          <Image src={url} webp={url} alt={name} />
        </StyledImageWrapper>
        <StyledCartItemInfo>
          <StyledProductLink to={`/online-store/${id}`}>
            <Typography
              variant="body1"
              component="h2"
              className="line-clamp-1"
              mb={1}
              sx={{ width: '85%' }}
            >
              {name}
            </Typography>
          </StyledProductLink>

          <StyledQuantityAndPricesWrapper>
            <StyledQuantity>
              <Typography
                variant="body2"
                component="h3"
                className="line-clamp-1"
                mr={1}
                sx={{ color: '#878D99' }}
              >
                Quantity
              </Typography>
              <StyledQuantityButtons>
                <StyledMinus>
                  <button
                    type="button"
                    disabled={quantity === 1}
                    onClick={() =>
                      changeQuantity(item, Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </button>
                </StyledMinus>
                <StyledQuantityNumber>{quantity}</StyledQuantityNumber>
                <StyledPlus
                  onClick={() =>
                    changeQuantity(item, Math.max(1, quantity + 1))
                  }
                >
                  <span>+</span>
                </StyledPlus>
              </StyledQuantityButtons>
            </StyledQuantity>
            <StyledCartPrices>
              <Typography variant="newPrice" component="span">
                ${!sale?.newPrise ? price : sale?.newPrise}
              </Typography>
              {sale?.newPrise ? (
                <Typography variant="oldPrice" component="span">
                  ${price}
                </Typography>
              ) : (
                <Typography
                  variant="oldPrice"
                  component="span"
                  sx={{ height: '20px' }}
                ></Typography>
              )}
            </StyledCartPrices>
          </StyledQuantityAndPricesWrapper>
          <StyledCartItemActions>
            <StyledFormControlLabel
              control={
                <StyledCheckbox
                  icon={getIcon(EnumIcons.heart)}
                  checkedIcon={getIcon(EnumIcons.heart)}
                  checked={isFavorite}
                  onChange={handleFavoritesChange}
                />
              }
              label="Favourite"
            />
            <StyledIconButton onClick={handleDeleteClick}>
              {getIcon(EnumIcons.delete)}
              <span>Delete</span>
            </StyledIconButton>
          </StyledCartItemActions>
        </StyledCartItemInfo>
      </StyledCartItemWrapper>
    </>
  );
};
