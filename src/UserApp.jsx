// Import for Assets
// import logo from './logo.svg';
// import './App.css';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.css';
import './assets/css/fontawesome.min.css';
import './assets/css/slick-theme.css';
import './assets/css/slick-theme.min.css';
import './assets/css/slick.min.css';
import './assets/css/templatemo.css';
import './assets/css/templatemo.min.css';

import './assets/js/index.js';

// Import for Routing
import { Outlet } from "react-router-dom";
// import { Helmet } from "react-helmet";

// Import for Page

import UserNavbar from './page/user/components/UserNavbar';
import UserSidebar from './page/user/components/UserSidebar';




// function checkCookies() {
//   console.log("hello world")
// }

function UserApp() {
  return (
      <>
        <UserNavbar />
        <UserSidebar />
        <Outlet />

      </>
      
  );
}

export default UserApp;
