import { FC } from 'react';
import {
  IconButton,
  Step,
  StepConnector,
  StepLabel,
  Typography,
  stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

import {
  StyledCardImg,
  StyledContainerSlider,
  StyledOrder,
  StyledOrderCard,
  StyledOrderCards,
  StyledPrices,
  StyledQuantity,
  StyledSlider,
  StyledStepper,
} from '@/theme/styles/components/StyledOrder';
import { EnumIcons, IOrderProps } from '@/types';
import Default from '@/assets/default.webp';
import { getIcon } from '@/helpers/getIcon';
import { OrderItem } from './OrderItem';

interface IArrowProps {
  onClick?: () => void; // Define the type for onClick prop
}

const NextArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-next">
    {getIcon(EnumIcons.arrowRight)}
  </IconButton>
);

const PrevArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-prev">
    {getIcon(EnumIcons.arrowLeft)}
  </IconButton>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    // {
    //   breakpoint: 1420,
    //   settings: {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 1280,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
    {
      breakpoint: 980,
      settings: {
        autoSlidesToShow: true,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Order: FC<IOrderProps> = ({
  id,
  status,
  updatedAt,
  totalPrice,
  orderItems,
}) => {
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
  const dateFormatted = new Date(updatedAt);
  const year = dateFormatted.getFullYear();
  const month = dateFormatted.getMonth() + 1;
  const formattedMonth = month < 10 ? '0' + month : month;
  const day = dateFormatted.getDate();
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
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
        {formattedDate}
      </Typography>
      <StyledOrderCards>
        {orderItems?.length < 5 ? (
          orderItems.map(item => <OrderItem key={item.id} {...item} />)
        ) : (
          <StyledContainerSlider>
            <StyledSlider {...settings}>
              {orderItems.map(item => (
                <OrderItem key={item.id} {...item} />
              ))}
            </StyledSlider>
          </StyledContainerSlider>
        )}
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
