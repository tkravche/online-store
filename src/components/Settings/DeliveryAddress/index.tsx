import { Button } from '@mui/material';
import { Field } from '@/components/forms/elements/Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { StyledDeliveryAddressForm } from '@/theme/styles/components/StyledSettings';
import { updateAddressSchema } from '@/helpers/yup';
import { useAppDispatch } from '@/hooks';
import { updateUserThunk } from '@/lib/otherRedux/thunks/user';

export interface IChangeAddress {
  name: null |string;
  phoneNumber: null |string;
  country: null | string;
  city: null |string;
  postCode: null |string;
  street: null |string;
}

export const DeliveryAddress = () => {
  const dispatch = useAppDispatch();
  
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(updateAddressSchema),
  });

  let disabledAddress = false;
  if (
    form.formState.errors.country ||
    form.formState.errors.city ||
    form.formState.errors.postCode ||
    form.formState.errors.street
  ) {
    disabledAddress = true;
  }

  const handleSendSubmit = async (data: IChangeAddress) => {
    await dispatch(updateUserThunk(data));
  };

  return (
    <StyledDeliveryAddressForm
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
        id="postCode"
        type="text"
        label="Enter your postcode"
        icon="edit"
        placeholder="_ _ _ _ _ _ _ _"
        error={form.formState.errors.postCode}
        register={form.register('postCode')}
      />
      <Field
        id="city"
        type="text"
        label="Enter your settlement"
        icon="search"
        placeholder="Settlement"
        error={form.formState.errors.city}
        register={form.register('city')}
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
        type="submit"
        disabled={disabledAddress}
        variant="contained"
        sx={{ maxWidth: '188px' }}
      >
        <span>Confirm</span>
      </Button>
    </StyledDeliveryAddressForm>
  );
};
