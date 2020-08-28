import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { AuthContex, AuthContext } from '../../context/auth-context';


const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
    <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/places/new">ADD PLACES</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
        <button onClick={auth.logout}>LOGOUT</button>
        </li>
    )}
    </ul>
    
    );
};

export default NavLinks;

/*
import { NavLink } from 'react-router-dom'; --- poseban link koji pokazuje drugu boju da zanmo da vodi na neki drugi link.

<li>
<NavLink to="/">AUTHENTICATE</NavLink> ----- ova komanda dodaje dugme sa navigacionim linkom koji se pojavljuje u headeru nije zapravo dugme neko navigacioni link.
</li>

EXACT - znaci da ce samo taj link biti aktivan i pokazivati na njega.


 
*/