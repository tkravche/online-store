import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { ProfileLayout } from '@/components/ProfileLayout';
import { routes } from '@/configs/routes';
import { CartPage } from './pages/CartPage';
import { OrdersPage } from './pages/OrdersPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { SettingsPage } from './pages/SettingsPage';
import { useAppDispatch } from './hooks';
import { refreshThunk } from './lib/otherRedux/thunks/auth';

import { instance } from './hooks/axios';

export const App = () => {
  const dispatch = useAppDispatch();

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if ([401, 422].includes(error.response?.status)) {
        dispatch(refreshThunk(null));
      } else {
        return Promise.reject(error);
      }
    }
  );
  return (
    <Routes>
      <Route path="/online-store/" element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<CartPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
