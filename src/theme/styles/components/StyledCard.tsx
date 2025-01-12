import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCard = styled.div`
  ${tw`relative flex flex-col gap-y-6 w-full h-full py-4 bg-main-white overflow-hidden rounded-3xl border-4 border-main-transparent transition-all`}
  box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08);
  &:hover {
      border: 4px solid #D25;}
  `;

export const StyledCardTop = styled.div`
  ${tw`flex items-center justify-between min-h-[28px] pr-4`}

  .MuiCheckbox-root {
    ${tw`w-6 h-6 ml-auto p-0 stroke-main-black`}
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

export const StyledCardImg = styled.div`
  ${tw`shrink-0	h-[144px]`}

  img {
    ${tw`object-contain	w-full h-full`}
  }

  a {
    ${tw`flex justify-center h-full px-2`}
  }
`;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-3 h-full px-4`}
`;

export const StyledPrices = styled.div`
  ${tw`flex items-center justify-between mt-auto`}
`;
