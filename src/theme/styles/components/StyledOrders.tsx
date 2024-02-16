import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledOrdersSection = styled.section`
  ${tw``}
`;
export const StyledNoCartItemsWrapper = styled.div`
  ${tw`flex flex-col items-start h-[300px]`}// ${tw`flex flex-col items-start min-w-[700px] min-h-[448px]`}
`;

export const StyledNoCartItems = styled.div`
  ${tw` mt-6 mb-10`}
`;
export const StyledAllLink = styled.div`
  ${tw`flex justify-end mt-14 mb-12`}

  a {
    ${tw`flex items-center gap-x-2  text-base text-[#878D99] font-bold transition-all`}

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
