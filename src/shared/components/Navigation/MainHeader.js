import React from 'react';
import './MainHeader.css';

const MainHeader = props => {
    return <header className="main-header">
        {props.children}
    </header>
};

export default MainHeader;

/*
export default MainHeader; --- STA TACNO ZNACII???

PRETPOSTAVKA DA BI I DRUGI FAJLOVI MOGLI DA KORISTE.

OVDE CE SE RENDOVATI GDE JE PROPS CHILDREN ONO STO SSAM STAVIO IZMEDJU MAINHEADERA U MAINNAVIGATION FAJL.

*/