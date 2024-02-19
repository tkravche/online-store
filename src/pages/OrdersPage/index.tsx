import { getIcon } from '@/helpers/getIcon';
import { useAppSelector } from '@/hooks';
import { selectOrders } from '@/lib/otherRedux/selectors';
import {
  StyledAllLink,
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledOrdersSection,
} from '@/theme/styles/components/StyledOrders';
import { EnumIcons } from '@/types';
import { Button, Step, StepConnector, StepLabel, Stepper, Typography, stepConnectorClasses } from '@mui/material';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const OrdersPage: FC = () => {
  const orders = useAppSelector(selectOrders);
  const steps = ['Created', 'Processed', 'Sent', 'Delivered', 'Received'];
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  return (
    <>
      <StyledOrdersSection>
        <Typography variant="h1" component="h1" className="line-clamp-1">
          Orders
        </Typography>
        {!orders?.length ? (
          <StyledNoCartItemsWrapper>
            <StyledNoCartItems>
              You have no ordered products yet.
            </StyledNoCartItems>

            <NavLink to="/online-store/catalog">
              <Button variant="contained">View the catalog</Button>
            </NavLink>
          </StyledNoCartItemsWrapper>
        ) : (
          <div>
            {orders?.map((item: any) => (
              <>
                <div key={item.id}> {item.id}</div>
                <Stepper alternativeLabel activeStep={1}> 
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </>
            ))}
          </div>
        )}
        <StyledAllLink>
          <Link to="/online-store/catalog">
            Back to the catalog
            {getIcon(EnumIcons.arrowLong)}
          </Link>
        </StyledAllLink>
      </StyledOrdersSection>
    </>
  );
};
