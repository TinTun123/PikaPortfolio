import React, {useState} from 'react';
import Paginator from "../../../components/atom/Paginator.jsx";
import ContactCard from "./ContactCard.jsx";
import EditorComponent from "../../../components/EditorComponent.jsx";
import Modal from "../../../components/atom/Modal.jsx";
import Input from "../../../components/atom/Input.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../../components/atom/Button.jsx";
import {showSuccessToast} from "../../../Global/Methods.js";
import ConfirmModal from "../../../components/ConfirmModal.jsx";

const Index = ({contacts}) => {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [contact, setContact] = useState(null);
    const {data, setData, post, processing, errors, delete: deleteContact} = useForm({});


    const handleDeleteModal = (id) => {
        setContact(id);
        setDeleteModalOpen(true);
    }
    const handleDelete = () => {
        deleteContact(route('admin.contact.destroy', contact), {
            onSuccess: () => {
                showSuccessToast('Contact is deleted');
                setDeleteModalOpen(false);
            }
        })
    }

    const handleReply = (contact) => {
        setModalOpen(true);
        setData(contact);
    }

    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('admin.contact.reply'), {
            onSuccess: () => {
                showSuccessToast(`Reply sent to ${data.email}`)
                setModalOpen(false);
            }
        });
    };



    return (
        <div>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <h3 className={'font-medium text-lg my-3'}>Reply to {data.email}</h3>
                <form onSubmit={handleSubmitReply} className={'flex flex-col gap-3'}>
                    <Input error={errors.subject} label={'Subject'} onChange={e => setData('subject', e.target.value)}/>
                    <p className={'font-medium'}>Body</p>
                    <div className={'h-[300px]'}>
                        <EditorComponent value={data.body} onChange={(text) => setData('body', text)}/>
                        <p className={'text-red-500 text-sm'}>{errors.body}</p>
                    </div>
                    <div className={'flex gap-3'}>
                        <Button onClick={() => setModalOpen(false)} outline className={'w-full'}>Cancel</Button>
                        <Button type={'submit'} className={'w-full'}>Reply</Button>
                    </div>
                </form>
            </Modal>

            <ConfirmModal loading={processing} onCancel={() => setDeleteModalOpen(false)} onConfirm={handleDelete}
                          show={deleteModalOpen}/>

            {
                contacts.data.length === 0 &&
                <div className={'flex justify-center mt-20'}>
                    No Message Yet
                </div>
            }
            {
                contacts.data.length > 0 &&
                <div className={'p-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '}>
                    {
                        contacts.data.map(contact => (
                            <ContactCard handleReply={handleReply} handleDeleteModal={handleDeleteModal} key={contact.id}
                                         contact={contact}/>
                        ))
                    }
                    <div className={'col-span-full'}>
                        <Paginator links={contacts.links}/>
                    </div>
                </div>
            }

        </div>
    );
};

export default Index;
