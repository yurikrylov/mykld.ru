import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', minHeight: 'calc(70vh)' }}>
        {/* Outlet is where child pages will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
