import { navigation } from '@/configs/navigation';
import { navigationFaq } from '@/configs/navigationFaq';
import { getIcon } from '@/helpers/getIcon';
import {
  StyledCopyright,
  StyledFooter,
  StyledMenu,
  StyledSocials,
} from '@/theme/styles/layout/StyledFooter';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumIcons } from '@/types';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContainer>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} md={6}>
            <div className="flex flex-col h-full">
              <div
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Logo link="/online-store/" alt="City Wheels" />
              </div>
              <StyledSocials>
                <Typography variant="body1" component="h3">
                  Socials
                </Typography>
                <ul className="flex gap-x-2">
                  <li>
                    <Link to="/">{getIcon(EnumIcons.fb)}</Link>
                  </li>
                  <li>
                    <Link to="/">{getIcon(EnumIcons.inst)}</Link>
                  </li>
                  <li>
                    <Link to="/">{getIcon(EnumIcons.in)}</Link>
                  </li>
                  <li>
                    <Link to="/">{getIcon(EnumIcons.yt)}</Link>
                  </li>
                </ul>
              </StyledSocials>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex justify-start gap-x-[137px] sm:justify-end">
              <StyledMenu>
                <Typography variant="body1" component="h3">
                  Sitemap
                </Typography>
                <ul>
                  <li>
                    <Link to="/online-store/">
                      <Typography component="span">Home</Typography>
                    </Link>
                  </li>
                  {navigation.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path}>
                          <Typography component="span">{item.name}</Typography>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </StyledMenu>
              <StyledMenu>
                <Typography variant="body1" component="h3">
                  FAQ
                </Typography>
                <ul>
                  {navigationFaq.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path}>
                          <Typography component="span">{item.name}</Typography>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </StyledMenu>
            </div>
          </Grid>
        </Grid>
        <StyledCopyright>
          {year} © Team Challenge. All rights reserved.
        </StyledCopyright>
      </StyledContainer>
    </StyledFooter>
  );
};
