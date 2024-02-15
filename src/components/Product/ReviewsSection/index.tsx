import { Typography } from '@mui/material';
import { FC} from 'react';

import {
  StyledAddButton,
  StyledFeedbackWrapper,
  StyledReview,
  StyledReviewSection,
} from '@/theme/styles/components/StyledReviewSection';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { AddReviewPopUp } from '../AddReviewPopUp';
import { IReviewPopUpProps } from '@/types';
import { ReviewsSlider } from '../Reviews/ReviewsSlider';

export const ReviewsSection: FC<IReviewPopUpProps> = ({
  url,
  name,
  id,
  reviews,
}) => {
  return (
    <StyledReviewSection>
      <StyledContainer>
        <Typography component="h2" variant="h2" sx={{ marginBottom: '24px' }}>
          Reviews
        </Typography>
        <StyledReview>
          <StyledFeedbackWrapper>
            <Typography component="h3" variant="body2">
              Leave your feedback about the product
            </Typography>
            <StyledAddButton>
              <AddReviewPopUp url={url} name={name} id={id} reviews={reviews} />
            </StyledAddButton>
          </StyledFeedbackWrapper>
          <ReviewsSlider reviews={reviews} />
        </StyledReview>
      </StyledContainer>
    </StyledReviewSection>
  );
};
