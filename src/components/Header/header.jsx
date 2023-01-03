import React from 'react';
import {useTelegram} from "../Hooks/useTelegram";


const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {tg.initData?.user?.username}
            </span>
        </div>
    );
};

export default Header;