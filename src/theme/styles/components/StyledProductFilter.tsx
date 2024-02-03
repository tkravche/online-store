import { Button, Slider, Typography } from '@mui/material';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledFiltersTitle = styled.h3`
    ${tw`text-[#FBFBFB] bg-main-black rounded-t-lg px-6 py-4`}}
 }
`;
export const StyledFiltersWrapper = styled.h3`
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
  ${tw`px-2 py-1`}
  border-radius: 4px;
  border: 1px solid #e2e7f1;
  background: #e2e7f1;
  color: #878d99;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 140%;
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
    ${tw`text-main-darkRed`}
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
    ${tw`flex flex-row gap-x-3`}}
 }
`;
export const StyledPriceNumberInput = styled(BaseNumberInput)`
    ${tw``}
    .MuiNumberInput-input{
        border-radius: 4px; 
        border: 1px solid #878D99;
        width: 80px;
        text-align: center;
           }
     }
`;

//Accordion

export const StyledAccordions = styled.div`
  ${tw`mb-4`}
  .css-1c35hjw-MuiPaper-root-MuiAccordion-root.Mui-expanded {
    ${tw`m-0`}
  }
  .css-1c35hjw-MuiPaper-root-MuiAccordion-root {
    ${tw`mb-4 shadow-none`}
  }

  .MuiAccordionSummary-root {
    ${tw`bg-[#E2E7F1] px-6`}
  }
  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 0px;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    ${tw`my-3`}
  }
  .css-15v22id-MuiAccordionDetails-root {
    padding: 4px 24px;
  }
`;
export const StyledFormControl = styled.div`
  ${tw`flex justify-between items-center px-2`}
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root:hover {
    background-color: transparent;
  }
  .Mui-checked {
    svg {
      ${tw`fill-secondary-gray`}
    }
  }
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
  ${tw`flex justify-end`}
  .css-hwqssc-MuiButtonBase-root-MuiButton-root {
    ${tw`text-[#212121] font-normal text-sm cursor-pointer p-0`}
  }
  .css-hwqssc-MuiButtonBase-root-MuiButton-root:hover {
    ${tw`bg-main-transparent`}
  }
  svg {
    ${tw`w-6 h-6 stroke-secondary-gray`}
  }
`;
export const StyledButton = styled(Button)`
  ${tw`cursor-pointer`}
`;