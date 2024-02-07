import { FC } from 'react';
import Image from 'react-image-webp';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationImg,
  StyledCheckButton,
  StyledVWrapper,
  StyledVerificationContent,
} from '@/theme/styles/components/StyledAuthorization';

import loginImg from '@/assets/login.jpg';
import loginImgWebp from '@/assets/login.webp';
import { selectAuthOpen } from '@/lib/otherRedux/selectors';
import { setAuth } from '@/lib/otherRedux/slice/auth';
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';

export const Verification: FC = () => {
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
        <StyledVerificationContent>
          {getIcon(EnumIcons.mail)}
          <StyledVWrapper>
            <DialogTitle
              sx={{ p: '8px', fontWeight: '900' }}
              id="customized-dialog-title"
            >
              Verification
            </DialogTitle>
            <DialogContent sx={{ m: 0, p: 0 }}>
              <Typography variant="body2" component="p">
                We have sent you a letter.
              </Typography>
            </DialogContent>
          </StyledVWrapper>
          <StyledCheckButton type="button" variant="contained">
            Check your mailbox.
          </StyledCheckButton>
        </StyledVerificationContent>
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
