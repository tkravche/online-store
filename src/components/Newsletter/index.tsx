import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import {
  StyledNSDialog,
  StyledNewsletter,
  StyledNewsletterButton,
} from '@/theme/styles/components/StyledNewsletter';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';

interface IData {
  email: string;
}
export const Newsletter = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  const handleSendSubmit = (data: IData) => {
    console.log(data);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledNewsletter>
      <StyledContainer>
        <div className="content">
          <Typography variant="h2" component="h3" className="title">
            Newsletter
          </Typography>
          <Typography component="p" variant="body2" className="subtitle">
            Receive updates, access to exclusive deals, and more.
          </Typography>
          <form onSubmit={handleSubmit(handleSendSubmit as any)}>
            <TextField
              placeholder="example@example.com"
              {...register('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {getIcon(EnumIcons.mail)}
                  </InputAdornment>
                ),
              }}
            />
            <StyledNewsletterButton type="submit" onClick={handleClickOpen}>
              {getIcon(EnumIcons.send)}
            </StyledNewsletterButton>
            <StyledNSDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              // fullScreen={fullScreen}
            >
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              {getIcon(EnumIcons.check)}
              <DialogTitle
                sx={{ p: 0, mb: 3, mt: 2, fontWeight: '900' }}
                id="customized-dialog-title"
              >
                Thanks for the following!
              </DialogTitle>
              <DialogContent sx={{ m: 0, p: 0 }}>
                <Typography variant="body2" component="p">
                  We will send you information about new arrivals, discounts and
                  exclusive offers.
                </Typography>
              </DialogContent>
            </StyledNSDialog>
          </form>
        </div>
      </StyledContainer>
    </StyledNewsletter>
  );
};
