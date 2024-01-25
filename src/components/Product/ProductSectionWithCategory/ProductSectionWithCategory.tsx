import { getIcon } from '@/helpers/getIcon';
import { StyledProductSection } from '@/theme/styles/components/StyledProductSection';
import {
  StyledContainer,
  StyledContainerSlider,
} from '@/theme/styles/layout/StyledWrappers';
import { StyledSlider } from '@/theme/styles/ui/StyledSlider';
import { EnumIcons, ICardProps } from '@/types';
import { IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { Card } from '../../Card';

interface ISliderProps {
  category?: string;
  data?: ICardProps[];
}

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
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 980,
      settings: {
        autoSlidesToShow: true,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ProductSectionWithCategory: FC<ISliderProps> = ({
  category,
  data,
}) => {
  return (
    <StyledProductSection>
      <StyledContainer>
        <Typography component="h2" variant="h2">
          Other {category}s
        </Typography>
      </StyledContainer>
      <StyledContainerSlider>
        <StyledSlider {...settings}>
          {data?.map((item) => <Card key={item.id} {...item} />)}
        </StyledSlider>
      </StyledContainerSlider>
    </StyledProductSection>
  );
};
