// Import for Assets

// Import for Routing
import { Outlet } from "react-router-dom";
import AdminNavbar from "./page/admin/components/AdminNavbar";
import AdminSidebar from "./page/admin/components/AdminSidebar";
// import { Helmet } from "react-helmet";

// Import for Page


export default function AdminApp() {
  return (
      <>
        <AdminNavbar />
        <AdminSidebar />
        <Outlet />

      </>
      
  );
}

