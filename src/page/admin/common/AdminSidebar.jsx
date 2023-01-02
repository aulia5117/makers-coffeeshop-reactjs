import { Link } from "react-router-dom"
import { useState } from "react";
import { Collapse } from "react-bootstrap"

export default function AdminSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link to='/admin/dashboard' className="nav-link ">
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <div
                            onClick={() => setOpen(!open)}
                            className="nav-link collapsed"
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Menu
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </div>
                        <Collapse in={open}>

                            <ul id="components-nav" className="nav-content collapse " >
                                <li>
                                    <Link to='/admin/all-menu'>
                                        <i className="bi bi-circle"></i><span>All Menu</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/create-menu'>
                                        <i className="bi bi-circle"></i><span>Create New Menu</span>
                                    </Link>

                                </li>
                            </ul>

                        </Collapse>
                        {/* <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
                            <span>Menu</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="admin-all-menu.html">
                                    <i className="bi bi-circle"></i><span>All Menu</span>
                                </a>
                            </li>
                            <li>
                                <a href="admin-create-menu.html">
                                    <i className="bi bi-circle"></i><span>Create New Menu</span>
                                </a>
                            </li>
                        </ul> */}

                    </li>
                    {/* <!-- End Menu Nav --> */}

                    <li className="nav-item">
                        <Link to='/admin/order' className="nav-link">
                            <span>Order</span>
                        </Link>
                    </li>
                    {/* <!-- End Order Nav --> */}

                    <li className="nav-item">
                    <Link to='/admin/history' className="nav-link">
                            <span>History</span>
                        </Link>
                    </li>
                    {/* <!-- End History Nav --> */}
                </ul>
            </aside>
        </>
    )
}