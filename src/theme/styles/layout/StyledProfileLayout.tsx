import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCartSection = styled.section`
  ${tw`mt-[160px]`}
  svg {
    ${tw`w-6 h-6 stroke-secondary-gray transition-all`}
  }
`;

export const StyledCartWrapper = styled.div`
  ${tw`grid grid-cols-[20%, auto] gap-x-20 mt-14`}

  .css-hyum1k-MuiToolbar-root {
    padding: 0px;
  }
`;

export const StyledUserAvatar = styled.div`
  ${tw`flex mb-1`}
`;

export const StyledCartLeftWrapper = styled.div`
  ${tw`py-8 px-6`}
`;

export const StyledCartRight = styled.div`
  ${tw`px-8`}
`;

export const StyledToolbar = styled(Toolbar)`
  ${tw`mt-4`}

  .MuiListItem-root:not(:last-child) {
    margin-bottom: 24px;
  }
  .MuiListItemIcon-root {
    min-width: 40px;
  }
  .MuiListItemButton-root {
    padding: 2px 110px 2px 16px;
    border-radius: 24px;
    border: 2px solid transparent;
  }
  .MuiListItemButton-root:hover {
    background-color: transparent;
    border: 2px solid #d25;
  }
  
  .icon-heart {
    ${tw`fill-secondary-gray`}
  }
  .icon-logOut {
    ${tw`stroke-secondary-gray`}
  }
  .active > .MuiListItemButton-root > .MuiListItemIcon-root > svg {
    ${tw`stroke-main-black`}
  }
  .active > .MuiListItemButton-root > .MuiListItemIcon-root > .icon-heart {
    ${tw`fill-main-black`}
  }
 
  svg:hover {
    stroke: black;
  }
`;

export const StyledToolbarLink = styled(NavLink)`
  ${tw``}
`;
