import React from 'react';
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const ModalOverlay = props => {
const content = (
    <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit=
        {props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
        >
            <div className={`modal__content ${props.contentClass}` }>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </form>
    </div>
);

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));

};

const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        >
            <ModalOverlay {...props}/>
        </CSSTransition>
    </React.Fragment>
};

export default Modal;

/*
OVO CE BITI FAJL KOJI CE BITI KAO POPOUT MESSAGE I MOCICEMO DA GA KORISTIMO ZA VISE STVARI ALI U OVOM SLUCAJU POKAZIVACE MAPU.

return ReactDOM.createPortal(, document.getElementById('modal-hook')); ---- opet koristimo create portal i reactdoma i to znaci da ce se zasebno bojavljivati ipak je popout message tako da moramo i definisati u index.html fajl.

className={`modal ${props.className}`} ---  STA OVO TACNO ZNACI???

className={`modal ${props.className}`} --- ovo je zbog vece flexibilnosti da ne koristimo samo klass ime nego da dodajemo i druge classe PRETPOSTAVKA.

style={props.style} -- da bismo mogli da dodajemo style iznutra ako budemo hteli. VALJDA???

className={`modal__header ${props.headerClass --- da opet budemo flexibilni i stavili smo headerclass ako budemo hteli da dodamo headerclass kasnije.

<h2>{props.header}</h2> --- ovde cemo ispisati neki text koji se nalazi u headeru.

<form> - hocemo da imamo sve u formi i ako dodajemo kontent da bude sve vrapovano u formu.

{props.onSubmit ? props.onSubmit : event => event.preventDefault --- proveravamo da li je on submit stavljeno i ako jeste onda pozivamo event. da bi videli da ako ima neki buttno da ne pobrkamo sve. a ako budemo dodali on subbmit funkciju onda ce on da bude glavna ovo samo proverava daa li ima ako ne onda ide event.

{`modal__content ${props.contentClass} -- ideja je da ako budemo koristili ovo negde da mozemo da mu obezbedimo neki drugi izgled lakse.

{props.children} ---   dakle ovde ce se pojaviti sve sto dodamo izmedju otvorenih i zatvorenih modal komponente to ce se ovde pojaviti.

{props.footer}--- ovde si naprim buttoni i zbog ovoga sto ima i footer i children zato je sve zamotano u formu da bi bilo sve u jednoj formi.

<React.Fragment> --- STA OVO TACNO ZNaCI VALJDA KAD IMAMO SLICNE FAJLOVE???

{props.show && <Backdrop onClick={props.onCancel}/>} --- ako imamo props show onda ce se rendovati backdrom sa on click on cancel metodom.

{...props} --- ovo uzima sve propove koji slu prosledjeni modalu iz modal overlaya kao sad na primer i on uzima sve njihove vrednosti kao footer header i sve  to i spreduje ih.





*/