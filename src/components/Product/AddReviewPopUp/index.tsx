import Image from 'react-image-webp';
import { ChangeEvent, FC, useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addReviewThunk, editReviewThunk } from '@/lib/otherRedux/thunks/user';
import { selectCurrentUser } from '@/lib/otherRedux/selectors';

//For stars
const labels: { [index: string]: string } = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const AddReviewPopUp: FC<IReviewPopUpProps> = ({
  url,
  name,
  id,
  reviews,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0); //Stars
  const [hover] = useState(-1);
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  //For review update
  const currentUser = useAppSelector(selectCurrentUser)?.id;
  const reviewIndex = reviews?.findIndex(
    review => review.author.id === currentUser
  );
  useEffect(() => {
    if (reviewIndex !== -1) {
      // If there is an existing review, set the initial state with the review text
      setText(reviews[reviewIndex]?.text || '');
      // Set the initial state for the stars (if applicable)
      setValue(reviews[reviewIndex]?.stars || null);
    }
  }, [reviewIndex, reviews]);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const isTextEntered = text?.trim() !== '';
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const reviewData = {
    text: text.trim(),
    stars: value,
    article: id,
  };
  const reviewEditData = {
    text: text.trim(),
    stars: value,
    reviewId: reviews[reviewIndex]?.id,
  };

  const handleClick = () => {
    if (reviewIndex !== -1) {
      dispatch(editReviewThunk(reviewEditData));
      setOpen(false);
    } else {
      dispatch(addReviewThunk(reviewData));
      setOpen(false);
    }
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
        <DialogTitle
          sx={{
            m: 0,
            mb: '24px',
            p: 0,
            fontWeight: '900',
            textAlign: 'center',
          }}
          id="customized-dialog-title"
        >
          Leave your feedback
        </DialogTitle>
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
            <StyledReviewPopUpTop>
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
                    precision={1}
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
              <StyledReviewInfo>
                <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                  Write a comment
                </Typography>
                <StyledTextArea
                  value={text}
                  onChange={handleTextChange}
                  aria-label="empty textarea"
                  minRows={6}
                  maxRows={6}
                  maxLength={1500}
                  required
                  placeholder="Write here (up to 300 characters)"
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
                    <Button variant="contained" autoFocus onClick={handleClick}>
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
            </StyledReviewPopUpTop>
          </StyledReviewPopUpWrapper>
        </DialogContent>
      </StyledDialog>
    </>
  );
};
