import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';

interface ModalFormType {
    open: boolean;
    onClose: () => void;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
function ModalForm({ open, onClose }: ModalFormType) {
    const [storage, setStorage] = useState({
        phone: '',
        name: '',
        address: '',
    });
    const [err, setErr] = useState({ phone: '', name: '' });
    const [isSuccess, setIsSuccess] = useState(false)
    const handleChange = (e: InputEvent) => {
        const { name, value } = e.target;
        return setStorage((prev) => ({ ...prev, [name]: value }));
    };
    const testPhoneCorrect = (message: string) => {
        return message.match(/[A-z]/g);
    };
    const SuccessMessage = () => {
        return <div className={'SuccessMessage'}>
            <h1>Мы успешно передали ваши данные и ваш заказ менеджеру , в течении 5 минут он с вами свяжется и подтвердит заказ</h1>
            <Button variant={'outlined'} color={'success'} onClick={() => {
                setIsSuccess(false)
                onClose()
            }}>Закрыть</Button>
        </div>
    }
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (storage.name.length === 0) {
            setErr((prev) => ({
                ...prev,
                name: 'Введите как к вам обращаться',
                phone: '',
            }));
            return
        }
        if (storage.phone.length === 0) {
            setErr((prev) => ({
                ...prev,
                phone: 'Введите номер телефона корректно',
                name: '',
            }));
            return
        }
        if(storage.phone.length < 10 || storage.phone.length > 11) {
            setErr(prev => ({
                ...prev,phone:'В номере неверное количество символов'
            }))
            return
        }
        if (testPhoneCorrect(storage.phone)) {
            setErr((prev) => ({ ...prev, phone: 'В номере есть буквы' }));
            return
        } else {
            setErr((prev) => ({ ...prev, name: '', phone: '' }));
            setIsSuccess(true)
        }
    };
    return (
        <Modal open={open} onClose={onClose}>
            <div>
            {isSuccess ? <SuccessMessage /> : <form className={'ModalForm'} onSubmit={handleSubmit}>
                <h2>Заполните поля ниже для связи с вами</h2>
                <div className={'ModalForm_item'}>
                    <p>Как к вам обращаться</p>
                    <TextField
                        fullWidth
                        name={'name'}
                        onChange={handleChange}
                        type={'text'}
                        helperText={err.name}
                        required
                    />
                </div>
                <div className={'ModalForm_item'}>
                    <p>Номер телефона</p>
                    <TextField
                        fullWidth
                        onChange={handleChange}
                        type={'phone'}
                        name={'phone'}
                        helperText={err.phone}
                        required
                    />
                </div>
                <div className={'ModalForm_item'}>
                    <p>Адрес</p>
                    <TextField
                        type={'address'}
                        onChange={handleChange}
                        name={'address'}
                    />
                </div>
                <div className={'ModalForm_ButtonBlock'}>
                    <Button
                        variant={'contained'}
                        color={'success'}
                        type={'submit'}
                    >
                        Сделать заказ
                    </Button>
                    <Button
                        variant={'contained'}
                        color={'error'}
                        onClick={onClose}
                    >
                        Закрыть
                    </Button>
                </div>
            </form>}
            </div>
        </Modal>
    );
}

export default ModalForm;
