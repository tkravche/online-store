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
import { HeaderSearch } from './HeaderSearch';
import { HeaderSearchModal } from './HeaderSearchModal';
import { setHeaderSearch } from '@/lib/otherRedux/slice/header';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart, selectIsLogged } from '@/lib/otherRedux/selectors';
import { setAuth } from '@/lib/otherRedux/slice/auth';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { toast } from 'react-toastify';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectIsLogged);
  const badgeQuantity = useSelector(selectCart).length;
  const navigate = useNavigate();
  const isTabletPortraitScreen = useMediaQuery(
    `(max-width: ${EnumBreakpoints.tabletPortrait})`
  );

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );

  const handleSearchBtnClick = () => {
    dispatch(setHeaderSearch(true));
  };
  const handleClick = () => {
    if (!isLogged) {
      toast.info('You need to be logged in to see your favorites!', {});
    } else {
      navigate('profile/favorites');
    }
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
            <IconButton onClick={handleClick}>
              {getIcon(EnumIcons.heart)}
            </IconButton>
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
