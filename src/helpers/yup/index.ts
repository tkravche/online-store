import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('Please enter a valid e-mail').required('This field is required'),
    password: yup.string().min(8,'Please enter a valid password').required('This field is required'),
  })
  .required();
