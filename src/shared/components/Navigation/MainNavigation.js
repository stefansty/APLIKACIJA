import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

/*
PORED MAINHEADERA KOJI JE ZA GLAVNI HEADER STAVICU SIDE DRAWER I U NJEGA ISTO NAVLINKS DA BI ADIO ZA MOBILNE TELEFONE.

</React.Fragment> -- u java skript ne mogu da vrateim 2 stvari sa return komandom zato koristim </React.Fragment> da bi mogao da vracam koliko god hocu stvari.

</React.Fragment> -- kao sto su MAINHEADER i SIDEDRAWER.

import React, { useState } from 'react'; --- importujemo useState komandu koja znaci da mozemo da imamo drugacija stanja kada ih definisemo.

useState - kao u primeru sa drawerom mozemo da koristimo useState da stavimo true ili flase da bismo ga samo nekad aktivirali ili ne.

&&-- ovo znaci ako je( OVO TACNO && onda ce (ovo da radi)). isti efekat kao ako je (OVO TACNO ?( OVO CE DA RADI ): NULL).

const MainNavigation = props => {
const [drawerIsOpen, setDrawerIsOpen] = useState(false);----- ovde sam definisao da je drawer zatvoren false.

const openDrawer = () => {
setDrawerIsOpen(true);------ a ovde sam napravio novu funkciju koja drawer otvara odnosno ga stavlja na true i poszivom na tu funkciju ja ga otvaram a stavio sam to kod dugmeta on click zanci kad kliknem on ce se otvoriti.
};

{drawerIsOpen && <Backdrop onClick={closeDrawer} />} --- proveravam da li je drawer otvoren ako jeste aktivira se backdrop i onClick komandom prosledjujem closeDrawer i on zattvara drawer.

show={drawerIsOpen} - to je props.show koji se nalazi u sidedrawer i on kontrolise sada drawer iznutra.




*/

