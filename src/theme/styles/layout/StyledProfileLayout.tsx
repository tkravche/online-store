import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledProfileSection = styled.div`
  ${tw`mt-[160px]`}
  svg {
    ${tw`w-6 h-6 stroke-secondary-gray transition-all`}
  }
`;

export const StyledProfileWrapper = styled.div`
  ${tw`grid grid-cols-[20%, auto] gap-x-20 mt-14`}

  .css-hyum1k-MuiToolbar-root {
    padding: 0px;
  }
`;

export const StyledUserAvatar = styled.div`
  ${tw`flex items-center mb-1 pl-4`}
  svg {
    stroke: #212121;
  }
`;

export const StyledProfileLeftWrapper = styled.div`
  ${tw`py-8 px-6 max-h-[423px] rounded-3xl bg-main-white`}
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
    color: #212121;
    svg {
      stroke: black;
    }
    .icon-heart {
      ${tw`fill-none`}
    }
  }
  .icon-heart {
    ${tw`fill-secondary-gray`}
  }
  .icon-logOut {
    ${tw`stroke-secondary-blue`}
  }
  .active > .MuiListItemButton-root > .MuiListItemIcon-root > svg {
    ${tw`stroke-main-black`}
  }
  .active > .MuiListItemButton-root > .MuiListItemIcon-root > .icon-heart {
    ${tw`fill-none`}
  }
`;

export const StyledToolbarLink = styled(NavLink)`
  ${tw`w-full`}
`;
