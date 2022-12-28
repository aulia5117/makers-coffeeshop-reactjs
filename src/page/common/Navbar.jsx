import { Link } from "react-router-dom";
import NavbarNoToken from "./components/NavbarNoToken";
import NavbarWithToken from "./components/NavbarWithToken";
import { useEffect, useState } from "react";

function Navbar() {

  const [hasilFetch, setHasilFetch] = useState("")

  let token = document.cookie;

  useEffect(() => {
    if (token) {

      const split = token.split(".");
      let parsedToken = JSON.parse(atob(split[1]));
      // console.log(parsedToken)
      let username = parsedToken["username"]
      let password = parsedToken["password"]

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa(username + ":" + password)
        },
        // redirect: 'follow',
        credential: 'include'
      };

      fetch('http://127.0.0.1:5000/order/get_cart_order', requestOptions)
        .then(response => response.json())
        .then(data => setHasilFetch(data))
    }

  }, [])


  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          to="/"
          className="navbar-brand text-success logo h1 align-self-center"
        >
          <img
            width="40px"
            height="40px"
            src={require("../../assets/img/coffee-beans-logo.ico")}
            alt="Coffee Logo"
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar d-flex justify-content-between mx-lg-auto">
            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3"></div>

            {token ? <NavbarWithToken item={hasilFetch} /> : <NavbarNoToken />}


          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
