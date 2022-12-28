import { Dropdown } from "react-bootstrap";

export default function AdminNavbar() {

    const logOut = () => {

        document.cookie = "token_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href='/'
    
    }

    return (
    <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
            <a href="dashboard" className="logo d-flex align-items-center">
                <img src={require("../../../assets/img/coffee-beans-logo.ico")} alt="" />
                    <span className="d-none d-lg-block">Qofi Admin</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* <!-- End Logo --> */}
        <nav className="header-nav ms-auto">

            <Dropdown>
                <Dropdown.Toggle variant="muted" id="dropdown-basic">
                    <span >Admin</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </nav>
    </header>
    
    );
}