import {
  AccordionDetails,
  Button,
  Input,
  Slider,
  Typography,
} from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledFiltersTitle = styled.h3`
    ${tw`text-[#FBFBFB] bg-main-black rounded-t-lg px-6 py-4`}}
     }
`;
export const StyledFiltersWrapper = styled.div`
    ${tw`px-6 py-4`}}
 }
`;
export const StyledSaleFilter = styled.div`
  ${tw`flex justify-between items-center mb-8 text-main-red`}
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root:hover {
    background-color: transparent;
  }
  .Mui-checked {
    svg {
      ${tw`fill-secondary-gray`}
    }
  }
  .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
    // ${tw`text-main-red`}
  }
`;

export const StyledFilteredNumber = styled.span`
  ${tw`px-[6px] py-1`}
  border-radius: 4px;
  border: 1px solid #e2e7f1;
  background: #e2e7f1;
  color: #878d99;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 140%;
  tex-align: center;
`;
//Slider
export const StyledPriceSliderWrapper = styled.div`
    ${tw``}}
 }
`;
export const StyledSetPrice = styled(Typography)`
    ${tw`text-main-black`}}
 }
`;
export const StyledPriceSlider = styled(Slider)`
  span {
    ${tw`text-main-red`}
  }
  .MuiSlider-rail {
    ${tw`text-[#E2E7F1]`}
  }
  .MuiSlider-thumb {
    ${tw`text-main-white border-[1px] border-main-darkRed`}
  }
  .MuiSlider-thumb:hover {
    ${tw`shadow-none`}
  }
  .MuiSlider-thumb:focus-within {
    ${tw`shadow-none`}
  }
  .MuiSlider-valueLabelLabel {
    ${tw`text-main-white`}
  }
  .MuiSlider-valueLabel {
    ${tw`bg-secondary-gray`}
  }
`;
export const StyledPriceNumberInputWrapper = styled.div`
    ${tw`flex sm:flex-col lg:flex-row items-center gap-x-3`}}
 }
`;
export const StyledPriceNumberInput = styled(Input)`
  .MuiInput-input {
    border-radius: 4px;
    border: 1px solid #878d99;
    width: 80px;
    text-align: center;
  }
`;

//Accordion

export const StyledAccordions = styled.div`
  .css-1c35hjw-MuiPaper-root-MuiAccordion-root.Mui-expanded {
    ${tw`m-0`}
  }
  .css-1c35hjw-MuiPaper-root-MuiAccordion-root {
    ${tw`mb-4 shadow-none`}
  }
  .css-1wz20g3 {
    ${tw`mb-4 shadow-none`}
  }
  .MuiAccordionSummary-root {
    ${tw`bg-[#E6E7FF] px-6`}
  }
  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 0px;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    ${tw`my-3`}
  }
  .css-15v22id-MuiAccordionDetails-root {
    ${tw`pt-1 pb-0 px-6`}
  }
  .MuiFormGroup-root {
    ${tw`md:w-[158px] lg:w-[175px] xl:w-[225px] 2xl:w-[300px]`}
     }
    
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  ${tw`flex items-center`}
  .MuiFormGroup-root {
    ${tw`pb-0`}
  }
   .MuiRadio-root {
    color: #878d99;
  }
  .MuiRadio-root.Mui-checked {
    color: #878d99;
  }
`;

export const StyledCategoryFilter = styled.div`
  ${tw`flex justify-between items-center`}
   
`;

export const StyledAccordionRatingDetails = styled(AccordionDetails)`
  ${tw`flex justify-between items-center pb-10`}
  .MuiFormGroup-root {
    ${tw`pb-4`}
  }
  .MuiRadio-root {
    ${tw`py-1`}
  }
  .MuiRadio-root {
    color: #878d99;
  }
  .MuiRadio-root.Mui-checked {
    color: #878d99;
  }
`;

export const StyledRatingFilter = styled.div`
  ${tw`flex lg:gap-x-6 xl:gap-x-14 2xl:justify-between items-center  `}
`;

export const StyledFilteredRating = styled.div`
  ${tw`flex gap-x-2`}
  svg {
    ${tw`stroke-secondary-yellow fill-secondary-yellow`}
  }
}
`;
export const StyledEmptyStar = styled.div`
    svg {
      ${tw`stroke-secondary-yellow fill-main-transparent`}
    }
  }
`;

export const StyledResetButton = styled.div`
  ${tw`flex justify-end bg-main-white pt-4`}
  .MuiButton-root {
    ${tw`text-[#212121] font-normal text-sm cursor-pointer p-0`}
  }

  svg {
    ${tw`w-6 h-6 stroke-secondary-gray pr-1`}
  }
`;
export const StyledButton = styled(Button)`
  ${tw`cursor-pointer`}
  &:hover {
    ${tw`bg-main-transparent font-bold`}
  }
`;
