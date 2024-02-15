import { getIcon } from '@/helpers/getIcon';
import { FC } from 'react';
import {
  StyledContainerReviewSlider,
  StyledNoReviews,
  StyledReviewCard,
  StyledReviewSlider,
  StyledReviewsWrapper,
} from '@/theme/styles/components/StyledReviewSection';
import { EnumIcons, IReviewItem, IReviewPopUpProps, IReviewProps } from '@/types';
import { IconButton, Typography } from '@mui/material';

interface IArrowProps {
  onClick?: () => void; // Define the type for onClick prop
}
const NextArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-next">
    {getIcon(EnumIcons.arrowRight)}
  </IconButton>
);

const PrevArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-prev">
    {getIcon(EnumIcons.arrowLeft)}
  </IconButton>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const ReviewsSlider: FC<IReviewProps> = props => {
  const { reviews } = props;
  return (
    <StyledReviewsWrapper>
      {!reviews ||
        (!reviews.length && (
          <StyledNoReviews>
            <Typography>
              There are no reviews for this product on this site yet.
            </Typography>
          </StyledNoReviews>
        ))}
      {reviews && reviews?.length > 0 && reviews?.length === 1 && (
        <StyledReviewCard
          id={reviews[0].id}
          stars={reviews[0].stars}
          author={reviews[0].author}
          text={reviews[0].text}
          updatedAt={reviews[0].updatedAt}
        />
      )}
      {reviews && reviews?.length > 1 && (
        <StyledContainerReviewSlider>
          <StyledReviewSlider {...settings}>
            {reviews?.map((review: IReviewItem, index: number) => (
              <StyledReviewCard key={index} {...review} />
            ))}
          </StyledReviewSlider>
        </StyledContainerReviewSlider>
      )}
    </StyledReviewsWrapper>
  );
};
