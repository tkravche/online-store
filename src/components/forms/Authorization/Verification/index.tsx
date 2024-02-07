import { FC } from 'react';
import { DialogContent, DialogTitle, Typography } from '@mui/material';

import {
  StyledCheckButton,
  StyledVWrapper,
  StyledVerificationContent,
} from '@/theme/styles/components/StyledAuthorization';
import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';

export const Verification: FC = () => {
  return (
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
  );
};
