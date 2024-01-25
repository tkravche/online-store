import { Dialog, Rating, TextareaAutosize } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';


export const StyledDialog = styled(Dialog)`
.MuiPaper-root {
   ${tw`max-w-[700px] rounded-3xl p-10 pt-16 bg-secondary-bg`}
  
`;

export const StyledReviewPopUpTop = styled.div`
  ${tw`grid grid-cols-1 gap-x-5 mb-4 md:grid-cols-[37%_auto]`}
`;

export const StyledReviewRating = styled.div`
  ${tw` grid grid-cols-[35%_auto] gap-x-2 content-center items-center mt-1`}
`;
export const StyledRating = styled(Rating)``;

export const StyledReviewPopUpWrapper = styled.div`
  ${tw`grid grid-cols-1 gap-x-5 md:grid-cols-[37%_auto]`}
`;

export const StyledProductInfo = styled.div`
  ${tw`max-h-[320px] w-[335px] md:w-[220px] grid grid-rows-[auto_22%] gap-y-4 rounded-3xl py-3 pt-14 px-2 bg-main-white`}
`;

export const StyledReviewInfo = styled.div`
  ${tw`mt-3 md:mt-0 pr-5`}
`;

export const StyledTextArea = styled(TextareaAutosize)`
  width: 335px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #8083ff;
  &:hover {
    border: 1px solid #ffd700;
  }
  &:focus {
    border: 1px solid yellow;
  }
`;

export const StyledDialogActions = styled.div`
  ${tw`grid grid-cols-2 gap-x-4`}
`;
