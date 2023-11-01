import React, {useEffect} from 'react';
import Input from "../../components/atom/Input.jsx";
import Textarea from "../../components/atom/Textarea.jsx";
import Button from "../../components/atom/Button.jsx";
import Uploader from "../../components/atom/Uploader.jsx";
import {useForm} from "@inertiajs/react";
import {showSuccessToast} from "../../Global/Methods.js";

const Text = ({texts}) => {

    const {data, setData, put, processing, errors} = useForm(texts ?? {});

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.text.update'),{
            onSuccess : () => {
                showSuccessToast('Texts are updated.')
            }
        });
    }

    console.log(errors);

    const handleInputChange = (field, e) => {
        setData(pre => ({...pre, [field]: e.target.value}))
    }

    return (
        <form onSubmit={handleSubmit} className={'bg-white min-h-screen  p-4 gap-5'}>
            <div className={'flex flex-col gap-3 max-w-xl'}>
                <Textarea label={'Digital Text'} value={data?.digital_text ?? ''} rows={5}
                          onChange={e => handleInputChange('digital_text', e)}/>
                <Textarea label={'Footer Note'} value={data?.footer_note ?? ''} rows={5}
                          onChange={e => handleInputChange('footer_note', e)}/>
                <Textarea label={'Copyright Note'} value={data?.copyright_note ?? ''} rows={3}
                          onChange={e => handleInputChange('copyright_note', e)}/>

                <Button type={'submit'}
                        loading={processing}
                        className={'rounded-md w-full'}>Submit</Button>
            </div>
        </form>
    );
};

export default Text;
