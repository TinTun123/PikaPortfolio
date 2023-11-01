import React, {useEffect, useState} from 'react';
import Uploader from "../../../components/atom/Uploader.jsx";
import Input from "../../../components/atom/Input.jsx";
import Textarea from "../../../components/atom/Textarea.jsx";
import Button from "../../../components/atom/Button.jsx";
import {useForm} from "@inertiajs/react";
import {Label, Radio} from "flowbite-react";
import {showSuccessToast} from "../../../Global/Methods.js";

const Create = ({slider}) => {

    const {data, setData, post, errors, processing} = useForm(slider ?? {
        has_button: true
    });
    const [hasButton, setHasButton] = useState(slider ? slider.has_button : true);

    const handleUpload = (file) => {
        setData((prev) => ({...prev, image: file}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = slider ? route('admin.slider.update', slider.id) : route('admin.slider.store');
        post(url, {
            onSuccess : () => {
                showSuccessToast(`Slider is ${slider ? 'updated' : 'created'}`);
            }
        });
    }

    const handleCheck = (value) => {
        setHasButton(value);
        setData('has_button', value);
    }

    return (
        <form onSubmit={handleSubmit} className={'grid grid-cols-1 lg:grid-cols-3 p-4 gap-5'}>
            <div>
                <Uploader onRemoveFile={() => setData('image', null)} photo={data?.image}
                          onUpload={handleUpload}></Uploader>
            </div>
            <div className={'flex flex-col gap-3 col-span-2'}>
                <p className={'font-medium'}>Has Button</p>
                <div className={'flex gap-5 mb-4'}>
                    <div className="flex items-center gap-2">
                        <Radio onChange={e => handleCheck(true)} id="yes" name="hasButton" value={true}
                               checked={hasButton}
                               className={'!text-black'}
                        />
                        <Label htmlFor="yes" className={'!text-black'}>Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="no" onChange={e => handleCheck(false)} name="hasButton" checked={!hasButton}
                               value={false}/>
                        <Label htmlFor="no" className={'!text-black'}>No</Label>
                    </div>
                </div>
                {
                    hasButton &&
                    <>
                        <Input label={'Button Text'} value={data?.button_text ?? ''}
                               onChange={e => setData('button_text', e.target.value)}
                        />
                        <Input label={'Button Link'} value={data?.button_link ?? ''}
                               onChange={e => setData('button_link', e.target.value)}
                        />
                    </>
                }
                <Button loading={processing} type={'submit'} className={'rounded-md w-full'}>Submit</Button>
            </div>
        </form>
    );
};

export default Create;
