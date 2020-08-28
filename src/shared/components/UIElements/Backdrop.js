import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;


/*
OVO KORISTIM DA ZATVORIM DRAWER TAKO STO KLIKNEM SA STRANE.

I ISTO KORISTI PORTALE TAKO DA MORAM DA DODAM NOVI PORT U INDEX>HTML FAJL



*/