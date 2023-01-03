import React from 'react';
const tg = window.Telegram.WebApp;
const onClose = () => {
    tg.close();
}
const Header = () => {
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