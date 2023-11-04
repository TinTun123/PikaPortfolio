import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {BsReply} from "react-icons/bs";
import Copy from "../../../components/atom/Copy.jsx";
import {PiWarningCircleLight} from "react-icons/pi";

const ContactCard = ({contact, handleDeleteModal, handleReply, handleSeeDetail}) => {
    return (
        <div className={' w-full  p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5'}>
            <div className={'flex h-full flex-col gap-5 w-full justify-between'}>
                <div>
                    <div>
                        <div className={'flex items-center gap-1'}>Name : <Copy text={contact.name}><span>{contact.name}</span></Copy></div>
                        <div className={'flex items-center gap-1'}>Email : <Copy text={contact.email}><span>{contact.email}</span></Copy></div>
                        <div className={'flex items-center gap-1'}>Phone : <Copy text={contact.phone}><span>{contact.phone}</span></Copy></div>
                        <p>Replied : <span className={`${contact.replied ? 'text-green-500' : 'text-rose-500'}`}>{contact.replied ? 'Yes' : 'No'}</span></p>
                    </div>
                    <div>
                        <p>{contact.message?.substring(0,20) + '...'}</p>
                    </div>
                </div>

                <div className={'flex justify-end'}>
                    <div className={'flex gap-5'}>
                        <div onClick={()=> handleSeeDetail(contact)} className={'text-2xl cursor-pointer'}>
                            <PiWarningCircleLight />
                        </div>
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
