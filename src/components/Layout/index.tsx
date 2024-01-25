import { Header } from '@/components/Header';
import { StyledLayout } from '@/theme/styles/layout/StyledLayout';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Newsletter } from '../Newsletter';
import { Authorization } from '../forms/Authorization';

export const Layout: FC = () => {
  return (
    <StyledLayout>
      <Header />
      <main className="flex flex-col gap-y-14 mb-12">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <Authorization />
    </StyledLayout>
  );
};
