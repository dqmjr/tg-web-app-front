import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../Hooks/useTelegram";
const Form = () => {
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('physical');

    const [tg] = useTelegram();

    useEffect( () => {
        tg.MainButton.setParams( {
                text: 'Заказать'
        })
        }, []
    )

    // useEffect(() => {
    //     if (!address || !number){
    //         tg.MainButton.hide();
    //     }else {
    //         tg.MainButton.show();
    //     }
    // }, [address, number])

    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите данные:</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Адрес'}
                value={address}
                onChange={onChangeAddress}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Номер'}
                value={number}
                onChange={onChangeNumber}
            />

            <select
                value={subject}
                onChange={onChangeSubject}
                className={'select'}>
                <option value="legal">Юр. лицо</option>
                <option value="physical">Физ. лицо</option>
            </select>
        </div>
    );
};

export default Form;