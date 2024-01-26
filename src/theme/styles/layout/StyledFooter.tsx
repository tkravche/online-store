import bg from '@/assets/footer-bg.jpg';
import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledFooter = styled.footer`
  ${tw`relative z-10 py-10 bg-main-white `}

  &::after {
    ${tw`content-[''] absolute inset-y-0 inset-x-0 z-[-1] bg-cover	bg-no-repeat opacity-[0.16]`}
    background-image: url(${bg});
  }

  h3.MuiTypography-body1 {
    ${tw`font-bold`}
  }
`;
export const StyledSocials = styled.div`
  ${tw`mt-6`}

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`mt-8`}
  }

  ul {
    ${tw`mt-4`}
  }

  a {
    &:hover {
      svg {
        ${tw`stroke-main-red`}
      }
    }

    &:active {
      svg {
        ${tw`stroke-main-darkRed`}
      }
    }
  }

  svg {
    ${tw`w-6 h-6 stroke-main-black transition-all`}

    &.icon-yt {
      path {
        &:first-child {
          ${tw`fill-main-black`}
        }
      }
    }
  }
`;

export const StyledMenu = styled.div`
  &:not(:last-child) {
    ${tw`mr-5`}

    @media (max-width: ${EnumBreakpoints.mobile}) {
      ${tw`flex-1	mr-2.5`}
    }
  }

  ul {
    ${tw`mt-4`}
  }

  li {
     ${tw`border-b border-main-transparent hover:border-b hover:border-main-red transition-all`}
    &:not(:last-child) {
      ${tw`mb-3`}
    }
  }
`;

export const StyledCopyright = styled.div`
  ${tw`block mt-4 text-sm opacity-80`}
`;
