import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledProductSection = styled.section`
  ${tw`flex flex-col gap-y-6`}

  .slick-slider {
    ${tw`relative`}

    .button {
      ${tw`absolute top-1/2 -left-10 -translate-y-2/4 `}
    }

    .button-next {
      ${tw`absolute -right-10 left-auto`}
    }

    .MuiIconButton-root {
      ${tw`w-6 h-6 p-0`}

      svg {
        ${tw`stroke-secondary-gray`}
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
