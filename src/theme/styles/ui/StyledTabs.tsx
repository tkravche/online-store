import { TabList, TabPanel } from '@mui/lab';
import { List } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledTabsList = styled(TabList)`
  .MuiTab-root {
    text-transform: capitalize;
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

export const StyledList = styled(List)`
  ${tw`grid grid-cols-2 gap-x-5 gap-y-2 p-10 mb-4`}

  .MuiListItemText-root{
    margin: 0;  
  }
  .MuiTypography-root{
    font-size: 14px;
    line-height: 140%';
  }
  .icon-dot {
    margin-right: 8px;
    height: 12px;
    fill: #d25;
    stroke: #d25;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
${tw`max-w-[690px] h-[245px] overflow-auto`}
  `;
