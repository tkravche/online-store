import { ReviewsSection } from '@/components/Product/ReviewsSection';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledProductCardSection = styled.div`
  ${tw`mt-40`}
`;
export const StyledContainerSlider = styled.div`
  ${tw`w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto`}
`;
export const StyledProductCard = styled.div`
  ${tw`grid grid-rows-1 gap-y-6 sm:grid-cols-[41% auto] sm:gap-x-[140px] mt-8 sm:mt-14 mb-14 overflow-hidden`}
`;

export const StyledCardRight = styled.div`
  ${tw`relative flex flex-col justify-center h-[290px] lg:h-[580px] bg-main-white pb-8 lg:pb-16 pt-8 rounded-3xl`}
  box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08); 
  `;
export const StyledSale = styled.div`
  ${tw`w-[191px] flex items-center justify-center py-4 px-16 text-main-white bg-main-red rounded-r`}
  .MuiTypography-root {
    ${tw`text-2xl`}
  }
`;
export const StyledNoSale = styled.div`
  ${tw`bg-main-white  `}
    }
`;

export const StyledCardImg = styled.div`
  ${tw`shrink-0 py-3 px-10 bg-main-white`}

  img {
    ${tw`object-contain	max-h-[405px] lg:w-full lg:h-full`}
  }
`;
export const StyledImagesSlider = styled(Slider)`
  .slick-slide {
    
      ${tw`w-[500px] `}
    }

  ${StyledCardImg} {
    ${tw`min-w-[500px] `}
  }

  .button {
    ${tw`hidden lg:inline-flex`}
  }
`;
export const StyledContainerImagesSlider = styled.div`
${tw`w-full m-auto`}

  .slick-slider {
    ${tw`relative`}
    
    .button {
      ${tw`absolute top-1/2 -left-10 translate-y-2/4`}
    }

    .button-next {
      ${tw`absolute -right-10 left-auto`}
    }

    .MuiIconButton-root {
      ${tw`w-6 h-6 p-0`}

      svg {
        ${tw`stroke-secondary-gray`}
      }

      &:hover {
      
      svg {
        ${tw`stroke-main-red`}
      }
    }
  }

  .slick-list {
    ${tw`overflow-hidden`}
  }
  .slick-track {
    ${tw`flex gap-x-5`}
  }
  `;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-2 h-full `}
`;

export const StyledProductCode = styled.div`
  ${tw` flex items-center gap-x-4 text-secondary-gray`}
`;

export const StyledProductPrices = styled.div`
  ${tw` flex items-center gap-x-6 mt-6`}
`;

export const StyledRs = styled.div`
  ${tw`flex items-center gap-x-4`}
`;

export const StyledButtonHeartGroup = styled.div`
  ${tw`mt-2 mb-6`}

  .MuiCheckbox-root {
    ${tw`min-w-[50px] min-h-[50px] lg:min-w-[60px] lg:min-h-[60px] ml-1 lg:ml-4 p-2 lg:p-3 stroke-main-black rounded-[16px] border-2 border-solid border-main-black`}
  }

  .MuiCheckbox-root:hover {
    ${tw`border-main-red stroke-main-red`}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
`;

export const StyledAddButton = styled(Button)`
position: relative;
overflow: hidden;
z-index: 1;

&:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
  border-radius: 1rem;
  background: #d25;
  transition: opacity 0.6s ease-out 0.2s;
  z-index: -1;
}

&:before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(to right, #d25 4%, #8083ff 60%);
  transition: width 0.8s ease-out;
  border-radius: 1rem;
  z-index: -2;
}
&:hover:before {
  width: 100%;
}
&:hover:after {
  opacity: 100%;
}
`;

export const StyledAllLink = styled.div`
  ${tw`flex justify-end mt-14 mb-12`}

  a {
    ${tw`flex items-center gap-x-2  text-base font-bold transition-all`}

    &:hover {
      ${tw`text-main-red`}

      .icon-arrowLong {
        ${tw`stroke-main-red fill-main-red`}
      }
    }
  }

  .icon-arrowLong {
    ${tw`w-[48px]  stroke-1 stroke-main-black fill-main-black transition-all`}
  }
`;
export const StyledReviewsSection= styled(ReviewsSection)`
  ${tw`mb-14`}
`;
