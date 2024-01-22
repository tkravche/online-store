import Slider from 'react-slick';
import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledCard } from '../components/StyledCard';

export const StyledSlider = styled(Slider)`
  .slick-slide {
    @media (max-width: 1000px) {
      ${tw`!w-[220px]`}
    }

    > div {
      ${tw`h-full`}
    }
  }

  ${StyledCard} {
    ${tw`min-w-[220px] border-4 transition-all`}
    
  }

  .button {
    ${tw`hidden lg:inline-flex`}
  }
  .MuiIconButton-root {
    ${tw`p-0 cursor-pointer`}

    &:hover {
      background-color: transparent;

      svg {
        ${tw`stroke-main-red`}
      }
    }
  }
`;
