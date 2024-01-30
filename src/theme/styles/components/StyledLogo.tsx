import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledLogo = styled.div`
  ${tw`max-w-[110px]`}

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    ${tw`max-w-[100px]`}
  }

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`max-w-[70px]`}
  }
`;
