import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { PiWarningBold } from "react-icons/pi";
interface IProps {
    open: boolean;
    setOpen: any;
    formValue: any;
    handleCollectionEmail: any
}


const CheckMailAddress: React.FC<IProps> = ({ open, setOpen, formValue, handleCollectionEmail }) => {
    return (
        <Modal open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby='modal-modal-description'
        >
            <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[350px] w-full bg-white rounded-[20px] shadow p-5 outline-none">
                <div className='flex justify-between'>
                    <div className='text-[22px] flex items-center gap-2 font-semibold'>
                        <PiWarningBold color={"#ffc107"} size={28}/>
                        <span className=' '>Lưu ý</span>
                    </div>
                    <AiOutlineClose className='cursor-pointer' onClick={() => setOpen(false)} size={22} />
                </div>
                <div className='mt-3'>
                    <p className='text-[18px]'>Mail của bạn là:</p>
                    <p className='font-bold'>{formValue.email}</p>
                </div>
                <p></p>
                <div className='mt-3 flex justify-end gap-2'>
                    <Button color="error" onClick={() => setOpen(false)}>Sai</Button>
                    <Button color="success" variant="contained" onClick={handleCollectionEmail}>Đúng</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default CheckMailAddress;