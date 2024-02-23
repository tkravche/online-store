import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

import {
  StyledCardImg,
  StyledOrderCard,
  StyledPrices,
  StyledQuantity,
} from '@/theme/styles/components/StyledOrder';
import Default from '@/assets/default.webp';
import { IOrderItemProps } from '@/types';

export const OrderItem: FC<IOrderItemProps> = ({ quantity, article }) => {
  return (
    <StyledOrderCard>
      <StyledQuantity>
        <Typography variant="body3" component="span">
          x{quantity}
        </Typography>
      </StyledQuantity>
      <StyledCardImg>
        {article?.images.length > 0 ? (
          <Image
            src={article?.images[0].url}
            webp={article?.images[0].url}
            alt={article?.name}
          />
        ) : (
          <Image src={Default} webp={Default} alt={article?.name} />
        )}
      </StyledCardImg>

      <Link to={`/online-store/${article.id}`} className="title">
        <Typography
          variant="body2"
          component="span"
          aria-label={article.name}
          title={article.name}
          className="line-clamp-2"
          height="36px"
          pl={2}
          pr={2}
        >
          {article.name}
        </Typography>
      </Link>
      <StyledPrices>
        <Typography variant="newPrice" component="span">
          $
          {!article.sale?.newPrise
            ? article.price
            : article.sale?.newPrise}
        </Typography>
        <Typography variant="newPrice" component="span"></Typography>
        {article.sale?.newPrise && (
          <Typography variant="oldPrice" component="span">
            ${article.price}
          </Typography>
        )}
      </StyledPrices>
    </StyledOrderCard>
  );
};
