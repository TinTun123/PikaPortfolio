import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {BsReply} from "react-icons/bs";

const ContactCard = ({contact, handleDeleteModal, handleReply}) => {
    return (
        <div className={' w-full  p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5'}>
            <div className={'flex h-full flex-col gap-5 w-full justify-between'}>
                <div>
                    <div>
                        <p>Name : <span>{contact.name}</span></p>
                        <p>Email : <span>{contact.email}</span></p>
                        <p>Phone : <span>{contact.phone}</span></p>
                        <p>Replied : <span className={`${contact.replied ? 'text-green-500' : 'text-rose-500'}`}>{contact.replied ? 'Yes' : 'No'}</span></p>
                    </div>
                    <div>
                        <p>{contact.message}</p>
                    </div>
                </div>

                <div className={'flex justify-end'}>
                    <div className={'flex gap-5'}>
                        <div onClick={()=> handleReply(contact)} className={'text-2xl cursor-pointer'}>
                            <BsReply />
                        </div>
                        <button onClick={()=> handleDeleteModal(contact.id)} className={'text-2xl text-primary'}>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
