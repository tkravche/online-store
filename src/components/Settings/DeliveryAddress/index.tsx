import { Button } from '@mui/material';
import { Field } from '@/components/forms/elements/Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { StyledDeliveryAddressForm } from '@/theme/styles/components/StyledSettings';
import { updateAddressSchema } from '@/helpers/yup';
import { useAppDispatch } from '@/hooks';
import { updateUserThunk } from '@/lib/otherRedux/thunks/user';
import { FC } from 'react';

export interface IChangeAddress {
  name: null | string;
  phoneNumber: null | string;
  country: null | string;
  city: null | string;
  postCode: null | string;
  street: null | string;
}

export interface IAddressProps {
  address: null | {
    country: null | string;
    city: null | string;
    postCode: null | string;
    street: null | string;
  };
}

export const DeliveryAddress: FC<IAddressProps> = ({ address }) => {
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(updateAddressSchema),
  });
  const watchCountry = form.watch('country', address?.country);
  const watchCity = form.watch('city', address?.city);
  const watchPostCode = form.watch('postCode', address?.postCode);
  const watchStreet = form.watch('street', address?.street);

  //Disable button
  const disabledAddress =
    !!form.formState.errors.country ||
    !!form.formState.errors.city ||
    !!form.formState.errors.postCode ||
    !!form.formState.errors.street ||
    !form.formState.isDirty ||
    (watchCountry === address?.country &&
      watchCity === address?.city &&
      watchPostCode === address?.postCode &&
      watchStreet === address?.street);

  const handleSendSubmit = async (data: IChangeAddress) => {
    await dispatch(updateUserThunk(data));
  };

  return (
    <StyledDeliveryAddressForm
      onSubmit={form.handleSubmit(handleSendSubmit as any)}
    >
      <Field
        id="country"
        defaultValue={address?.country ?? ''}
        type="text"
        label="Enter your country"
        icon="search"
        placeholder="Country"
        error={form.formState.errors.country}
        register={form.register('country')}
      />
      <Field
        id="postCode"
        defaultValue={address?.postCode ?? ''}
        type="text"
        label="Enter your postcode"
        icon="edit"
        placeholder="_ _ _ _ _ _ _ _"
        error={form.formState.errors.postCode}
        register={form.register('postCode')}
      />
      <Field
        id="city"
        defaultValue={address?.city ?? ''}
        type="text"
        label="Enter your settlement"
        icon="search"
        placeholder="Settlement"
        error={form.formState.errors.city}
        register={form.register('city')}
      />
      <Field
        id="street"
        defaultValue={address?.street ?? ''}
        type="text"
        label="Enter your street and building number"
        icon="edit"
        placeholder="Current street and building number"
        error={form.formState.errors.street}
        register={form.register('street')}
      />
      <Button
        type="submit"
        disabled={disabledAddress}
        variant="contained"
        sx={{ maxWidth: '188px' }}
      >
        <span>Save</span>
      </Button>
    </StyledDeliveryAddressForm>
  );
};
