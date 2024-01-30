import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ISignInTypes {
  id?: string;
  label?: string;
  icon?: string;
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
  register,
}) => {
  const validIcon = EnumIcons[icon as keyof typeof EnumIcons];

  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={type}
        error={!!error}
        placeholder={placeholder}
        {...register}
        startAdornment={
          <InputAdornment position="start">
            {getIcon(EnumIcons[validIcon])}
          </InputAdornment>
        }
      />
      {!!error && (
        <FormHelperText
          sx={{
            color: '#D25',
          }}
        >
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
