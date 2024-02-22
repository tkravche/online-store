import { Stepper } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledOrder = styled.div`
  ${tw`mb-14`}
`;
export const StyledOrderHistory = styled.div`
  ${tw`pb-6 mb-6 border-b-[0.5px] border-solid border-[#8083FF] bg-main-white`}
`;

export const StyledOrderCards = styled.div`
  ${tw`flex gap-y-4 gap-x-4 flex-wrap mb-6`}
`;
export const StyledOrderCard = styled.div`
  ${tw`flex flex-col gap-y-5 w-[220px] h-[305px] py-6 bg-main-white overflow-hidden rounded-3xl border-4 border-main-transparent transition-all`}
  box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08);
  &:hover {
    border: 4px solid #d25;
  }
`;

export const StyledCardImg = styled.div`
  ${tw`shrink-0	h-[144px] px-2`}

  img {
    ${tw`object-contain	w-full h-full`}
  }
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
