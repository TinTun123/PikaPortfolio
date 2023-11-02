import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const EditorComponent = ({onChange,value}) => {
    return (
        <ReactQuill className={'h-full pb-20'} theme={'snow'} value={value} onChange={onChange} />
    );
};

export default EditorComponent;
