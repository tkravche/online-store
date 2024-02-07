import { FC, useState } from 'react';
import Image from 'react-image-webp';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationContent,
  StyledAuthorizationImg,
  StyledAuthorizationTitle,
} from '@/theme/styles/components/StyledAuthorization';
import { Switch } from '../elements/Switch';
import loginImg from '@/assets/login.jpg';
import loginImgWebp from '@/assets/login.webp';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp/Index';
import {
  selectAuthOpen,
  selectIsRegistered,
  selectIsVerified,
} from '@/lib/otherRedux/selectors';
import { setAuth, setVerified } from '@/lib/otherRedux/slice/auth';
import { useAppSelector } from '@/hooks';
import { Verification } from './Verification';
import { FinishingRegistration } from './FinishingRegistration';

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector(selectAuthOpen);
  const isRegistering = useAppSelector(selectIsRegistered);
  const isVerified = useAppSelector(selectIsVerified);
  const [typeForm, setTypeForm] = useState('Sign In');

  const handleClose = () => {
    dispatch(setAuth(!isAuthOpen));
  };

  const handleChange = (value: string) => {
    setTypeForm(value);
  };

  if (isRegistering) {
    setTimeout(() => {
      dispatch(setVerified(true));
    }, 10000);
  }

  return (
    <StyledAuthorization open={isAuthOpen} onClose={handleClose}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          fill: '#FBFBFB',
          position: 'absolute',
          right: 20,
          top: 20,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <StyledAuthorizationContainer>
        {!isRegistering ? (
          <StyledAuthorizationContent>
            <StyledAuthorizationTitle variant="h3" className="title">
              {typeForm === 'Sign In' ? 'Welcome Back' : 'Create an account'}
            </StyledAuthorizationTitle>
            <Switch onChange={handleChange} />
            {typeForm === 'Sign In' ? <SignIn /> : <SignUp />}
          </StyledAuthorizationContent>
        ) : isVerified ? (
          <FinishingRegistration />
        ) : (
          <Verification />
        )}
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
