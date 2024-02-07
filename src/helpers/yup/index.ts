import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email.'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(8, 'Please enter a valid password.')
      .max(20, 'Please enter a valid password.'),
  })
  .required();

export const registerSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Please enter your name')
      .matches(
        /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
        'Your name can only contain letters or numbers. Please try again.'
      )
      .min(2, 'Your name should have at least 2 characters. Please try again.'),

    email: yup
      .string()
      .required('Please enter your email')
      .matches(
        /^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email'
      )
      .email('Your email is incorrect. Please try again.'),

    password: yup
      .string()
      .required('Please enter your password.')
      .min(8, 'Your password should be at least 8 characters.')
      .max(20, 'Your password should be no longer than 20 characters.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).+$/,
        'Your password must contain 1 lowercase and 1 uppercase letters, 1 number and 1 character.'
      ),

    confirm: yup
      .string()
      .required('Please confirm your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required();

export const newsSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email')
    .matches(
      /^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/,
      'Please enter a valid email'
    )
    .email('Your email is incorrect. Please try again.'),
});