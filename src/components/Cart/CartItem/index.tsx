import { FC } from 'react';
import { Checkbox, Typography } from '@mui/material';
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
  StyledFormControlLabel,
  StyledIconButton,
  StyledImageWrapper,
  StyledMinus,
  StyledPlus,
  StyledQuantity,
  StyledQuantityAndPricesWrapper,
  StyledQuantityButtons,
  StyledQuantityNumber,
} from '@/theme/styles/components/StyledCart';

export const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  url,
  quantity,
  price,
  sale,
}) => {
  const dispatch = useDispatch();
  const item = { id, name, url, price, sale };

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
          <Typography
            variant="body1"
            component="h2"
            className="line-clamp-1"
            mb={1}
            sx={{ width: '85%' }}
          >
            {name}
          </Typography>
          <Typography variant="body2" component="h3" className="line-clamp-1">
            <Typography
              variant="body2"
              component="span"
              mr={1}
              sx={{ color: '#878D99' }}
            >
              Color:
            </Typography>
            Black
          </Typography>
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
                <StyledMinus
                  onClick={() =>
                    changeQuantity(item, Math.max(1, quantity - 1))
                  }
                >
                  <button type="button" disabled={quantity === 1}>
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
              <Typography
                variant="newPrice"
                component="h3"
                className="line-clamp-2"
              >
                ${price}
              </Typography>
              <Typography
                variant="oldPrice"
                component="h3"
                className="line-clamp-2"
              >
                {sale}
              </Typography>
            </StyledCartPrices>
          </StyledQuantityAndPricesWrapper>
          <StyledCartItemActions>
            <StyledFormControlLabel
              control={
                <Checkbox
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
