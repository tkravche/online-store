import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { getIcon } from '@/helpers/getIcon';
import {
  StyledHeader,
  StyledNavButton,
  StyledOptions,
} from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons } from '@/types';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Badge, IconButton, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderSearch } from './HeaderSearch';
import { HeaderSearchModal } from './HeaderSearchModal';
import { setHeaderSearch } from '@/lib/otherRedux/slice/header';

import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '@/lib/otherRedux/selectors';
import { setAuth } from '@/lib/otherRedux/slice/auth';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const badgeQuantity = useSelector(selectCart).length;

  const isTabletPortraitScreen = useMediaQuery(
    `(max-width: ${EnumBreakpoints.tabletPortrait})`
  );

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );

  const handleSearchBtnClick = () => {
    dispatch(setHeaderSearch(true));
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <div className="content">
          {isTabletPortraitScreen && (
            <StyledNavButton onClick={() => setOpen(!open)}>
              {!open ? <MenuIcon /> : <MenuOpenIcon />}
            </StyledNavButton>
          )}

          <Logo link="/online-store/" alt="City Wheels" />

          <Navigation />
          <StyledOptions>
            {isMobileScreen && (
              <IconButton onClick={handleSearchBtnClick}>
                {getIcon(EnumIcons.search)}
              </IconButton>
            )}
            <IconButton>{getIcon(EnumIcons.heart)}</IconButton>
            <Badge
              badgeContent={badgeQuantity}
              color="error"
              overlap="rectangular"
            >
              <IconButton>
                <Link to="profile">{getIcon(EnumIcons.cart)} </Link>
              </IconButton>
            </Badge>

            <IconButton onClick={() => dispatch(setAuth(true))}>
              {getIcon(EnumIcons.user)}
            </IconButton>
          </StyledOptions>
        </div>
      </StyledContainer>
      {!isMobileScreen ? <HeaderSearch /> : <HeaderSearchModal />}
    </StyledHeader>
  );
};
