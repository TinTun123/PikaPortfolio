import React from 'react';
import AdminSideBar from "../components/AdminSideBar.jsx";

const AdminLayout = (children) => {


    return (
        <AdminSideBar children={children} />
    );
};

export default AdminLayout;
