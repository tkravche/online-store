import { Button } from '@mui/material';
import { Field } from '@/components/forms/elements/Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import { StyledSettingsForm } from '@/theme/styles/components/StyledSettings';
import { updateContactSchema } from '@/helpers/yup';
import { useAppDispatch } from '@/hooks';
import { updateUserThunk } from '@/lib/otherRedux/thunks/user';


export interface IChangeContact {
  name: null | string;
  phoneNumber: null | string;
  country: null | string;
  city: null | string;
  postCode: null | string;
  street: null | string;
}

export interface IContactsProps {
  name: string;
  phone: null | string;
}

export const Contact: FC<IContactsProps> = ({ name, phone }) => {
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(updateContactSchema),
  });

  //Disable button
  let disabled = false;
  if (form.formState.errors.name || form.formState.errors.phoneNumber) {
    disabled = true;
  }

  // Check if values have changed
  const [initialValues] = useState<IChangeContact>({
    name: name || '',
    phoneNumber: phone || '',
    country: '',
    city: '',
    postCode: '',
    street: '',
  });
  const valuesChanged =
    form.getValues('name') !== initialValues.name ||
    form.getValues('phoneNumber') !== initialValues.phoneNumber;

  const handleSendSubmit = async (data: IChangeContact) => {
    if (valuesChanged) {
      await dispatch(updateUserThunk(data));
    } else {
      // Values haven't changed, show an alert
      toast.info('Please change the info before submitting it.', {});
    }
  };

  return (
    <StyledSettingsForm onSubmit={form.handleSubmit(handleSendSubmit as any)}>
      <Field
        id="name"
        defaultValue={name}
        type="text"
        label="Enter your full name"
        icon="user"
        placeholder="Full name"
        error={form.formState.errors.name}
        register={form.register('name')}
      />
      <Field
        id="phoneNumber"
        defaultValue={phone}
        type="tel"
        label="Enter your phone number"
        icon="edit"
        placeholder="+ _ _ - _ _ _ _ - _ _ _- _ _ _"
        error={form.formState.errors.phoneNumber}
        register={form.register('phoneNumber')}
      />
      <Button
        type="submit"
        disabled={disabled}
        variant="contained"
        sx={{ maxWidth: '188px' }}
      >
        <span>Save</span>
      </Button>
    </StyledSettingsForm>
  );
};
