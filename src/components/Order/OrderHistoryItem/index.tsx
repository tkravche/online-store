import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

import {
  BottomOrderHistoryItemWrapper,
  StyledCardImg,
  StyledOrder,
  StyledOrderCard,
  StyledOrderCards,
  StyledOrderHistory,
} from '@/theme/styles/components/StyledOrder';
import { IOrderProps } from '@/types';
import Default from '@/assets/default.webp';
import { FC } from 'react';

export const OrderHistoryItem: FC<IOrderProps> = ({
  id,
  status,
  totalPrice,
  orderItems,
}) => {
  //   const dateFormatted = new Date(updatedAt);
  //   const year = dateFormatted.getFullYear();
  //   const month = dateFormatted.getMonth() + 1;
  //   const formattedMonth = month < 10 ? '0' + month : month;
  //   const day = dateFormatted.getDate();
  //   const formattedDay = day < 10 ? '0' + day : day;
  //   const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

  return (
    <StyledOrderHistory>
      <Typography
        component="h2"
        className="line-clamp-1"
        fontWeight="900"
        fontSize="20px"
        lineHeight="120%"
        marginBottom="4px"
      >
        Order {id}
      </Typography>
      <Typography
        variant="body2"
        component="p"
        mb={3}
        sx={{ color: '#878D99' }}
      >
        21.02.2024
      </Typography>
      <StyledOrderCards>
        {orderItems.map(item => (
          <StyledOrderCard key={item.id}>
            <StyledCardImg>
              {/* {item?.article?.images.length > 0 ? (
                <Image src={item?.article?.images[0].url} webp={item?.article?.images[0].url} alt={item?.article?.name} />
              ) : (
                <Image src={Default} webp={Default} alt={item?.article?.name} />
              )} */}
              <Image src={Default} webp={Default} alt={item?.article?.name} />
            </StyledCardImg>
            <Link to={`/online-store/${item.article.id}`} className="title">
              <Typography
                variant="body2"
                component="span"
                aria-label={item.article.name}
                title={item.article.name}
                className="line-clamp-2"
                height="36px"
                pl={2}
                pr={2}
              >
                {item.article.name}
              </Typography>
            </Link>
            <Typography variant="newPrice" component="span" pl={2} pr={2}>
              ${item.article.price}
            </Typography>
          </StyledOrderCard>
        ))}
      </StyledOrderCards>
      <BottomOrderHistoryItemWrapper>
        <div>
          <Typography variant="body1" component="span">
            Total&nbsp;&nbsp;&nbsp;
            <Typography variant="newPrice" component="span">
              ${totalPrice}
            </Typography>
          </Typography>
          <Typography variant="body2" component="p" sx={{ color: '#878D99' }} mt={1}>
            Payment upon receipt
          </Typography>
        </div>
        <Button variant="contained">Repeat this order</Button>
      </BottomOrderHistoryItemWrapper>
    </StyledOrderHistory>
  );
};
