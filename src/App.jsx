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
import Navbar from './page/common/Navbar';
import Footer from './page/common/Footer';



// function checkCookies() {
//   console.log("hello world")
// }

function App() {
  return (
      <>
        <Navbar />
          <Outlet />
        <Footer />
      </>
      
  );
}

export default App;
