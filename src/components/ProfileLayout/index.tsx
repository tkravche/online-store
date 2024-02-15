import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
  StyledProfileLeftWrapper,
  StyledToolbar,
  StyledUserAvatar,
  StyledToolbarLink,
  StyledProfileSection,
  StyledProfileWrapper,
} from '@/theme/styles/layout/StyledProfileLayout';
import { selectCurrentUser, selectIsLogged } from '@/lib/otherRedux/selectors';
import { logoutUser } from '@/lib/otherRedux/slice/auth';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logoutCurrentUser } from '@/lib/otherRedux/slice/user';

export const ProfileLayout: FC = () => {
  const dispatch=useAppDispatch();

  const pathname = useLocation().pathname;
  const lastSlash = pathname.lastIndexOf('/');
  let location = pathname.slice(lastSlash + 1);
  if (location === 'profile') {
    location = 'cart';
  }
  const isLogged = useAppSelector(selectIsLogged);
  const name =useAppSelector(selectCurrentUser)?.name;
  const email =useAppSelector(selectCurrentUser)?.email;

  return (
    <StyledProfileSection>
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
        <StyledProfileWrapper>
          <StyledProfileLeftWrapper>
            <StyledUserAvatar>
              {getIcon(EnumIcons.user)}
              {!isLogged ? (
                
                <Typography
                  ml={1}
                  sx={{ fontWeight: '700', lineHeight: '200%' }}
                >
                  No Name
                </Typography>
              ) : (
                
                <Typography ml={1}sx={{ fontWeight: '700', lineHeight: '200%' }}>{name}</Typography>
              )}
            </StyledUserAvatar>
            {!isLogged ? (
              <Typography
                mt={2}
                variant="body1"
                component="p"
                sx={{ color: '#878D99' }}
              >
                Log in to the site for your convenience.
              </Typography>
            ) : (
              <Typography
                variant="body1"
                component="p"
                sx={{ color: '#878D99', paddingLeft: '16px' }}
              >
                {email}
              </Typography>
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
                          borderWidth: '2px',
                          borderStyle: isActive ? 'solid' : 'none',
                          borderColor: isActive ? '#D25' : 'transparent',
                          borderRadius: '24px',
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
                          borderWidth: '2px',
                          borderStyle: isActive ? 'solid' : 'none',
                          borderColor: isActive ? '#D25' : 'transparent',
                          borderRadius: '24px',
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
                          borderWidth: '2px',
                          borderStyle: isActive ? 'solid' : 'none',
                          borderColor: isActive ? '#D25' : 'transparent',
                          borderRadius: '24px',
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
                          borderWidth: '2px',
                          borderStyle: isActive ? 'solid' : 'none',
                          borderColor: isActive ? '#D25' : 'transparent',
                          borderRadius: '24px',
                        };
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {getIcon(EnumIcons.setting)}
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                      </ListItemButton>
                    </StyledToolbarLink>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>{dispatch(logoutUser()); dispatch(logoutCurrentUser());}}>
                      <ListItemIcon>{getIcon(EnumIcons.logOut)}</ListItemIcon>
                      <ListItemText
                        primary={'Log out'}
                        sx={{ color: '#8083FF' }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </StyledToolbar>
            )}
          </StyledProfileLeftWrapper>
          <Outlet />
        </StyledProfileWrapper>
      </StyledContainer>
    </StyledProfileSection>
  );
};
