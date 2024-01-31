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
import { selectAuthOpen } from '@/lib/otherRedux/selectors';
import { setSearch } from '@/lib/otherRedux/slice/header';
import { uiActions } from '@/lib/redux/actions';
import { getAuthOpen } from '@/lib/redux/selectors';
import { setAuth } from '@/lib/otherRedux/slice/auth';

export const Authorization: FC = () => {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const isAuthOpen = useSelector(selectAuthOpen);

  const [typeForm, setTypeForm] = useState('Sign In');

  const handleClose = () => {
    dispatch(setAuth(!isAuthOpen));
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleChange = (value: string) => {
    setTypeForm(value);
  };

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
        <StyledAuthorizationContent>
          <StyledAuthorizationTitle variant="h3" className="title">
            {typeForm === 'Sign In' ? 'Welcome Back' : 'Create an account'}
          </StyledAuthorizationTitle>
          <Switch onChange={handleChange} />
          {typeForm === 'Sign In' ? <SignIn /> : <SignUp />}
        </StyledAuthorizationContent>
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
