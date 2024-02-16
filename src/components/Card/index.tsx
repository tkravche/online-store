import { Button, Checkbox, Typography } from '@mui/material';
import { memo } from 'react';
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
import { selectFavorites, selectIsLogged } from '@/lib/otherRedux/selectors';
import { toast } from 'react-toastify';

export const Card = memo(
  ({ name, price, sale, id, images, rating }: ICardProps) => {
    const dispatch = useDispatch();

    //for Add to cart
    const quantity = 1;
    const urlImage = images[0]?.url === undefined ? Default : images[0]?.url;
    const infoForCart = { id, name, url: urlImage, price, sale, quantity };

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
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addItemToTemporaryCart(infoForCart));
            }}
          >
            Buy
          </Button>
        </StyledCardInfo>
      </StyledCard>
    );
  }
);

Card.displayName = 'Card';
