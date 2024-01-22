import { Dialog, FormControlLabel, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import tw from 'twin.macro';

// Cart
export const StyledCartSection = styled.section`
  ${tw`mt-[160px]`}
  svg {
    ${tw`w-6 h-6 stroke-main-black transition-all`}
  }
  .icon-heart {
    ${tw`fill-main-black`}
  }
`;

export const StyledCartWrapper = styled.div`
  ${tw`grid grid-cols-[20%, auto] gap-x-20`}
`;

export const StyledCartRight = styled.div`
  ${tw``}
`;

// CartItem
export const StyledCartItemWrapper = styled.div`
  ${tw`grid grid-rows-1 md:grid-cols-[35.7% auto] justify-items-stretch md:items-center gap-x-6 py-6 px-8 border-b-[0.5px] border-solid border-[#8083FF]`}
  box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08);
`;
export const StyledImageWrapper = styled.div`
  ${tw` max-w-[300px] justify-self-center mb-5 md:mb-0 md:max-w-[220px] px-2`}

  img {
    ${tw`max-h-[144px] md:object-contain md:w-full md:h-full`}
  }
`;
export const StyledCartItemInfo = styled.div`
  ${tw``}
`;
export const StyledQuantity = styled.div`
  ${tw`flex items-center bg-[#F8FAFF]`}
`;

export const StyledQuantityButtons = styled.div`
  ${tw`flex items-center gap-x-2 rounded-lg border border-[#8083FF]`}
`;

export const StyledPlus = styled.div`
  ${tw`pr-3 py-1 cursor-pointer transition-colors`}
  span:hover {
    color: #d25;
  }
`;
export const StyledMinus = styled.div`
  ${tw`pl-3 py-1 cursor-pointer transition-colors`}
  button:hover {
    color: #d25;
  }
  button:disabled,
  button[disabled] {
    color: #8083ff;
  }
`;
export const StyledQuantityNumber = styled.div`
  ${tw`text-center w-6`}
`;

export const StyledCartPrices = styled.div`
  ${tw`flex flex-col gap-y-2`}
`;

export const StyledQuantityAndPricesWrapper = styled.div`
  ${tw`flex justify-between`}
`;

export const StyledCartItemActions = styled.div`
  ${tw`flex gap-x-10`}
  svg {
    ${tw`w-6 h-6 `}
  }

  .MuiCheckbox-root {
    ${tw`stroke-[#878D99] transition-all`}
  }

  .MuiCheckbox-root:hover {
    ${tw`bg-main-transparent stroke-main-red`}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
  .MuiIconButton-root:hover {
    ${tw`bg-main-transparent`}
    svg {
      ${tw`stroke-main-red`}
    }
  }
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    ${tw`text-sm text-[#878D99]`}
  }
`;

export const StyledIconButton = styled(IconButton)`
  span {
    ${tw`text-sm ml-2`}
  }
  svg {
    ${tw`w-6 h-6 stroke-[#878D99] transition-all`}
  }
`;

// CartPopUp
export const StyledCartDialog = styled(Dialog)`
  .MuiPaper-root {
    ${tw`min-w-[700px] rounded-3xl pt-16 pb-10 bg-secondary-bg`}
  }
`;
export const StyledCartItemsWrapper = styled.div`
  ${tw`grid auto-rows-fr gap-x-6 mt-20 `}
`;

export const StyledNoCartItemsWrapper = styled.div`
  // ${tw`flex flex-col items-start px-8`}
  ${tw`flex flex-col items-start min-w-[700px] min-h-[448px] px-8`}
`;

export const StyledNoCartItems = styled.p`
  ${tw`mb-10`}
`;
export const StyledCatalogLink = styled.div`
  ${tw`self-start py-1 px-9 rounded-xl text-base leading-8 text-main-white bg-main-black`}
`;

export const StyledCartBottom = styled.div`
  ${tw`grid auto-rows-auto content-center px-8 mt-6`}
`;

export const StyledTotals = styled.div`
  ${tw`grid grid-cols-[auto 26%] `}
`;
export const StyledCol1 = styled.div`
  ${tw``}
`;
export const StyledCol2 = styled.div`
  ${tw``}
`;
export const StyledPriceTotal = styled.div`
  ${tw`flex justify-between mb-2`}
`;
export const StyledSaleTotal = styled.div`
  ${tw`flex justify-between mb-2`}
`;
export const StyledTotal = styled.div`
  ${tw`flex justify-between`}
`;
export const StyledDialogActions = styled.div`
  ${tw`grid grid-cols-[auto 26%] mt-6`}
`;
export const StyledContinueLink = styled(Link)`
  ${tw`text-base font-bold leading-8 text-[#878D99]`}
`;
