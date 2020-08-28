import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import Avatar from '../../shared/components/UIElements/Avatar';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
        <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
          </Link>
          </Card>
    </li>
  );
};

export default UserItem;

/*
RAZUMEM ZASTO PROPS.IMAGE ALI ZASTO ALT=PROPS.NAME????

LINK - to wrapuje sve sto se nalazi unutar linka u blok koji moze da se klikne kao dugme.

LINK to - kad se klinkne ide na taj link.

<Link to={`/${props.id}/places`}> - to znaci da ce svaki korisnik imati drugi link.


*/
