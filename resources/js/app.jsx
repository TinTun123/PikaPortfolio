import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import UserLayout from "./layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import {Toaster} from "react-hot-toast";
window.route = route;

createInertiaApp({
    resolve: async (name) => {
        let page = await resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'));
        page = page.default;


        if (page.layout === undefined && name !== 'Login') {
            if(name.includes('Admin')){
                page.layout = AdminLayout;
            }else{
                page.layout = UserLayout;
            }
        }
        return page;
    },
    setup({el, App, props}) {
        createRoot(el).render(
            <>
                <Toaster />
                <App {...props} />
            </>
        )
    },
    progress : {
        color : '#f24406'
    }
})
