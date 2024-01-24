import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = token => {
  instance.defaults.headers.common['Authorization'] = ``;
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/email/login', credentials);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// export const registerUser = createAsyncThunk(
//     'auth/register',
//     async (data: IRegisterData, { rejectWithValue }) => {
//         try {
//             const user = await instance.post('auth/register', data)
//             sessionStorage.setItem('token', user.data.token)
//             sessionStorage.setItem('name', user.data.user.firstName)
//             return user.data
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     },
// )

// export const getPublicUser = createAsyncThunk(
//     'auth/get-public-user-info',
//     async (_, { rejectWithValue }) => {
//         try {
//             const user = await instanceAuth.get('auth/get-public-user-info')
//             return user.data
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     },
// )

// export const updateUserInfo = createAsyncThunk(
//     'users/update',
//     async (data: any, { rejectWithValue }) => {
//         try {
//             const user = await instanceAuth.patch('users', data)
//             sessionStorage.setItem('name', user.data.firstName)
//             return user.data
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     },
// )

// export const updateUserPassword = createAsyncThunk(
//     'users/change-password',
//     async (
//         data: { oldPassword: string; newPassword: string },
//         { rejectWithValue },
//     ) => {
//         try {
//             return instanceAuth.patch('users/change-password', data)
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     },
// )

// export const deleteUser = createAsyncThunk(
//     'users/delete-user',
//     async (_, { rejectWithValue }) => {
//         try {
//             return instanceAuth.delete('users')
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     },
//)
