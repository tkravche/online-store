import {
  StyledHero,
  StyledHeroContent,
} from '@/theme/styles/components/StyledHomeBanner';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { Button, Typography } from '@mui/material';

import bg from '@/assets/banner-bg-new.jpg';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <StyledHero bg={bg}>
      <StyledContainer>
        <StyledHeroContent>
          <Typography variant="h1" component="h1">
            Be faster on wheels
          </Typography>
          <Typography variant="body1" component="p">
            Buy new wheels for yourself and move with pleasure
          </Typography>
          <Button variant="contained" size="large">
            <Link to="catalog">View the catalog</Link>
          </Button>
        </StyledHeroContent>
      </StyledContainer>
    </StyledHero>
  );
};
