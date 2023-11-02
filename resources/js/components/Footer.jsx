import React from 'react';
import FooterBackground from '../src/assets/footer.jpg';
import Logo from '../src/assets/pika_logo_with_text.jpg'
import {FaFacebook} from "react-icons/fa";
import {BsTelegram, BsYoutube} from "react-icons/bs";
import {Link, usePage} from '@inertiajs/react';


const links = [
    {
        name: 'Home',
        link: 'home',
    },
    {
        name: 'About',
        link: 'about',
    },
    {
        name: 'Class',
        link: 'course',
    },
    {
        name: 'Testimonials',
        link: 'testimonial',
    },
    {
        name: 'Contact Us',
        link: 'contact',
    },
]

const Footer = () => {

    const {props : {social, texts}} = usePage();

    return (
        <div style={{backgroundImage: `url(${FooterBackground})`}}
             className={'mt-20 px-4 gap-5 text-white grid grid-cols-1 lg:grid-cols-3 pt-40 pb-20 bg-cover bg-top lg:px-48'}>
            <div className={''}>
                <div className={'flex items-center gap-5'}>
                    <img className={'w-[70px] '} src={Logo} alt=""/>
                    <p className={'text-primary text-xl font-semibold capitalize'}>PIKA SHARING</p>
                </div>
                <p className={'text-sm text-gray-300 mt-5'}>{texts.footer_note}</p>
            </div>
            <div>
                <h3 className={'font-semibold mt-3 text-xl'}>Links</h3>
                <ul className={'flex flex-col gap-2 mt-7'}>
                    {
                        links.map(link => (
                            <li key={link.link} className={' '}>
                                <Link className={'hover:text-primary'} href={route(link.link)}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className={'font-semibold mt-3 text-xl'}>Social Links</h3>
                <ul className={'flex flex-col gap-2 mt-7'}>
                    <li>{social.email}</li>
                    <li>{social.phone}</li>
                    <div className={'text-2xl flex items-center gap-4 my-2'}>
                        <a href={social.facebook} target={'_blank'} className={'hover:scale-110'}><FaFacebook/></a>
                        <a href={social.youtube} target={'_blank'}><BsYoutube/></a>
                        <a href={social.telegram} target={'_blank'}><BsTelegram/></a>
                    </div>
                </ul>
            </div>
            <p className={'text-center col-span-full mt-10'}>&copy; {texts.copyright_note}</p>
        </div>
    );
};

export default Footer;
