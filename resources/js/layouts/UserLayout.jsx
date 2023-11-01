import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import {AnimatePresence} from "framer-motion";
import Footer from "../components/Footer.jsx";

const UserLayout = (children) => {



    return (
        <div className="min-h-screen min-w-screen">
            <Navbar/>
            <AnimatePresence key={'fdas'}>
                {children}
            </AnimatePresence>
            <Footer/>
        </div>
    )
}

export default UserLayout;
