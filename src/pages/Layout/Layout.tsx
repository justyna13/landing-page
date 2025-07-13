import { Footer, Header } from '@/components/organisms';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
