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

export const SettingsPage: FC = () => {
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
            <Contact />
            {/* <StyledSettingsForm
              onSubmit={form.handleSubmit(handleSendSubmit as any)}
            >
              <Field
                id="name"
                type="text"
                label="Enter your full name"
                icon="user"
                placeholder="Full name"
                error={form.formState.errors.name}
                register={form.register('name')}
              />
              <Field
                id="phone"
                type="phone"
                label="Enter your phone number"
                icon="edit"
                placeholder="(_ _ _)_ _ _   _ _    _ _"
                error={form.formState.errors.phone}
                register={form.register('phone')}
              />
              <Button
                disabled={disabled}
                variant="contained"
                sx={{ maxWidth: '188px' }}
              >
                <span>Save</span>
              </Button>
            </StyledSettingsForm> */}
          </StyledTabPanel>
          <StyledTabPanel value="2" sx={{ padding: '0px' }}>
            <DeliveryAddress />
            {/* <StyledDeliveryAddressForm
              onSubmit={form.handleSubmit(handleSendSubmit as any)}
            >
              <Field
                id="country"
                type="text"
                label="Enter your country"
                icon="search"
                placeholder="Country"
                error={form.formState.errors.country}
                register={form.register('country')}
              />
              <Field
                id="postcode"
                type="text"
                label="Enter your postcode"
                icon="edit"
                placeholder="_ _ _ _ _ _ _ _"
                error={form.formState.errors.postCode}
                register={form.register('postCode')}
              />
              <Field
                id="settlement"
                type="text"
                label="Enter your settlement"
                icon="search"
                placeholder="Settlement"
                error={form.formState.errors.settlement}
                register={form.register('settlement')}
              />
              <Field
                id="street"
                type="text"
                label="Enter your street and building number"
                icon="edit"
                placeholder="Current street and building number"
                error={form.formState.errors.street}
                register={form.register('street')}
              />
              <Button
                disabled={disabledAddress}
                variant="contained"
                sx={{ maxWidth: '188px' }}
              >
                <span>Confirm</span>
              </Button>
            </StyledDeliveryAddressForm> */}
          </StyledTabPanel>
          <StyledTabPanel value="3" sx={{ padding: '0px' }}>
            <Typography variant="body4">
              You can change your password here.
            </Typography>
            <Password />
            {/* <StyledSettingsForm
              onSubmit={form.handleSubmit(handleSendSubmit as any)}
            >
              <Field
                id="password"
                type="password"
                label="Enter your password"
                icon="password"
                placeholder="***********"
                error={form.formState.errors.oldPassword}
                register={form.register('oldPassword')}
              />
              <Field
                id="newPassword"
                type="password"
                label="Create a new password"
                icon="password"
                placeholder="***********"
                error={form.formState.errors.newPassword}
                register={form.register('newPassword')}
              />
              <Field
                id="confirmPassword"
                type="password"
                label="Confirm a new password"
                icon="password"
                placeholder="***********"
                error={form.formState.errors.confirm}
                register={form.register('confirm')}
              />
              <Button
                disabled={disabledPass}
                type="submit"
                variant="contained"
                sx={{ maxWidth: '188px' }}
              >
                <span>Confirm</span>
              </Button>
            </StyledSettingsForm> */}
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
