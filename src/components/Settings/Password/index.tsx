import { Button } from '@mui/material';
import { Field } from '@/components/forms/elements/Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { StyledSettingsForm } from '@/theme/styles/components/StyledSettings';
import { updatePasswordSchema } from '@/helpers/yup';
import { useAppDispatch } from '@/hooks';
import { changePasswordThunk } from '@/lib/otherRedux/thunks/auth';

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirm: string;
}

export const Password = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(updatePasswordSchema),
  });

  let disabledPass = false;
  if (
    form.formState.errors.oldPassword ||
    form.formState.errors.newPassword ||
    form.formState.errors.confirm
  ) {
    disabledPass = true;
  }

  const handleSendSubmit = async (data: IChangePassword) => {
    await dispatch(changePasswordThunk(data));
  };

  return (
    <StyledSettingsForm onSubmit={form.handleSubmit(handleSendSubmit as any)}>
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
    </StyledSettingsForm>
  );
};
