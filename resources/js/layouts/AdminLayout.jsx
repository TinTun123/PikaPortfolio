import React from 'react';
import AdminSideBar from "../components/AdminSideBar.jsx";
import AnimatePage from "./AnimatePage.jsx";

const AdminLayout = (children) => {


    return (
        <AdminSideBar>
            <AnimatePage>
                {children}
            </AnimatePage>
        </AdminSideBar>
    );
};

export default AdminLayout;
