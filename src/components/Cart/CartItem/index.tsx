import { FC } from 'react';
import { Typography } from '@mui/material';
import Image from 'react-image-webp';
import { useDispatch } from 'react-redux';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons, ICartItemProps } from '@/types';
import { addItemToCart, removeItemFromCart } from '@/lib/otherRedux/slice/user';
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
import { Link } from 'react-router-dom';

export const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  url,
  quantity,
  price,
  sale,
}) => {
  const dispatch = useDispatch();
  const newPrice = sale?.newPrise ?? 0;
  const item = { id, name, url, price, sale: newPrice };

  const changeQuantity = (item: any, quantity: any) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id: any) => {
    dispatch(removeItemFromCart(id));
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
              {sale?.newPrise && (
                <Typography variant="oldPrice" component="span">
                  ${price}
                </Typography>
              )}
            </StyledCartPrices>
          </StyledQuantityAndPricesWrapper>
          <StyledCartItemActions>
            <StyledFormControlLabel
              control={
                <StyledCheckbox
                  icon={getIcon(EnumIcons.heart)}
                  checkedIcon={getIcon(EnumIcons.heart)}
                />
              }
              label="Favourite"
            />
            <StyledIconButton onClick={() => removeItem(id)}>
              {getIcon(EnumIcons.delete)}
              <span>Delete</span>
            </StyledIconButton>
          </StyledCartItemActions>
        </StyledCartItemInfo>
      </StyledCartItemWrapper>
    </>
  );
};
