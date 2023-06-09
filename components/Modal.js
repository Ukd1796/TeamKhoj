import React from 'react'
import Layout from '@/pages/layout';

const Modal = ({isVisible,onClose,children}) => {
    if(!isVisible) return null;

    const handleClose =(e)=>{
        if(e.target.id==='wrapper') onClose();
    }
    return (

        <div className="fixed inset-0 bg-black bg-opacity-25 background-blur-sm flex-justify-center items-center p-8 grid place-content-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={()=>onClose()}>X</button>
                <div className="bg-white p-2 rounded">{children}</div>
            </div>
        </div>
    )
}

export default Modal;