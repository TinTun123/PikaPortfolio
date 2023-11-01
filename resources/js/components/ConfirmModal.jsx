import React from 'react';
import Modal from "./atom/Modal.jsx";
import Button from "./atom/Button.jsx";

const ConfirmModal = ({show,loading,onConfirm, onCancel}) => {
    return (
        <Modal show={show} onClose={onCancel} >
            <h3 className={'text-2xl text-center my-4'}>Are you sure you want to delete this?</h3>
            <div className={'my-4 flex gap-4'}>
                <Button outline className={'w-full'} onClick={onCancel}>Cancel</Button>
                <Button loading={loading} className={'w-full '} onClick={onConfirm}>Confirm</Button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
