import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

import { getIcon } from '@/helpers/getIcon';
import {
  StyledAuthorizationForm,
  StyledForgotPassText,
} from '@/theme/styles/components/StyledAuthorization';
import { StyledDivider } from '@/theme/styles/ui/StyledDivider';
import { StyledGoogleBtn } from '@/theme/styles/ui/StyledGoogleLink';
import { EnumIcons } from '@/types';
import { Field } from '../../elements/Field';
import { loginUser } from '@/lib/otherRedux/thunks/auth';
import { setAuth } from '@/lib/otherRedux/slice/ui';
import { selectIsLoading } from '@/lib/otherRedux/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { FC } from 'react';

// interface ISignIn {
//   email: string;
//   password: string;
// }

export const SignIn: FC = () => {
  const loading = useAppSelector(selectIsLoading);
  const form = useForm({
    mode: 'onTouched',
  });
  const dispatch = useAppDispatch();

  const handleSendSubmit = async () => {
    try {
      await dispatch(loginUser());
      dispatch(setAuth(false));
    } catch (e) {
      return e.message;
    }
  };

  return (
    <StyledAuthorizationForm
      onSubmit={form.handleSubmit(handleSendSubmit as any)}
    >
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
        type="password"
        label="Password"
        icon="pass"
        placeholder="***********"
        error={form.formState.errors.password}
        register={form.register('password')}
      />
      <StyledForgotPassText>
        Forgot your password? <Link to="#">Restore</Link>
      </StyledForgotPassText>
      <StyledDivider>
        <span>or</span>
      </StyledDivider>
      <StyledGoogleBtn>
        {getIcon(EnumIcons.google)}
        Log In with Google
      </StyledGoogleBtn>
      <LoadingButton type="submit" loading={loading} variant="contained">
        <span>Continue</span>
      </LoadingButton>
    </StyledAuthorizationForm>
  );
};
