import React from 'react';
import Modal from "../../../components/atom/Modal.jsx";
import EditorComponent from "../../../components/EditorComponent.jsx";
import Button from "../../../components/atom/Button.jsx";
import Input from "../../../components/atom/Input.jsx";

const AnnouncementForm = ({onClose, show, handleSubmitAnnouncement, data, setData, errors}) => {

    return (
        <Modal show={show} onClose={onClose}>
            <h3 className={'font-medium text-lg my-3'}>Send Announcement To Subscribers</h3>
            <form onSubmit={handleSubmitAnnouncement} className={'flex flex-col gap-3'}>
                <Input error={errors.subject} value={data?.subject ?? ''} label={'Subject'} onChange={e => setData('subject', e.target.value)}/>
                <p className={'font-medium'}>Body</p>
                <div className={'h-[300px]'}>
                    <EditorComponent value={data.body} onChange={(text) => setData('body', text)}/>
                </div>
                <p className={'text-red-500 text-sm'}>{errors.body}</p>
                <div className={'flex gap-3'}>
                    <Button onClick={onClose} outline className={'w-full'}>Cancel</Button>
                    <Button type={'submit'} className={'w-full'}>Send</Button>
                </div>
            </form>
        </Modal>
    );
};

export default AnnouncementForm;
