import { FC, useState } from 'react';
import Image from 'react-image-webp';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationContent,
  StyledAuthorizationImg,
  StyledAuthorizationTitle,
  StyledCheckButton,
  StyledSuccessContent,
  StyledVWrapper,
  StyledVerificationContent,
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
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';
import { Link } from 'react-router-dom';

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
    // <StyledAuthorization open={isAuthOpen} onClose={handleClose}>
    //   <IconButton
    //     aria-label="close"
    //     onClick={handleClose}
    //     sx={{
    //       fill: '#FBFBFB',
    //       position: 'absolute',
    //       right: 20,
    //       top: 20,
    //       color: theme => theme.palette.grey[500],
    //     }}
    //   >
    //     <CloseIcon />
    //   </IconButton>
    //   <StyledAuthorizationContainer>
    //     <StyledVerificationContent>
    //       {getIcon(EnumIcons.mail)}
    //       <StyledVWrapper>
    //         <DialogTitle
    //           sx={{ p: '8px', fontWeight: '900' }}
    //           id="customized-dialog-title"
    //         >
    //           Verification
    //         </DialogTitle>
    //         <DialogContent sx={{ m: 0, p: 0 }}>
    //           <Typography variant="body2" component="p">
    //             We have sent you a letter.
    //           </Typography>
    //         </DialogContent>
    //       </StyledVWrapper>
    //       <StyledCheckButton type="button" variant="contained">
    //         Check your mailbox.
    //       </StyledCheckButton>
    //     </StyledVerificationContent>
    //     <StyledAuthorizationImg>
    //       <Image src={loginImg} webp={loginImgWebp} alt="Online" />
    //     </StyledAuthorizationImg>
    //   </StyledAuthorizationContainer>
    // </StyledAuthorization>
    // <StyledAuthorization open={isAuthOpen} onClose={handleClose}>
    //   <IconButton
    //     aria-label="close"
    //     onClick={handleClose}
    //     sx={{
    //       fill: '#FBFBFB',
    //       position: 'absolute',
    //       right: 20,
    //       top: 20,
    //       color: theme => theme.palette.grey[500],
    //     }}
    //   >
    //     <CloseIcon />
    //   </IconButton>
    //   <StyledAuthorizationContainer>
    //     <StyledSuccessContent>
    //       {getIcon(EnumIcons.check)}
    //       <StyledVWrapper>
    //         <DialogTitle
    //           sx={{ p: '8px', fontWeight: '900' }}
    //           id="customized-dialog-title"
    //         >
    //           Registration is successful!
    //         </DialogTitle>
    //       </StyledVWrapper>
    //       {/* <StyledCheckButton type="button" onClick={...} variant="contained"> */}
    //       <StyledCheckButton type="button" onClick={handleClose} variant="contained"> Sign in
    //       </StyledCheckButton>
    //       <Divider flexItem />
    //       <Link to="/online-store">
    //         <Typography onClick={handleClose} variant="body2" component="p" sx={{color: '#8083FF'}}>
    //           View the site without logging in
    //         </Typography>
    //       </Link>
    //     </StyledSuccessContent>
    //     <StyledAuthorizationImg>
    //       <Image src={loginImg} webp={loginImgWebp} alt="Online" />
    //     </StyledAuthorizationImg>
    //   </StyledAuthorizationContainer>
    // </StyledAuthorization>
  );
};
