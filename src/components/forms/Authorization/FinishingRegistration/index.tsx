import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { DialogTitle, Divider, Typography } from '@mui/material';

import {
  StyledCheckButton,
  StyledSuccessContent,
  StyledVWrapper,
} from '@/theme/styles/components/StyledAuthorization';
import { setRegistered } from '@/lib/otherRedux/slice/auth';
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';

export const FinishingRegistration: FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setRegistered(false));
  };

  return (
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
  );
};
