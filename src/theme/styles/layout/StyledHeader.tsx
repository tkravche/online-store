import { EnumBreakpoints } from '@/types';
import { Dialog, IconButton } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface StyledHeaderSearchProps {
  open?: boolean;
}

export const StyledHeader = styled.header`
  ${tw`fixed top-0 inset-x-0 py-[22px] z-50`};
  background-image: linear-gradient(
    209deg,
    rgba(251, 251, 251, 0.9) 0%,
    rgba(251, 251, 251, 0.64) 54.41%,
    rgba(251, 251, 251, 0.4) 100%
  );
box-shadow: 0px 4px 16px 0px rgba(128, 131, 255, 0.16); 
  &::before {
    ${tw`content-[''] absolute inset-y-0 inset-x-0 backdrop-blur	overflow-hidden`}
  }

  .content {
    ${tw`relative flex items-center`}
  }
`;

export const StyledOptions = styled.div`
  ${tw`flex items-center gap-x-6`}

  @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
    margin-left: auto;
  }

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    ${tw`gap-x-4`}
  }

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`gap-x-2`}
  }

  svg {
    ${tw`w-6 h-6 stroke-main-black transition-all`}

    &.icon-cart {
      path:first-child {
        ${tw`fill-main-black`}
      }
    }
  }

  .MuiIconButton-root {
    ${tw`p-0 cursor-pointer`}

    &:hover {
      background-color: transparent;

      svg {
        ${tw`stroke-main-red`}

        &.icon-cart {
          path:first-child {
            ${tw`fill-main-red`}
          }
        }
      }
    }

    .MuiTouchRipple-root {
      span {
        ${tw`scale-50	text-main-red`}
      }
    }
  }

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    svg {
      ${tw`w-6 h-6`}
    }
  }
`;

export const StyledSearchDialog = styled(Dialog)<StyledHeaderSearchProps>`
  .MuiBackdrop-root {
    ${tw`bg-main-transparent`}
  }

  .MuiDialog-container {
    ${tw`h-auto`}
  }

  .MuiPaper-root {
    ${tw`max-w-full w-full m-0 bg-main-transparent shadow-none rounded-none`}
  }
`;

export const StyledHeaderSearch = styled.div`
  ${tw`py-12 z-[1000] bg-main-white`}

  @media (max-width: ${EnumBreakpoints.tablet}) {
    ${tw`mt-4 py-2`}
  }

  .search-content {
    ${tw`flex items-center`}
  }

  .MuiFormControl-root {
    ${tw`relative z-20 w-[1390px] mx-auto`}

    @media (max-width: ${EnumBreakpoints.tablet}) {
      ${tw`w-full`}
    }
  }

  .css-9b3yv1-MuiInputBase-root-MuiOutlinedInput-root {
    ${tw`rounded-3xl mr-24`}
    .icon-search {
      ${tw`w-8 h-8 pr-2 stroke-main-black`}
    }
   }
  .MuiButtonBase-root {
    ${tw`p-0 cursor-pointer`}

    svg {
      ${tw`w-6 h-6 stroke-secondary-gray`}
    }

        &:hover {
      ${tw`bg-main-transparent`}
    }

    .MuiTouchRipple-root {
      span {
        ${tw`scale-50	text-secondary-gray`}
      }
    }
  }
`;

export const StyledNav = styled.nav`
  margin: 0 auto;

  @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
    ${tw`hidden`}
  }

  .list {
    ${tw`flex items-center gap-x-8`}
  }

  a {
    ${tw`relative block`}

    &::after {
      ${tw`content-[""] absolute top-[calc(100% + 4px)]  right-0 left-0 h-[1px] bg-main-red opacity-0	transition-all duration-300`}
    }

    &:hover,
    &:active {
      &::after {
        ${tw`opacity-50`}
      }
    }

    &.active {
      &::after {
        ${tw`opacity-100`}
      }
    }
  }
`;

export const StyledNavButton = styled(IconButton)`
  ${tw`cursor-pointer`}
`;
