import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
        const USERS = [
            {
                id: 'u1',
                name: 'Keanu Reeves',
                image: 'https://i.insider.com/5d66d21e6f24eb396b6c8192?width=1100&format=jpeg&auto=webp',
                places:  3 
            }
        ];


    return <UsersList items={USERS} />;
};

export default Users;


/*
OVde treba da stavim listu korisnika.



*/