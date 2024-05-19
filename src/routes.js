import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from './components/auth/PrivateRoute';
import DashboardLayout from './layouts/dashboard';
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
          { path: 'app', element: <PrivateRoute element={<DashboardApp />} /> },
        { path: 'app', element: <PrivateRoute element={<DashboardApp />} /> },
        { path: 'user', element: <PrivateRoute element={<User />} /> },
        { path: 'products', element: <PrivateRoute element={<Products />} /> },
        { path: 'blog', element: <PrivateRoute element={<Blog />} /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
}
