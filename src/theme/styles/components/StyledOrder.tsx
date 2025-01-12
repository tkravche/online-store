import { Stepper } from '@mui/material';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledOrder = styled.div`
  ${tw`mb-14`}
`;
export const StyledOrderHistory = styled.div`
  ${tw`pb-6 mb-6 border-b-[0.5px] border-solid border-[#8083FF]`}
`;

export const StyledOrderCards = styled.div`
  ${tw`flex gap-y-4 gap-x-4 flex-wrap mb-6`}
`;

export const StyledOrderCard = styled.div`
  ${tw`relative flex flex-col gap-y-5 w-[220px] h-[305px] py-6 bg-main-white overflow-hidden rounded-3xl border-4 border-main-transparent transition-all`}
  box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08);
  &:hover {
    border: 4px solid #d25;
  }
`;
export const StyledQuantity = styled.div`
  ${tw`absolute top-1 right-3 text-[#878d99]`}
`;
export const StyledCardImg = styled.div`
  ${tw`shrink-0	h-[144px] px-2`}

  img {
    ${tw`object-contain	w-full h-full`}
  }
`;
export const StyledPrices = styled.div`
  ${tw`flex items-center justify-between px-6`}
`;
export const StyledHistoryAllLinks = styled.div`
  ${tw`flex justify-between items-center mb-14`}
`;

export const StyledLink = styled.div`
  a {
    ${tw`flex items-center text-base text-[#878D99] font-bold transition-all`}

    &:hover {
      ${tw`text-main-red`}

      .icon-arrowLong {
        ${tw`stroke-main-red fill-main-red`}
      }
    }
  }

  .icon-arrowLong {
    ${tw`w-[48px]  stroke-1 stroke-[#878D99] fill-[#878D99] transition-all`}
  }
`;

export const StyledAllLink = styled.div`
  a {
    ${tw`flex items-center gap-x-2 text-base text-[#878D99] font-bold transition-all`}

    &:hover {
      ${tw`text-main-red`}

      .icon-arrowLong {
        ${tw`stroke-main-red fill-main-red`}
      }
    }
  }

  .icon-arrowLong {
    ${tw`w-[48px]  stroke-1 stroke-[#878D99] fill-[#878D99] transition-all`}
  }
`;

export const StyledStepper = styled(Stepper)`
  ${tw``}

  .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    margin-top: 8px;
  }
  svg {
    stroke: #878d99;
    fill: transparent;
    width: 23px;
  }
  .Mui-active {
    fill: #d25;
    stroke: #fbfbfb;
  }
  .Mui-completed {
    fill: #d25;
    stroke: #fbfbfb;
  }

  .MuiStepLabel-label.Mui-completed {
    color: #d25;
  }
`;

export const BottomOrderHistoryItemWrapper = styled.div`
  ${tw`flex justify-between items-end`}
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    ${tw`max-w-[220px]`}
  }
  ${StyledOrderCard} {
    ${tw`min-w-[144px]`}
  }

  .button {
    ${tw`hidden lg:inline-flex`}
  }
`;

export const StyledContainerSlider = styled.div`
${tw`m-auto`}

.slick-slider {
  ${tw`relative max-w-[1060px]`}
  
  .button {
    ${tw`absolute top-1/2 -left-9 translate-y-2/4`}
  }

  .button-next {
    ${tw`absolute -right-9 left-auto`}
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
