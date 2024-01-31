import { Dialog, DialogContent, Typography } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledAuthorization = styled(Dialog)`
  .MuiPaper-root {
    ${tw`flex max-w-full mx-4 my-4 xl:mx-8 xl:my-8 rounded-3xl`}
  }
`;

export const StyledAuthorizationContainer = styled(DialogContent)`
  &.MuiDialogContent-root {
    ${tw`flex w-full lg:w-[840px] 2xl:w-[990px] p-0 bg-secondary-bg`}
  }
`;

export const StyledAuthorizationContent = styled.div`
  ${tw`flex flex-col justify-start w-full lg:w-1/2	gap-y-4 px-5 lg:px-16 py-10`}
`;

export const StyledAuthorizationTitle = styled(Typography)`
  &.title {
    ${tw`block font-bold text-center`}
  }
`;

export const StyledAuthorizationImg = styled.div`
  ${tw`hidden lg:block w-1/2`}
`;

export const StyledForgotPassText = styled(Typography)`
  ${tw`block text-sm text-center`}

  a {
    ${tw`text-secondary-blue`}
  }
`;

export const StyledAuthorizationForm = styled.form`
  ${tw`flex flex-col gap-y-2`}

  .MuiFormLabel-root {
    ${tw`relative font-lato text-sm text-main-black	translate-x-0	translate-y-0	scale-100`}
  }

  .MuiInputBase-root {
    ${tw`min-h-[40px] mt-1 px-6 border border-secondary-gray rounded-xl`}

    &::before,
    &::after {
      ${tw`hidden`}
    }
    .css-1x51dt5-MuiInputBase-input-MuiInput-input { ${tw`pb-2 pt-2`}}

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px #f8faff inset;
      -webkit-text-fill-color: #000;
    }
  }

  .MuiInputAdornment-root {
    ${tw` w-6 h-6`}

    svg {
      ${tw`stroke-secondary-gray`}
    }
  }
`;
