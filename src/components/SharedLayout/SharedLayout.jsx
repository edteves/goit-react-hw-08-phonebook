import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.outlet}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};
