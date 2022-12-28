import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavbarWithToken(obj) {

    let token = document.cookie;
    const split = token.split(".");
    let parsedToken = JSON.parse(atob(split[1]));
    let username = parsedToken["username"]

    const itemKeranjang = obj.item

    const logOut = () => {

        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href='/'
    
    }


    return (
        <>
            <Link to='/keranjang'
                className="nav-icon position-relative text-decoration-none me-5"
            >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span
                    id="cart-count"
                    className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"
                >
                    {itemKeranjang?.length}
                </span>
            </Link>

            <Dropdown>
                <Dropdown.Toggle variant="muted" id="dropdown-basic">
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


        </>

    )


}