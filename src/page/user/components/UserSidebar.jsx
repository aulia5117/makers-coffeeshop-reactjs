import { Link } from 'react-router-dom';
import '../style.css'

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <Link to='/user/profile' className="nav-link " >
            <span>Profile</span>
          </Link>
        </li>



        <li className="nav-item">
        <Link to='/user/active-order' className="nav-link " >
            <span>Active Order</span>
          </Link>
        </li>


        <li className="nav-item">
        <Link to='/user/order-history' className="nav-link " >
            <span>Order History</span>
          </Link>
        </li>

      </ul>
    </aside>


  )
}

export default Sidebar;

