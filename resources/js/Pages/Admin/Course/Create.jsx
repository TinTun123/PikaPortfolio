import React from 'react';
import Input from "../../../components/atom/Input.jsx";
import Textarea from "../../../components/atom/Textarea.jsx";
import Button from "../../../components/atom/Button.jsx";
import Uploader from "../../../components/atom/Uploader.jsx";
import {useForm} from "@inertiajs/react";
import {showSuccessToast} from "../../../Global/Methods.js";

const Create = ({course, errors}) => {

    const {data, setData, post, processing} = useForm(course ?? {});

    const handleUpload = (file) => {
        setData((prev) => ({...prev, image: file}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = '';
        if (course) {
            url = route('admin.course.update', course.id);
        } else {
            url = route('admin.course.store');
        }
        post(url, {
            preserveScroll: true,
            onSuccess: () => {
                showSuccessToast(`Course has been ${course ? 'updated' : 'created'}`)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className={'grid grid-cols-1 lg:grid-cols-3 p-4 gap-5'}>
            <div>
                <Uploader onRemoveFile={() => setData('image', null)} photo={data?.image}
                          onUpload={handleUpload}></Uploader>
            </div>
            <div className={'flex flex-col gap-3 col-span-2'}>
                <Input error={errors.title} label={'Title'} value={data?.title ?? ''}
                       onChange={e => setData('title', e.target.value)}
                       placeholder={'Title'}/>
                <Input error={errors.instructor} label={'Instructor'} value={data?.instructor ?? ''}
                       onChange={e => setData('instructor', e.target.value)}
                       placeholder={'Instructor'}/>
                <Input error={errors.link} label={'Course Link'} value={data?.link ?? ''}
                       onChange={e => setData('link', e.target.value)}
                       placeholder={'Link Tto redirect to'}/>
                <Input error={errors.price} label={'Price'} value={data?.price ?? ''} type={'number'}
                       onChange={e => setData('price', +e.target.value)}
                       placeholder={'Price'}/>
                <Textarea error={errors.description} label={'Description'} value={data?.description ?? ''}
                          onChange={(e) => setData('description', e.target.value)}
                          rows={10} placeholder={'Description'}/>
                <Button loading={processing} type={'submit'} className={'rounded-md w-full'}>Submit</Button>
            </div>
        </form>

    );
};

export default Create;
