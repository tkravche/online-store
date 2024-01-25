import Image from 'react-image-webp';
import { ChangeEvent, FC, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons, IReviewPopUpProps } from '@/types';
import {
  StyledDialog,
  StyledProductInfo,
  StyledReviewInfo,
  StyledReviewPopUpWrapper,
  StyledRating,
  StyledTextArea,
  StyledReviewRating,
  StyledReviewPopUpTop,
  StyledDialogActions,
} from '@/theme/styles/components/StyledAddReviewPopUp';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const AddReviewPopUp: FC<IReviewPopUpProps> = ({ url, name }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0);
  const [hover] = useState(-1);
  const [text, setText] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const isTextEntered = text.trim() !== '';
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="add review"
        size="large"
        onClick={handleClickOpen}
      >
        {getIcon(EnumIcons.add)}
      </IconButton>
      <StyledDialog
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
        <StyledReviewPopUpTop>
          <DialogTitle
            sx={{ m: 0, p: 0, fontWeight: '900' }}
            id="customized-dialog-title"
          >
            Leave your feedback
          </DialogTitle>
          <StyledReviewRating>
            <Typography variant="body2" component="h3">
              Rate the product
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StyledRating
                name="hover-feedback"
                value={value}
                precision={0.5}
                // icon={getIcon(EnumIcons.star)}
                emptyIcon={<StarBorderIcon sx={{ color: '#FFD700' }} />}
                getLabelText={getLabelText}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
                // onChangeActive={(event, newHover) => {
                //   setHover(newHover);
                // }}
              />
              {value !== null && (
                <Box sx={{ ml: 1, color: '#8083ff' }}>
                  {labels[hover !== -1 ? hover : value]}
                </Box>
              )}
            </Box>
          </StyledReviewRating>
        </StyledReviewPopUpTop>
        <DialogContent sx={{ m: 0, p: 0 }}>
          <StyledReviewPopUpWrapper>
            <StyledProductInfo>
              <Image
                src={url}
                webp={url}
                alt={name}
                width="204"
                height="144"
                style={{ maxHeight: '144px', objectFit: 'scale-down' }}
              />

              <Typography
                variant="body2"
                component="h3"
                className="line-clamp-2"
              >
                {name}
              </Typography>
            </StyledProductInfo>
            <StyledReviewInfo>
              <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                Write a comment
              </Typography>
              <StyledTextArea
                value={text}
                onChange={handleTextChange}
                aria-label="empty textarea"
                minRows={8}
                placeholder="Write here (up to 1500 characters)"
              />

              <StyledDialogActions>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={handleClose}
                  sx={{
                    backgroundColor: 'transparent',
                    color: '#878D99',
                    border: '1px solid black',
                    ':hover': {
                      border: '1px solid transparent',
                      color: 'white',
                    },
                  }}
                >
                  Cancel
                </Button>
                {isTextEntered && value !== null && value > 0 ? (
                  <Button variant="contained" autoFocus onClick={handleClose}>
                    Send
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="contained"
                    autoFocus
                    onClick={handleClose}
                  >
                    Send
                  </Button>
                )}
              </StyledDialogActions>
            </StyledReviewInfo>
          </StyledReviewPopUpWrapper>
        </DialogContent>
      </StyledDialog>
    </>
  );
};
