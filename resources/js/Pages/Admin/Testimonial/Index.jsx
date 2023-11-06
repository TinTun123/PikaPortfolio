import React, {useState} from 'react';
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import Button from "../../../components/atom/Button.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import Paginator from "../../../components/atom/Paginator.jsx";
import {router} from "@inertiajs/react";

const Index = ({testimonials}) => {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [testimonial, setTestimonial] = useState(null);

    const confirmDelete = () => {
        router.delete(route('admin.testimonial.destroy', testimonial), {
            preserveScroll : true,
            onFinish : () => {
                setDeleteModalOpen(false);
            }
        })
    }

    const handleTestimonialDelete = (id) => {
        setDeleteModalOpen(true);
        setTestimonial(id);
    }


    return (
        <div>
            <ConfirmModal loading={loading} onCancel={() => setDeleteModalOpen(false)} onConfirm={confirmDelete}
                          show={deleteModalOpen}/>
            <div className={'p-4 pr-0 pt-0 text-end'}>
                <Button href={route('admin.testimonial.create')}>Create Review</Button>
            </div>
            <div className={'p-4 bg-white flex flex-col gap-4 min-h-screen'}>
                {
                    testimonials.data.length === 0 &&
                    <div className={'flex justify-center mt-20'}>
                        No  Testimonial Found
                    </div>
                }
                {
                    testimonials.data.map(testimonial => (
                        <TestimonialCard handleTestimonialDelete={handleTestimonialDelete} key={testimonial.id}
                                         testimonial={testimonial}/>
                    ))
                }
                <Paginator links={testimonials.links}/>
            </div>
        </div>
    );
};

export default Index;
