import React from 'react';

import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';



const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces =DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

/*
return <PlaceList items={} />; --- Saljemo iteme zato treba items.

const DUMMY_PLACES =[ -- ovo je samo trenutno tu ce biti ubacene stavri koje ce se slati na iteme a kasnije kad povezemo u backendu onda ce se sami unositi.

import { useParams } from 'react-router-dom'; --- importovano da bi  mogao da koristim posebne IDove urla koji dodelim kome.

useParams(); --- samo se koriste u funkcijskim komponentama. Daje nam pristum URl-u koji ukucamo da je dodeljen tom paragrafu.

DUMMY_PLACES.filter(place => place.creator === userId)-- sa ovim pristupamo dummyplaces i gledamo kroz sva mesta i samo akko je jednako userId onda ce biti taj koji vidimo.


*/