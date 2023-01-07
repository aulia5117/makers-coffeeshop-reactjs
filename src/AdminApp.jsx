// Import for Assets

// Import for Routing
import { Outlet } from "react-router-dom";
import AdminNavbar from "./page/admin/common/AdminNavbar";
import AdminSidebar from "./page/admin/common/AdminSidebar";

export default function AdminApp() {
  return (
      <>
        <AdminNavbar />
        <AdminSidebar />
        <Outlet />

      </>
      
  );
}

