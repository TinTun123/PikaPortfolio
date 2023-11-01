import React from 'react';
import {Link} from "@inertiajs/react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const SliderCard = ({slider, handleDeleteModal}) => {

    return (
        <div className={' w-full p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5'}>
            <img className={'w-[300px] mx-auto object-cover '} src={slider.image} alt=""/>
            <div className={'flex flex-col gap-5 w-full justify-between'}>
                <div>
                    <p>Has Button : {slider.has_button ? 'Yes' : 'No'}</p>
                    {
                        slider.has_button &&
                        <>
                            <p>Button Text : {slider.button_text}</p>
                            <p>Button Link : <a href={slider.button_link} target={'_black'}
                                                className={'hover:text-primary hover:underline'}>{slider.button_link}</a>
                            </p>
                        </>
                    }
                </div>
                <div className={'flex justify-end'}>
                    <div className={'flex gap-5'}>
                        <Link href={route('admin.slider.edit', slider.id)} className={'text-2xl '}>
                            <AiOutlineEdit/>
                        </Link>
                        <button onClick={() => handleDeleteModal(slider.id)} className={'text-2xl text-primary'}>
                            <AiOutlineDelete/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
