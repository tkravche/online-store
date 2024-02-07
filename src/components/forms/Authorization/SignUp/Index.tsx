import { FC } from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { getIcon } from '@/helpers/getIcon';
import { StyledAuthorizationForm } from '@/theme/styles/components/StyledAuthorization';
import { StyledDivider } from '@/theme/styles/ui/StyledDivider';
import { StyledGoogleBtn } from '@/theme/styles/ui/StyledGoogleLink';
import { EnumIcons } from '@/types';
import { Field } from '../../elements/Field';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/helpers/yup';
import { registerUser } from '@/lib/otherRedux/thunks/auth';
import { useAppDispatch } from '@/hooks';
import { setAuth } from '@/lib/otherRedux/slice/auth';

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const handleSendSubmit = async (data: ISignUp) => {
    await dispatch(registerUser(data));
  };
  let disabled = false;
  if (
    form.formState.errors.name ||
    form.formState.errors.email ||
    form.formState.errors.password ||
    form.formState.errors.confirm
  ) {
    disabled = true;
  }

  return (
    <StyledAuthorizationForm
      onSubmit={form.handleSubmit(handleSendSubmit as any)}
    >
      <Field
        id="name"
        type="text"
        label="User Name"
        icon="user"
        placeholder="Name"
        error={form.formState.errors.name}
        register={form.register('name')}
      />

      <Field
        id="email"
        type="email"
        label="E-mail"
        icon="mail"
        placeholder="example@example.com"
        error={form.formState.errors.email}
        register={form.register('email')}
      />

      <Field
        id="password"
        label="Create a Password"
        type="password"
        icon="password"
        placeholder="***********"
        error={form.formState.errors.password}
        register={form.register('password')}
      />

      <Field
        id="confirmPassword"
        label="Confirm Your Password"
        type="password"
        icon="password"
        placeholder="***********"
        error={form.formState.errors.confirm}
        register={form.register('confirm')}
      />

      <StyledDivider>
        <span>or</span>
      </StyledDivider>
      <StyledGoogleBtn>
        {getIcon(EnumIcons.google)}
        Sign Up with Google
      </StyledGoogleBtn>
      <Button type="submit" disabled={disabled} variant="contained">
        Registration
      </Button>
    </StyledAuthorizationForm>
  );
};
