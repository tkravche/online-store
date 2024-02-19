import { TabList, TabPanel } from '@mui/lab';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledSettingsSection = styled.section`
  .MuiTabs-root {
    ${tw`min-h-[26px]` }
  }
`;
export const StyledTabsList = styled(TabList)`
  .MuiTab-root {
    text-transform: capitalize;
    ${tw`min-h-[26px]` }
  }
  .MuiTabs-flexContainer {
    gap: 56px;
  }
  .MuiButtonBase-root {
    padding: 0px;
  }
  .css-cat43h-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #212121;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  ${tw`mt-4 min-w-[340px] overflow-auto`}
`;
export const StyledSettingsForm = styled.form`
  ${tw`flex flex-col gap-y-4 mt-4 max-w-[340px]`}

  .MuiFormLabel-root {
    ${tw`relative font-lato text-sm text-main-black	translate-x-0	translate-y-0	scale-100`}
  }

  .MuiInputBase-root {
    ${tw`min-h-[40px] mt-1 px-6 border border-secondary-gray rounded-xl`}

    &::before,
  &::after {
      ${tw`hidden`}
    }
    .css-1x51dt5-MuiInputBase-input-MuiInput-input {
      ${tw`pb-2 pt-2`}
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px #f8faff inset;
      -webkit-text-fill-color: #000;
    }
  }

  .MuiInputAdornment-root {
    ${tw` w-6 h-6 mr-3`}

    svg {
      ${tw`stroke-secondary-gray`}
    }
  }
`;

export const StyledDeliveryAddressForm = styled.form`
  ${tw`grid grid-cols-2 gap-4 max-w-[1060px]`}

  .MuiFormLabel-root {
    ${tw`relative font-lato text-sm text-main-black	translate-x-0	translate-y-0	scale-100`}
  }

  .MuiInputBase-root {
    ${tw`min-h-[40px] mt-1 px-6 border border-secondary-gray rounded-xl`}

    &::before,
  &::after {
      ${tw`hidden`}
    }
    .css-1x51dt5-MuiInputBase-input-MuiInput-input {
      ${tw`pb-2 pt-2`}
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px #f8faff inset;
      -webkit-text-fill-color: #000;
    }
  }

  .MuiInputAdornment-root {
    ${tw` w-6 h-6 mr-3`}

    svg {
      ${tw`stroke-secondary-gray`}
    }
  }
`;

export const StyledAllLink = styled.div`
  ${tw`flex justify-end mt-14 mb-12`}

  a {
    ${tw`flex items-center gap-x-2  text-base text-[#878D99] font-bold transition-all`}

    &:hover {
      ${tw`text-main-red`}

      .icon-arrowLong {
        ${tw`stroke-main-red fill-main-red`}
      }
    }
  }

  .icon-arrowLong {
    ${tw`w-[48px]  stroke-1 stroke-[#878D99] fill-[#878D99] transition-all`}
  }
`;
