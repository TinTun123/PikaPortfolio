import React from 'react'
import {HiOutlinePhone} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import {FaFacebook} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";
import {ImTelegram} from "react-icons/im";
import Input from "../../components/atom/Input.jsx";
import Textarea from "../../components/atom/Textarea.jsx";
import Button from "../../components/atom/Button.jsx";
import {useForm} from "@inertiajs/react";
import {showSuccessToast} from "../../Global/Methods.js";
import SubscribeForm from "../../components/SubscribeForm.jsx";

const Contact = ({social}) => {

    const {data, setData, post, processing, errors} = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => {
                setData({});
                showSuccessToast('Your message has been sent! Thank You.❤️');
            }
        });
    }


    const handleChange = (field, value) => {
        setData(pre => ({...pre, [field]: value}));
    }

    return (
        <div className={'my-10'}>
            <div className={'max-w-2xl mx-auto text-center px-4 mb-10'}>
                <h2 className={'font-semibold text-xl my-5'}>We eagerly await your contact. Feel free to reach
                    out.</h2>
                <p className={'text-sm'}>Complete the form, and our team will respond within 24 hours.
                    Alternatively,
                    you can reach out to us directly.</p>
            </div>
            <div className={'px-4 section grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-3'}>
                <div
                    className={'bg-black text-white shadow-xl col-span-1 lg:col-span-2 rounded p-5 flex flex-col justify-between'}>
                    <h3 className={'text-2xl font-semibold text-primary mb-2'}>Contact Information</h3>
                    <p className={'text-sm mb-5 text-gray-300'}>If you want to contact us directly, Please consider
                        the
                        contacts below</p>
                    <div className={'flex flex-col gap-7 text-lg '}>
                        <a href={`tel:${social.phone}`} className={'flex hover:text-primary items-center  gap-4'}>
                            <HiOutlinePhone className={'text-2xl inline-block'}/> <span
                            className={'text-sm lg:text-lg'}>{social.phone}</span>
                        </a>
                        <a href={`mailto:${social.email}`} target={'_pikasharingacc001@gmail.com'}
                           className={'flex hover:text-primary items-center flex-wrap gap-4'}>
                            <MdOutlineEmail className={'text-2xl inline-block'}/> <span
                            className={'text-sm lg:text-lg'}>{social.email}</span>
                        </a>
                        <div className={'flex gap-5 items-center justify-center text-3xl my-4'}>
                            <a href={social.facebook} target={'_black'}><FaFacebook
                                className={'fill-[#0765FF]'}/></a>
                            <a href={social.youtube} target={'_black'}><BsYoutube
                                className={' fill-[#FF0000]'}/></a>
                            <a href={social.telegram} target={'_black'}><ImTelegram
                                className={' fill-[#0088CC]'}/></a>
                        </div>
                    </div>
                    <div className={'grow flex justify-center items-center'}>
                        <SubscribeForm />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={'shadow-xl p-5 flex flex-col gap-5 col-span-1 lg:col-span-3'}>
                    <Input error={errors.name} value={data.name ?? ''}
                           onChange={(e) => handleChange('name', e.target.value)} required
                           placeholder={'Name'}/>
                    <Input error={errors.email} type={'email'} value={data.email ?? ''}
                           onChange={(e) => handleChange('email', e.target.value)} required
                           placeholder={'Email'}/>
                    <Input error={errors.phone} value={data.phone ?? ''}
                           onChange={(e) => handleChange('phone', e.target.value)} required
                           placeholder={'Phone'}/>
                    <Textarea error={errors.message} value={data.message ?? ''}
                              onChange={e => handleChange('message', e.target.value)} required
                              placeholder={'Message'} rows={5}></Textarea>
                    <Button loading={processing} type={'submit'} className={'rounded-md'}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
