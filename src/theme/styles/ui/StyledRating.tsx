import { Rating } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledRating = styled(Rating)`
  .MuiRating-icon {
    ${tw`w-4 h-4`}

    svg {
      ${tw`stroke-secondary-yellow`}
    }
  }

  .MuiRating-iconFilled {
    svg {
      ${tw`stroke-secondary-yellow fill-secondary-yellow`}
    }
  }
`;
export const StyledText = styled.div`
${tw`max-w-[428px] max-h-[65px]`}
`;
