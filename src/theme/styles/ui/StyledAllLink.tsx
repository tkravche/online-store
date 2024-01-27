import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledAllLink = styled.div`
  ${tw`flex justify-end`}

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
