import { FC, memo } from 'react';
import {
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

import {
  StyledCardImg,
  StyledOrder,
  StyledOrderCard,
  StyledOrderCards,
  StyledStepper,
} from '@/theme/styles/components/StyledOrder';
import { EnumIcons, IOrderProps } from '@/types';
import Default from '@/assets/default.webp';

export const Order: FC<IOrderProps> = ({ id, status, totalPrice, orderItems }) => {
  const steps = ['Created', 'Processed', 'Sent', 'Delivered', 'Received'];

  const orderStatus = [
    'CREATED',
    'PROCESSED',
    'SENDED',
    'DELIVERED',
    'RECEIVED',
    'CENCELED',
  ];
  const statusNumberFound = orderStatus.findIndex(
    statusItem => statusItem === status
  );
  const statusNumber = statusNumberFound === 5 ? -1 : statusNumberFound;
  //   const dateFormatted = new Date(updatedAt);
  //   const year = dateFormatted.getFullYear();
  //   const month = dateFormatted.getMonth() + 1;
  //   const formattedMonth = month < 10 ? '0' + month : month;
  //   const day = dateFormatted.getDate();
  //   const formattedDay = day < 10 ? '0' + day : day;
  //   const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
  const StepperConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 11px)',
      right: 'calc(50% + 11px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#D25',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#D25',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#878D89',
      borderTopWidth: 2,
      borderRadius: 1,
    },
  }));
  return (
    <StyledOrder>
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
      <Typography variant="body1" component="span">
        Total&nbsp;&nbsp;&nbsp;
        <Typography variant="newPrice" component="span">
          ${totalPrice}
        </Typography>
      </Typography>
      <Typography
        variant="body2"
        component="p"
        mt={1}
        mb={3}
        sx={{ color: '#878D99' }}
      >
        Payment upon receipt
      </Typography>
      <Typography variant="body1" component="span">
        Status
      </Typography>
      <StyledStepper
        alternativeLabel
        activeStep={statusNumber}
        connector={<StepperConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </StyledOrder>
  );
};
