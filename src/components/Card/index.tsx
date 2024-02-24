import { Button, Checkbox, Typography } from '@mui/material';
import { FC, memo } from 'react';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';

import { getIcon } from '@/helpers/getIcon';
import {
  StyledCard,
  StyledCardImg,
  StyledCardInfo,
  StyledCardTop,
  StyledPrices,
} from '@/theme/styles/components/StyledCard';
import { StyledSale } from '@/theme/styles/components/StyledSale';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import { EnumIcons, ICardProps } from '@/types';
import Default from '@/assets/default.webp';
import { addItemToTemporaryCart } from '@/lib/otherRedux/slice/user';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks';
import {
  selectCurrentUserCart,
  selectFavorites,
  selectIsLogged,
  selectTemporaryCart,
} from '@/lib/otherRedux/selectors';
import { addItemToCartThunk } from '@/lib/otherRedux/thunks/user';

export const Card: FC<ICardProps> = ({
  name,
  price,
  sale,
  id,
  images,
  rating,
}) => {
  const dispatch = useDispatch();
  const isLogged = useAppSelector(selectIsLogged);

  //for Buy button
  const temporaryCart = useAppSelector(selectTemporaryCart);
  const cart = useAppSelector(selectCurrentUserCart);
  const foundInTemporaryCart = temporaryCart.find(item => item.id === id);
  const foundInCurrentCart = cart.find(item => item.article.id === id);

  let foundInCart;
  if (isLogged) {
    foundInCart = foundInCurrentCart;
  } else {
    foundInCart = foundInTemporaryCart;
  }
  const quantity = 1;
  const urlImage = images[0]?.url === undefined ? Default : images[0]?.url;
  const infoForCart = { id, name, url: urlImage, price, sale, quantity };
  const data = { article: id, quantity };
  
  const handleAddToCartClick = () => {
    if (isLogged) {
      // dispatch(addItemToCartThunk(data));
    } else {
      dispatch(addItemToTemporaryCart(infoForCart));
    }
  };

  //for Favorites
  const favoriteItems = useAppSelector(selectFavorites);
  const isFavorite = favoriteItems?.some((item: any) => item.id === id);

  return (
    <StyledCard>
      <StyledCardTop>
        {sale?.newPrise && (
          <StyledSale>
            <Typography variant="body2" component="span">
              Sale
            </Typography>
          </StyledSale>
        )}
        <Checkbox
          aria-label="Like"
          icon={getIcon(EnumIcons.heart)}
          checkedIcon={getIcon(EnumIcons.heart)}
          checked={isFavorite}
          disabled
        />
      </StyledCardTop>
      <StyledCardImg>
        <Link to={`/online-store/${id}`}>
          {images.length > 0 ? (
            <Image src={images[0].url} webp={images[0].url} alt={name} />
          ) : (
            <Image src={Default} webp={Default} alt={name} />
          )}
        </Link>
      </StyledCardImg>
      <StyledCardInfo>
        <StyledRating
          name={`rating-${rating}`}
          defaultValue={rating ?? 0}
          size="small"
          icon={getIcon(EnumIcons.star)}
          emptyIcon={getIcon(EnumIcons.star)}
          readOnly
        />
        <Link to={`/online-store/${id}`} className="title">
          <Typography
            variant="body2"
            aria-label={name}
            title={name}
            component="span"
            className="line-clamp-2"
          >
            {name}
          </Typography>
        </Link>
        <StyledPrices>
          <Typography variant="newPrice" component="span">
            ${!sale?.newPrise ? price : sale?.newPrise}
          </Typography>

          {sale?.newPrise && (
            <Typography variant="oldPrice" component="span">
              ${price}
            </Typography>
          )}
        </StyledPrices>
        {!foundInCart ? (
          <Button variant="contained" onClick={handleAddToCartClick}>
            Buy
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAddToCartClick}>
            Buy more
          </Button>
        )}
      </StyledCardInfo>
    </StyledCard>
  );
};

Card.displayName = 'Card';
