import { TabContext } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import {
  StyledAllLink,
  StyledSettingsSection,
  StyledTabPanel,
} from '@/theme/styles/components/StyledSettings';
import { StyledTabsList } from '@/theme/styles/components/StyledSettings';
import { Contact } from '@/components/Settings/Contact';
import { DeliveryAddress } from '@/components/Settings/DeliveryAddress';
import { Password } from '@/components/Settings/Password';
import { useAppSelector } from '@/hooks';
import { selectCurrentUser } from '@/lib/otherRedux/selectors';

export const SettingsPage: FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const name = currentUser.name;
  const phone = currentUser.phoneNumber;
  const address = currentUser.address;
  const [value, setValue] = useState('1'); //For Tabs
  //For Tabs
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledSettingsSection>
      <Typography variant="h1" component="h1" className="line-clamp-1" mb={3}>
        Settings
      </Typography>
      <Box>
        <TabContext value={value}>
          <Box>
            <StyledTabsList
              aria-label="Tabs"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              // sx={{
              //   [`@media (min-width: ${EnumBreakpoints.mobile})`]: {
              //     width: '200px',
              //   },
              //   [`@media (min-width: ${EnumBreakpoints.desktopSmall})`]: {
              //     width: '576px',
              //   },
              // }}
            >
              <Tab label="Contacts" value="1" />
              <Tab label="Delivery address" value="2" />
              <Tab label="Password" value="3" />
            </StyledTabsList>
          </Box>
          <StyledTabPanel value="1" sx={{ padding: '0px' }}>
            <Typography variant="body4">
              You can change your name and phone number here. Please note, this
              information will be used by the delivery service.
            </Typography>
            <Contact name={name} phone={phone} />
          </StyledTabPanel>
          <StyledTabPanel value="2" sx={{ padding: '0px' }}>
            <DeliveryAddress address={address} />
          </StyledTabPanel>
          <StyledTabPanel value="3" sx={{ padding: '0px' }}>
            <Typography variant="body4">
              You can change your password here.
            </Typography>
            <Password />
          </StyledTabPanel>
        </TabContext>
      </Box>
      <StyledAllLink>
        <Link to="/online-store/catalog">
          Back to the catalog
          {getIcon(EnumIcons.arrowLong)}
        </Link>
      </StyledAllLink>
    </StyledSettingsSection>
  );
};
