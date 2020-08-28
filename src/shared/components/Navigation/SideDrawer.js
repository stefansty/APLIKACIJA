import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;


/*
OVO CE DA BUDE SA STRANE DRAWER KOJI RADI ZA MOBILNE TELEFONE.

------OVO MOZDA NIJE TACNO---- Po pravilu side drawer se otvara odmh pored mainheadera ali ja sam uneo u index.html fajl novi div sa novim rootom da bi se on rendovao posebno.

ReactDOM.createPortal - sa ovom komandom govorimo Reactu gde da renduje aplikaciju.

content, document.getElementById('drawer-hook'));-- sa ovim uzimamo elemente koje nam trebaju i koje smo napisali u index.html fajlu da se renduju

import { CSSTransition } from 'react-transition-group'; --- importovano je da bi drower bio animiran.

<CSSTransition> - sa ovim wrapujemo sidedrawer i on bude animiran.

{props.show} - STA ZNACI OVO TACNO??? valjdadobija neki sou ^^.

timeout={200} -- koliko ce taj sou da traje 200 milisekundi.

mountOnEnter
unmountOnExit - da se pokaze kad treba drover i da se skloni kad treba.

<<<<<MENI ANIMACIJA NE RADI I NE ZNAM ZASTO>>>>>


*/