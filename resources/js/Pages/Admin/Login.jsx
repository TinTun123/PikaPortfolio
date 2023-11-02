import React from 'react';
import Lottie from "lottie-react";
import LoginLottie from '../../constants/login.json';
import Input from "../../components/atom/Input.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../components/atom/Button.jsx";
import {showErrorToast} from "../../Global/Methods.js";

const Login = () => {

    const {data, setData, post} = useForm({});

    const handleChange = (field, e) => {
        setData(pre => ({...pre, [field]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.login'), {
            onError: (e) => {
                if(e){
                    showErrorToast(e.message);
                }
            }
        });
    };

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-14 p-10'}>
            <Lottie animationData={LoginLottie} loop={true}/>
            <div className={'flex justify-center items-center'}>
                <form onSubmit={handleSubmit} className={'flex gap-5 flex-col w-full lg:w-[70%]'}>
                    <Input label={'Email'} value={data.email ?? ''} onChange={(e) => handleChange('email', e)}
                           type={'email'} required={true}/>
                    <Input label={'Password'} value={data.password ?? ''} onChange={(e) => handleChange('password', e)}
                           required={true} type={'password'}/>
                    <Button type={'submit'} className={'rounded-md mt-10'}>Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
