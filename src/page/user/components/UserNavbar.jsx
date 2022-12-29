import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserNavbar() {

    let token = document.cookie;
    const split = token.split(".");
    let parsedToken = JSON.parse(atob(split[1]));
    let username = parsedToken["username"]

    const logOut = () => {

        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href='/'
    
    }

    return (

        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <a href="/user/profile" className="logo d-flex align-items-center">
                    <img src={require("../../../assets/img/coffee-beans-logo.ico")} alt="" />
                    <span className="d-none d-lg-block">User Dashboard</span>

                </a>

                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>
            {/* <!-- End Logo --> */}
            
            <div className="header-nav ms-auto dropdown-menu-right">
                
                
          
                
            
            <Dropdown className="dropdown-menu-right" direction="start">
                <Link to='/' >
                <i className="fa fa-home text-dark mr-3 ml-3" aria-hidden="true"></i>
                </Link>
                
                <Dropdown.Toggle variant="muted" id="dropdown-basic">
                
                <span> </span>
                
                <i className="fa fa-fw fa-user text-dark mr-3 ml-3"></i>
                <span> </span>
                {username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/user/profile">Profil</Dropdown.Item>
                    <Dropdown.Item href="/user/active-order">Order Ku</Dropdown.Item>
                    <hr/>
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

                {/* <!-- End Profile --> */}

            </div>

        </header>
    )
}