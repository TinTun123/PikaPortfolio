import React from 'react';
import {AnimatePresence} from "framer-motion";
import {usePage} from "@inertiajs/react";
import {motion} from "framer-motion";



const AnimatePage = ({children}) => {
    const page = usePage();


    return (
        <AnimatePresence key={page.component}>
            <motion.div
                initial={{opacity: 0, translateX : -20}}
                animate={{opacity: 1, translateX : 0}}
                exit={{opacity: 0}}
                transition={{duration: .3}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatePage;
