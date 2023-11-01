import React from 'react';
import Input from "../../../components/atom/Input.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../../components/atom/Button.jsx";
import {showSuccessToast} from "../../../Global/Methods.js";

const Index = ({social}) => {

    const {data,setData, errors, processing,put} = useForm(social  ?? {});

    const handleSubmit = () => {
        put(route('admin.social.update'),{
            preserveScroll : true,
            onSuccess : () => {
                showSuccessToast('Social Profile is updated.')
            }
        });
    };

    return (
        <div className={'p-4 bg-white min-h-screen'}>
            <div className={'max-w-xl flex gap-5 flex-col '}>
                <Input label={'Email'} placeholder={'Email'} value={data?.email} onChange={e => setData('email', e.target.value)} />
                <Input label={'Phone'} placeholder={'Phone'} value={data?.phone} onChange={e => setData('phone', e.target.value)} />
                <Input label={'Facebook'} placeholder={'Facebook'} value={data?.facebook} onChange={e => setData('facebook', e.target.value)} />
                <Input label={'Youtube'} placeholder={'Youtube'} value={data?.youtube} onChange={e => setData('youtube', e.target.value)} />
                <Input label={'Telegram'} placeholder={'Telegram'} value={data?.telegram} onChange={e => setData('telegram', e.target.value)} />
                <Input label={'App Store URL'} placeholder={'App Store URL'} value={data?.appstore} onChange={e => setData('appstore', e.target.value)} />
                <Input label={'Play Store URL'} placeholder={'Play Store URL'} value={data?.playstore} onChange={e => setData('playstore', e.target.value)} />
                <Button onClick={handleSubmit} loading={processing} className={'rounded-md '}>Save Changes</Button>
            </div>
        </div>
    );
};

export default Index;
