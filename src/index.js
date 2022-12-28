import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Import for Page
import App from './App';
import Home from './page/home/Home';
import Menu from './page/menu/Menu';
import News from './page/news/News';
import Login from './page/login/Login';
import UserApp from './UserApp';
import UserProfile from './page/user/UserProfile';
import UserActiveOrder from './page/user/UserActiveOrder';
import UserOrderHistory from './page/user/UserOrderHistory';
import AdminAllMenu from './page/admin/AdminAllMenu';
import AdminDashboard from './page/admin/AdminDashboard';
import AdminOrder from './page/admin/AdminOrder';
import AdminHistory from './page/admin/AdminHistory';
import AdminApp from './AdminApp';
import AdminCreateMenu from './page/admin/AdminCreateMenu';
import MenuDetail from './page/menu/MenuDetail';
import Keranjang from './page/keranjang/Keranjang';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/menu/:id"  element={<MenuDetail />} />
          <Route path='/news' element={<News />} />
          <Route path='/keranjang' element={<Keranjang />} />
        </Route>

        <Route path='/user' element={<UserApp />}>
          <Route path='profile' element={<UserProfile />} />
          <Route path='active-order' element={<UserActiveOrder />} />
          <Route path='order-history' element={<UserOrderHistory />} />
        </Route>

        <Route path='/admin' element={<AdminApp />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='all-menu' element={<AdminAllMenu />} />
          <Route path='create-menu' element={<AdminCreateMenu />} />
          <Route path='order' element={<AdminOrder />} />
          <Route path='history' element={<AdminHistory />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


