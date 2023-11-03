import React, {useState} from 'react';
import Button from "../../../components/atom/Button.jsx";
import CourseCard from "./CourseCard.jsx";
import Paginator from "../../../components/atom/Paginator.jsx";
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import {router} from "@inertiajs/react";
import {showSuccessToast} from "../../../Global/Methods.js";

const Index = ({courses}) => {

    const [deleteModalOpen,setDeleteModalOpen] = useState(false);
    const [course,setCourse] = useState(null);
    const [loading,setLoading] = useState(false);


    const handleDeleteModal = (id) => {
        setDeleteModalOpen(true);
        setCourse(id);
    }

    const confirmDelete = () => {
        setLoading(true);
        router.delete(route('admin.course.destroy', course),{
            onFinish: () => {
                setLoading(false);
                setDeleteModalOpen(false);
                setCourse(null);
                showSuccessToast('Course has been deleted.')
            }
        });
    };

    return (
        <div>
            <ConfirmModal loading={loading} onCancel={ () => setDeleteModalOpen(false)} onConfirm={confirmDelete} show={deleteModalOpen} />
            <div className={'p-4 pt-0 text-end'}>
                <Button href={route('admin.course.create')}>Create Course</Button>
            </div>
            <div className={'p-4 bg-white flex flex-col gap-4 min-h-screen'}>
                {
                    courses.data.length === 0 &&
                    <div className={'flex justify-center mt-20'}>
                        No Course Found
                    </div>
                }
                {
                    courses.data.map(course => (
                        <CourseCard handleDeleteModal={handleDeleteModal} key={course.id} course={course}/>
                    ))
                }
                <Paginator links={courses.links}/>
            </div>
        </div>
    );
};

export default Index;
