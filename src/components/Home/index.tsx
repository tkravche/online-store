import { getIcon } from '@/helpers/getIcon';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { StyledAllLink } from '@/theme/styles/ui/StyledAllLink';
import { EnumIcons } from '@/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../Hero';
import { BestSellerSection } from './BestSellerSection';
import { BicyclesSection } from './BicyclesSection';
import { Categories } from './Categories';
import { SkateboardsSection } from './SkateboardsSection';
import { ScrollToTopButton } from '../ScrollToTopButton';

export const Home: FC = () => {

  return (
    <>
      <Hero />
      <Categories />
      <BestSellerSection />
      <BicyclesSection />
      <SkateboardsSection />
      <StyledContainer>
        <StyledAllLink>
          <Link to="catalog">
            View All
            {getIcon(EnumIcons.arrowLong)}
          </Link>
          <ScrollToTopButton />
        </StyledAllLink>
        
      </StyledContainer>
    </>
  );
};
