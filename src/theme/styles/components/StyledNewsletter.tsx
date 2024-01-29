import { EnumBreakpoints } from '@/types';
import { Dialog, IconButton } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledNewsletter = styled.div`
  ${tw`pt-16 pb-14 bg-main-white`}

  .content {
    ${tw`w-[460px] mx-auto`}

    @media (max-width: ${EnumBreakpoints.mobile}) {
      ${tw`w-full`}
    }
  }

  .title {
    &:not(:last-child) {
      ${tw`block mb-4`}
    }
  }

  .subtitle {
    ${tw`opacity-70	`}

    &:not(:last-child) {
      ${tw`block mb-4`}
    }
  }

  form {
    ${tw`flex gap-x-2`}

    .MuiFormControl-root {
      ${tw`flex-1`}
    }

    .MuiInputBase-root {
      ${tw`border-main-black`}
    }

    .MuiInputAdornment-root {
      svg {
        ${tw`stroke-main-black`}
      }
    }

    .MuiInputBase-input {
      ${tw`text-sm`}
    }
  }
`;

export const StyledNewsletterButton = styled(IconButton)`
  &.MuiButtonBase-root {
    ${tw`px-2 py-2 rounded-xl border border-solid border-main-black cursor-pointer transition-all`}
    svg {
      ${tw`w-[23px] h-[22px] stroke-main-black`}
    }
  }

  &.MuiButtonBase-root:hover {
    ${tw`border border-solid border-main-red bg-main-transparent`}

    svg {
      ${tw`stroke-main-red`};
    }
  }
`;

export const StyledNSDialog = styled(Dialog)`
  .MuiPaper-root {
    ${tw`flex items-center max-w-[460px] text-center rounded-3xl px-14 py-16 bg-secondary-bg`}
    .icon-check {
      ${tw`w-10 h-10 stroke-secondary-green`}
    }
  }
`;
