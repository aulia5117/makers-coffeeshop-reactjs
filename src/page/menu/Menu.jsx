
import { useEffect, useState } from "react";

import CoffeeItem from "./components/CoffeeItem";

export default function Menu() {

    const [coffeeMenu, setCoffeeMenu] = useState(null);

    useEffect( () => {
        fetch('http://127.0.0.1:5000/get_all_item')
            .then(response => response.json())
            .then(data => setCoffeeMenu(data))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">

                {/* <!-- Content Header --> */}

                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categories</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        <li className="pb-3">
                            <p className="collapsed d-flex justify-content-between h3 text-decoration-none">
                                Jenis Kopi
                                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                            </p>
                            <ul className="collapse show list-unstyled pl-3">
                                <li><p className="text-decoration-none" >Kopi Panas</p></li>
                                <li><p className="text-decoration-none" >Kopi Dingin</p></li>
                            </ul>
                        </li>

                    </ul>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col pb-4">
                            <div className="d-flex">

                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" id="input-search" placeholder="Search ..." />
                                    <button  className="input-group-text bg-success text-light">
                                        <i className="fa fa-fw fa-search text-white"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Menu --> */}
                    <div id="menu-parent" className="row">
                        {coffeeMenu && <CoffeeItem item={coffeeMenu} /> }
                    </div>
                </div>

            </div>
        </div>
    );
}

