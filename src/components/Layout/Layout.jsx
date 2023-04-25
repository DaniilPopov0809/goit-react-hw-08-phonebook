import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<p>Load...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
