import {
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import tw from 'twin.macro';

// Cart
export const StyledCartSection = styled.section`
  ${tw``}
`;

export const StyledCartLeftWrapper = styled.div`
  ${tw`grid grid-cols-[68%, auto] gap-x-5 mt-6`}
`;

// CartContent

export const StyledCartItemsContainer = styled.div`
  ${tw`p-2 bg-main-white rounded-3xl`}
`;

export const StyledCartItemsWrapper = styled.div`
  ${tw`grid auto-rows-fr rounded gap-x-6`}
`;

export const StyledNoCartItemsWrapper = styled.div`
  ${tw`flex flex-col items-start h-[300px]`}// ${tw`flex flex-col items-start min-w-[700px] min-h-[448px]`}
`;

export const StyledNoCartItems = styled.div`
  ${tw` mt-6 mb-10`}
`;
// export const StyledCatalogLink = styled.div`
//   ${tw`self-start py-1 px-9 rounded-xl text-base leading-8 text-main-white bg-main-black`}
// `;

export const StyledCartBottom = styled.div`
  ${tw`grid auto-rows-auto content-center px-8 mt-6`}
`;

export const StyledTotals = styled.div`
  ${tw``}
`;
export const StyledTotalsBox = styled.div`
  ${tw`flex max-h-[330px] flex-col p-8 mb-5 rounded-3xl bg-secondary-blue/20 `}
`;

export const StyledPromocode = styled.div`
  ${tw`flex flex items-end   gap-x-4 mb-6 `}
  .MuiOutlinedInput-root {
    ${tw`text-sm p-2 bg-main-white border-secondary-gray`}
`;
export const StyledPriceTotal = styled.div`
  ${tw`flex justify-between `}
`;
export const StyledSaleTotal = styled.div`
  ${tw`flex justify-between mb-2`}
`;
export const StyledTotal = styled.div`
  ${tw`flex justify-between `}
`;
export const StyledButtons = styled.div`
  ${tw`flex justify-center mt-6`}
`;
export const StyledContinueLink = styled(Link)`
  ${tw`text-base font-bold leading-8 text-[#878D99]`}
`;
export const StyledDeliveryDetails = styled.div`
  ${tw`pt-3 pb-6 px-6`}
`;
export const StyledDeliveryList = styled(List)``;
export const StyledDeliveryListItem = styled(ListItem)`
  .MuiTypography-root {
    ${tw`text-sm`}
  }
  svg {
    margin-right: 8px;
    height: 12px;
    fill: #d25;
    stroke: #d25;
  }
`;
// CartItem
export const StyledCartItemWrapper = styled.div`
  ${tw`grid grid-rows-1 md:grid-cols-[35.7% auto] justify-items-stretch md:items-center gap-x-6 py-6 px-8 border-b-[0.5px] border-solid border-[#8083FF] bg-main-white`}// box-shadow: 0px 4px 4px 0px rgba(128, 131, 255, 0.08);
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
export const StyledProductLink = styled(Link)`
  ${tw`cursor-pointer hover:underline`}
`;

export const StyledQuantity = styled.div`
  ${tw`flex items-center `}
`;

export const StyledQuantityButtons = styled.div`
  ${tw`flex  text-lg gap-x-2 rounded-lg border border-secondary-blue bg-secondary-bg`}
`;

export const StyledPlus = styled.div`
  ${tw`pr-4  font-semibold cursor-pointer transition-colors`}
  span:hover {
    color: #8083ff;
  }
`;
export const StyledMinus = styled.div`
  ${tw`pl-2 cursor-pointer font-semibold transition-colors`}
  font-size: 28px;
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
  ${tw` justify-self-end flex flex-col gap-y-2`}
`;

export const StyledQuantityAndPricesWrapper = styled.div`
  ${tw`grid auto-rows-auto`}
`;

export const StyledCartItemActions = styled.div`
  ${tw`flex gap-x-10`}
  svg {
    ${tw`w-6 h-6 `}
  }

  .MuiCheckbox-root {
    ${tw`stroke-[#878D99] transition-all px-2 py-0`}
  }
  .MuiCheckbox-root:hover {
    svg {
      ${tw`stroke-main-red`}
    }
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

export const StyledCheckbox = styled(Checkbox)``;

export const StyledIconButton = styled(IconButton)`
  .MuiButtonBase-root {
    ${tw`px-2 py-0`}
  }
  span {
    ${tw`text-sm ml-2`}
  }
  svg {
    ${tw`w-6 h-6 stroke-[#878D99] transition-all`}
  }
`;
