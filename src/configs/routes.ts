import { Accessories } from '@/pages/Accessories';
import { Bicycles } from '@/pages/Bicycles';
import { CatalogPage } from '@/pages/CatalogPage';
import { Gyroboards } from '@/pages/Gyroboards';
import { HomePage } from '@/pages/Home';
import { Monowheels } from '@/pages/Monowheels';
import { ProductPage } from '@/pages/ProductPage';
import { Scooters } from '@/pages/Scooters';
import { Skateboards } from '@/pages/Skateboards';

export const routes = [
  {
    path: '/online-store/',
    element: HomePage,
    exact: true,
  },
  {
    path: '/online-store/bicycles',
    element: Bicycles,
    exact: true,
  },
  {
    path: '/online-store/skateboards',
    element: Skateboards,
    exact: true,
  },
  {
    path: '/online-store/scooters',
    element: Scooters,
    exact: true,
  },
  {
    path: '/online-store/gyroboards',
    element: Gyroboards,
    exact: true,
  },
  {
    path: '/online-store/monowheels',
    element: Monowheels,
    exact: true,
  },
  {
    path: '/online-store/accessories',
    element: Accessories,
    exact: true,
  },
  {
    path: '/online-store/:id',
    element: ProductPage,
    exact: true,
  },
  {
    path: '/online-store/catalog',
    element: CatalogPage,
    exact: true,
  },
];
