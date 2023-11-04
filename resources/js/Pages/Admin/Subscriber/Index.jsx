import React, {useEffect, useState} from 'react';
import Table from "../../../components/atom/Table.jsx";
import TableRow from "../../../components/atom/TableRow.jsx";
import TableData from "../../../components/atom/TableData.jsx";
import Copy from "../../../components/atom/Copy.jsx";
import {AiOutlineDelete} from "react-icons/ai";
import Paginator from "../../../components/atom/Paginator.jsx";
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import {router, useForm} from "@inertiajs/react";
import {showSuccessToast} from "../../../Global/Methods.js";
import Input from "../../../components/atom/Input.jsx";
import {debounce} from "lodash";

const Index = ({subscribers, filters}) => {

    const [search, setSearch] = useState(filters.search ?? '');
    const [firstTime, setFirstTime] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [subscriber, setSubscribe] = useState(null);

    const {delete: deleteSubscribe, processing} = useForm({});

    const handleDeleteModal = (id) => {
        setDeleteModal(true);
        setSubscribe(id);
    }

    const dynamicParams = () => {
        let params = {};
        if (search) {
            params.search = search;
        }
        return params;
    }

    const fetchSubscribers = debounce(function () {
        router.get((route('admin.subscriber.index')),
            dynamicParams(),
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    }, 300);

    useEffect(() => {
        if (!firstTime) {
            fetchSubscribers();
        }
    }, [search]);

    useEffect(() => {
        setFirstTime(false);
    }, [])


    const handleDeleteSubscribe = () => {
        deleteSubscribe(route('admin.subscriber.destroy', subscriber), {
            onSuccess: () => {
                showSuccessToast('Subscriber Mail is deleted!')
                setDeleteModal(false);
            }
        });
    }

    return (
        <div className={'p-4 bg-white'}>
            <ConfirmModal show={deleteModal} loading={processing} onCancel={() => setDeleteModal(false)}
                          onConfirm={handleDeleteSubscribe}/>
            <Input placeholder={'Search mail'} value={search} onChange={e => setSearch(e.target.value)}
                   className={'w-[100%] md:w-[70%] lg:w-[50%]'}/>
            <Table columns={[{field: 'Email'}, {field: 'Actions'}]}>
                {
                    subscribers.data.map(s => (
                        <TableRow key={s.id}>
                            <TableData>
                                <Copy text={s.email}>{s.email}</Copy>
                            </TableData>
                            <TableData>
                                <button onClick={() => handleDeleteModal(s.id)}
                                        className={'text-2xl text-primary'}>
                                    <AiOutlineDelete/>
                                </button>
                            </TableData>
                        </TableRow>
                    ))
                }
            </Table>
            <div>
                <Paginator links={subscribers.links}/>
            </div>
        </div>
    );
};

export default Index;
