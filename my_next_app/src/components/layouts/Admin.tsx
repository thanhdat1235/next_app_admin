import React from "react";

// components

import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";
import HeaderStats from "../includes/Headers/HeaderStats";
import FooterAdmin from "../includes/Footers/FooterAdmin";

const Admin = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Admin;
