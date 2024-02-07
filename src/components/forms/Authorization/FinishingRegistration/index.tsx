import { FC } from 'react';
import Image from 'react-image-webp';
import { useDispatch, useSelector } from 'react-redux';
import { DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationImg,
  StyledCheckButton,
  StyledSuccessContent,
  StyledVWrapper,
} from '@/theme/styles/components/StyledAuthorization';

import loginImg from '@/assets/login.jpg';
import loginImgWebp from '@/assets/login.webp';

import { selectAuthOpen } from '@/lib/otherRedux/selectors';

import { setAuth } from '@/lib/otherRedux/slice/auth';
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';
import { Link } from 'react-router-dom';

export const FinishingRegistration: FC = () => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector(selectAuthOpen);

  const handleClose = () => {
    dispatch(setAuth(!isAuthOpen));
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
        <StyledSuccessContent>
          {getIcon(EnumIcons.check)}
          <StyledVWrapper>
            <DialogTitle
              sx={{ p: '8px', fontWeight: '900' }}
              id="customized-dialog-title"
            >
              Registration is successful!
            </DialogTitle>
          </StyledVWrapper>
          {/* <StyledCheckButton type="button" onClick={...} variant="contained"> */}
          <StyledCheckButton
            type="button"
            onClick={handleClose}
            variant="contained"
          >
            Sign in
          </StyledCheckButton>
          <Divider flexItem />
          <Link to="/online-store">
            <Typography
              onClick={handleClose}
              variant="body2"
              component="p"
              sx={{ color: '#8083FF' }}
            >
              View the site without logging in
            </Typography>
          </Link>
        </StyledSuccessContent>
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
