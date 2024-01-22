import { AppDispatch, RootState } from '.././lib/otherRedux/otherStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useAuth = () => {
//   return !!sessionStorage.getItem('token');
// };
