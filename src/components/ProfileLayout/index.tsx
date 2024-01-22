import { FC } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import {
  Breadcrumbs,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { EnumIcons } from '@/types';
import { getIcon } from '@/helpers/getIcon';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import {
  StyledCartSection,
  StyledCartWrapper,
  StyledCartLeftWrapper,
  StyledToolbar,
  StyledUserAvatar,
  StyledToolbarLink,
} from '@/theme/styles/layout/StyledProfileLayout';
import { selectIsLogged } from '@/lib/otherRedux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const ProfileLayout: FC = () => {
  const pathname = useLocation().pathname;
  const lastSlash = pathname.lastIndexOf('/');
  let location = pathname.slice(lastSlash + 1);
  if (location === 'profile') {
    location = 'cart';
  }
  // const isLogged = useSelector(selectIsLogged);
  const isLogged = true;
  return (
    <StyledCartSection>
      <StyledContainer>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography
            color="text.primary"
            className="line-clamp-1"
            sx={{ textTransform: 'capitalize' }}
          >
            {location}
          </Typography>
        </Breadcrumbs>
        <StyledCartWrapper>
          <StyledCartLeftWrapper>
            <StyledUserAvatar>
              {getIcon(EnumIcons.user)}
              {!isLogged ? (
                <Typography ml={1}>No Name</Typography>
              ) : (
                <Typography ml={1}>Name</Typography>
              )}
            </StyledUserAvatar>
            {!isLogged ? (
              <Typography mt={2}>
                Log in to the site for your convenience.
              </Typography>
            ) : (
              <Typography>email@email.com</Typography>
            )}
            {isLogged && (
              <StyledToolbar>
                <List>
                  <ListItem disablePadding>
                    <StyledToolbarLink
                      to="cart"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? '#212121' : '#878D99',
                        };
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>{getIcon(EnumIcons.cart)}</ListItemIcon>
                        <ListItemText primary={'Cart'} />
                      </ListItemButton>
                    </StyledToolbarLink>
                  </ListItem>
                  <ListItem disablePadding>
                    <StyledToolbarLink
                      to="orders"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? '#212121' : '#878D99',
                        };
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>{getIcon(EnumIcons.orders)}</ListItemIcon>
                        <ListItemText primary={'Orders'} />
                      </ListItemButton>
                    </StyledToolbarLink>
                  </ListItem>
                  <ListItem disablePadding>
                    <StyledToolbarLink
                      to="favorites"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? '#212121' : '#878D99',
                        };
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>{getIcon(EnumIcons.heart)}</ListItemIcon>
                        <ListItemText primary={'Favorites'} />
                      </ListItemButton>
                    </StyledToolbarLink>
                  </ListItem>
                  <ListItem disablePadding>
                    <StyledToolbarLink
                      to="settings"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? '#212121' : '#878D99',
                        };
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {getIcon(EnumIcons.setting)}
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                      </ListItemButton>{' '}
                    </StyledToolbarLink>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{getIcon(EnumIcons.logOut)}</ListItemIcon>
                      <ListItemText
                        primary={'Log out'}
                        sx={{ color: '#878D99' }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </StyledToolbar>
            )}
          </StyledCartLeftWrapper>
          <Outlet />
        </StyledCartWrapper>
      </StyledContainer>
    </StyledCartSection>
  );
};
