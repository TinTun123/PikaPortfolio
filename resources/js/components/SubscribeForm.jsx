import React from 'react';
import Input from "./atom/Input.jsx";
import Button from "./atom/Button.jsx";
import {useForm} from "@inertiajs/react";
import {showErrorToast, showSuccessToast} from "../Global/Methods.js";

const SubscribeForm = () => {

    const {data, setData, post, processing} = useForm({});

    const handleSubscribe = (e) => {
        e.preventDefault();

        post(route('subscribe'), {
            preserveScroll: true,
            onError: (e) => {
                showErrorToast(e.email);
            },
            onSuccess: () => {
                setData({});
                showSuccessToast('You have subscribed to your email list! Thank You. ❤️')
            }
        });
    }

    return (
        <form onSubmit={handleSubscribe} className={'flex  w-full'}>
            <Input type={'email'} value={data?.email ?? ''} onChange={e => setData('email',e.target.value)}
                   className={'text-black'} placeholder={'Email'}/>
            <Button loading={processing} type={'submit'} className={'rounded-sm'}>Join</Button>
        </form>
    );
};

export default SubscribeForm;
