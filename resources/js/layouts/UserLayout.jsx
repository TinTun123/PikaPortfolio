import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import AnimatePage from "./AnimatePage.jsx";

const UserLayout = (children) => {



    return (
        <div className="min-h-screen min-w-screen flex flex-col">
            <Navbar/>
            <AnimatePage>
                {children}
            </AnimatePage>
            <Footer/>
        </div>
    )
}

export default UserLayout;
