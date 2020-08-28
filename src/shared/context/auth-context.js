import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
     login: () => {},
      logout: () => {}
    });


/*
kreiramo da napravimo neke objekte koje kasnije mozemo da delimo sa drugim datotekama.

koristim da znam kad sam loginovan a kad nisam.




*/