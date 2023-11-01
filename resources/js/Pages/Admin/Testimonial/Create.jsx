import React from 'react';
import Uploader from "../../../components/atom/Uploader.jsx";
import Input from "../../../components/atom/Input.jsx";
import Textarea from "../../../components/atom/Textarea.jsx";
import Button from "../../../components/atom/Button.jsx";
import {useForm} from "@inertiajs/react";
import {showSuccessToast} from "../../../Global/Methods.js";

const Create = ({testimonial}) => {

    const {data, setData, errors, post, processing} = useForm(testimonial ?? {});

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = testimonial ? route('admin.testimonial.update', testimonial.id) : route('admin.testimonial.store');
        post(url, {
            onSuccess: () => {
                showSuccessToast(`Testimonial is  ${testimonial ? 'updated' : 'created'}`)
            }
        });
    }

    const handleUpload = (file) => {
        setData(pre => ({...pre, image: file}));
    }

    return (
        <form onSubmit={handleSubmit} className={'grid grid-cols-1 lg:grid-cols-3 p-4 gap-5'}>
            <div>
                <Uploader onRemoveFile={() => setData('image', null)} photo={data?.image}
                          onUpload={handleUpload}></Uploader>
            </div>
            <div className={'flex flex-col gap-3 col-span-2'}>
                <Input error={errors.name} label={'Name'} value={data?.name ?? ''} onChange={e => setData('name', e.target.value)}
                       placeholder={'Name'}/>
                <Textarea error={errors.description} label={'Description'} value={data?.description ?? ''} onChange={(e) => setData('description', e.target.value)}
                          rows={7} placeholder={'Description'}/>
                <Button loading={processing}  type={'submit'} className={'rounded-md w-full'}>Submit</Button>
            </div>
        </form>
    );
};

export default Create;
