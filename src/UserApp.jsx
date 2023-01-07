// Import for Assets
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

// Import for Page
import UserNavbar from './page/user/components/UserNavbar';
import UserSidebar from './page/user/components/UserSidebar';

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
