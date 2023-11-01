import React, {useEffect} from 'react';
import Input from "../../components/atom/Input.jsx";
import Textarea from "../../components/atom/Textarea.jsx";
import Button from "../../components/atom/Button.jsx";
import Uploader from "../../components/atom/Uploader.jsx";
import {useForm} from "@inertiajs/react";

const About = ({aboutMe}) => {

    const {data, setData, post, processing,errors} = useForm(aboutMe ?? {});

    const handleUpload = (file) => {
        setData(pre => ({...pre, image: file}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.about.update'));
    }

    const handleInputChange = (field, e) => {
        setData(pre => ({...pre, [field]: e.target.value}))
    }


    return (
        <form onSubmit={handleSubmit} className={'grid grid-cols-1 lg:grid-cols-3 p-4 gap-5'}>
            <div>
                <Uploader onRemoveFile={() => setData('image', null)} photo={data?.image}
                          onUpload={handleUpload}></Uploader>
            </div>
            <div className={'flex flex-col gap-3 col-span-2'}>
                <Input label={'First Title'} value={data?.first_title ?? ''} onChange={(e) => handleInputChange('first_title', e)}
                       placeholder={'First Title'}/>
                <Input label={'Second Title'} value={data?.second_title ?? ''} onChange={e => handleInputChange('second_title', e)}
                       placeholder={'Second Title'}/>
                <Textarea label={'First Description'} value={data?.first_description ?? ''} rows={5}
                          onChange={e => handleInputChange('first_description', e)}
                          placeholder={'First Description'}/>
                <Textarea label={'Second Description'} value={data?.second_description ?? ''} rows={7}
                          onChange={e => handleInputChange('second_description', e)}
                          placeholder={'Second Description'}/>

                <Button type={'submit'}
                        loading={processing}
                        className={'rounded-md w-full'}>Submit</Button>
            </div>
        </form>
    );
};

export default About;
