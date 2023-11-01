import React, {useState} from 'react';
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import Button from "../../../components/atom/Button.jsx";
import CourseCard from "../Course/CourseCard.jsx";
import Paginator from "../../../components/atom/Paginator.jsx";
import {router} from "@inertiajs/react";
import SliderCard from "./SliderCard.jsx";

const Index = ({sliders}) => {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [slider, setSlider] = useState(null);

    const handleDeleteModal = (id) => {
        setSlider(id);
        setDeleteModalOpen(true);
    }

    const confirmDelete = async () => {
        setLoading(true);
        router.delete(route('admin.slider.destroy', slider),{
            onFinish : () => {
                setLoading(false);
                setDeleteModalOpen(false);
            }
        })
    }


    return (
        <div>
            <ConfirmModal loading={loading} onCancel={() => setDeleteModalOpen(false)} onConfirm={confirmDelete}
                          show={deleteModalOpen}/>
            <div className={'p-4 pt-0 text-end'}>
                <Button href={route('admin.slider.create')}>Create Slider</Button>
            </div>
            <div className={'p-4 bg-white flex flex-col gap-4 min-h-screen'}>
                {
                    sliders?.map(slider => (
                        <SliderCard handleDeleteModal={handleDeleteModal} key={slider.id} slider={slider}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Index;
