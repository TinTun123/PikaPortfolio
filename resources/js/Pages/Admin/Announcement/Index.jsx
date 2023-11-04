import React, {useState} from 'react';
import Button from "../../../components/atom/Button.jsx";
import Table from "../../../components/atom/Table.jsx";
import TableRow from "../../../components/atom/TableRow.jsx";
import TableData from "../../../components/atom/TableData.jsx";
import AnnouncementForm from "./AnnouncementForm.jsx";
import {useForm} from "@inertiajs/react";
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import {showSuccessToast} from "../../../Global/Methods.js";
import {AiOutlineDelete} from "react-icons/ai";
import {PiWarningCircleLight} from "react-icons/pi";
import Modal from "../../../components/atom/Modal.jsx";
import parse from 'html-react-parser';


const Index = ({announcements}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const {data, errors, setData, processing, post, delete: deleteAnnouncement} = useForm({});
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [announcement, setAnnouncement] = useState(false);
    const [id, setId] = useState(null);

    const handleSubmitAnnouncement = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setConfirmModal(true);
    }

    const handleOnCancel = () => {
        setConfirmModal(false);
        setModalOpen(true);
    }

    const handleDeleteModal = (id) => {
        setId(id);
        setDeleteModalOpen(true);
    }

    const handleConfirmAnnouncement = () => {
        post(route('admin.announcement.store'), {
            onError: (e) => {
                if (e.body || e.subject) {
                    handleOnCancel();
                }
            },
            onSuccess: () => {
                setData({});
                setConfirmModal(false);
                setModalOpen(false);
                showSuccessToast('Announcement will be sent soon.')
            }
        })
    }

    const handleSeeDetail = (a) => {
        setAnnouncement(a);
        setDetailModal(true);
    }

    const handleDelete = () => {
        deleteAnnouncement(route('admin.announcement.destroy', id), {
            onSuccess: () => {
                showSuccessToast('Announcement is deleted.')
                setDeleteModalOpen(false);
            }
        });
    }
    return (
        <div>

            <Modal show={detailModal} onClose={() => setDetailModal(false)}>
                <p className={'font-semibold my-2'}>Subject</p>
                <h4>{announcement.subject}</h4>
                <p className={'font-semibold my-2'}>Body</p>
                {
                    parse(announcement.body ?? '')
                }
            </Modal>

            <ConfirmModal show={deleteModalOpen} onConfirm={handleDelete} loading={processing}
                          onCancel={() => setDeleteModalOpen(false)}/>

            <ConfirmModal label={'Are you sure you want to send to subscribers?'} show={confirmModal}
                          onConfirm={handleConfirmAnnouncement} loading={processing}
                          onCancel={handleOnCancel}/>

            <AnnouncementForm errors={errors} data={data} setData={setData}
                              handleSubmitAnnouncement={handleSubmitAnnouncement}
                              show={modalOpen}
                              onClose={() => setModalOpen(false)}/>

            <div className={'p-4 pt-0 '}>
                <Button className={'ml-auto'} onClick={() => setModalOpen(true)}>Create Announcement</Button>
            </div>
            <div className={'p-4 bg-white '}>
                <Table columns={[{field: 'Subject'}, {field: 'Body'}, {field: 'Actions'}]}>
                    {
                        announcements.data.map(a => (
                            <TableRow key={a.id}>
                                <TableData>{a.subject}</TableData>
                                <TableData>{parse(a.body?.substring(0, 30) + '...')}</TableData>
                                <TableData>
                                    <div className={'flex gap-2'}>
                                        <button onClick={() => handleSeeDetail(a)}
                                                className={'text-2xl'}>
                                            <PiWarningCircleLight/>
                                        </button>
                                        <button onClick={() => handleDeleteModal(a.id)}
                                                className={'text-2xl text-primary'}>
                                            <AiOutlineDelete/>
                                        </button>
                                    </div>
                                </TableData>
                            </TableRow>
                        ))
                    }
                </Table>
            </div>
        </div>
    );
};

export default Index;
