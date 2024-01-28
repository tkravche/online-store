import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCategories = styled.section`
  ${tw`block w-full`}
`;

export const StyledCategoriesContainer = styled.div`
  ${tw`grid grid-cols-3	gap-5`}

  @media (max-width: ${EnumBreakpoints.desktopSmall}) {
    ${tw`grid-cols-2`}
  }

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`grid-cols-1`}
  }
`;

export const StyledCategory = styled.article`
  ${tw`block max-h-[266px]`}

  a {
    ${tw`relative block overflow-hidden rounded-3xl border-4 border-main-transparent`}
    
    &:hover {
      border: 4px solid #d25;
    }

    &:hover {
      img {
        ${tw`scale-105`}
      }
    }
  }

  img {
    ${tw`object-cover object-center w-full h-full transition-all`}
  }

  .title {
    ${tw`absolute bottom-6 left-8 w-[calc(100% - 32px)] text-main-white`}
  }
`;
