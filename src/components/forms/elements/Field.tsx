import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';

interface ISignInTypes {
  id?: string;
  label?: string;
  icon?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}

export const Field: FC<ISignInTypes> = ({
  id,
  label,
  type,
  icon,
  placeholder,
  error,
  defaultValue,
  register,
}) => {
  const validIcon = EnumIcons[icon as keyof typeof EnumIcons];
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        defaultValue={defaultValue}
        type={id === 'password'|| id === 'confirmPassword' || id === 'newPassword' ? (showPassword ? 'text' : 'password') : type}
        error={!!error}
        placeholder={placeholder}
        {...register}
        startAdornment={
          icon === 'password' ? (
            <InputAdornment position="start">
              <IconButton
                sx={{ padding: '0px', width: '24px' }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? getIcon(EnumIcons.pass) : getIcon(EnumIcons.passoff)}
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="start">
              {getIcon(EnumIcons[validIcon])}
            </InputAdornment>
          )
        }
      />
      {!!error && (
        <FormHelperText
          sx={{fontSize: '10px', lineHeight: '140%',
            color: '#D25',
          }}
        >
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
