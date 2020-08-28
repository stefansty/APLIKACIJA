import React, { useReducer, useEffect } from 'react';

import { validate } from '../../Util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid ||  false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isTouched &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;

/*
OVO MI JE INPUT ZA NEWPALCES. MALO JE NEJASAN.

props.element === 'input' ? (
<input id={props.id} type={props.type} placeholder={props.placeholder} />
) : ( <textarea />
);      ----------------------Ovo znaci ako je element prop jednak inputu onda ce da izbacuje input ako ne onda je da izbacuje textarea.

import React, { useReducer } from 'react'; - jako slican kao useState ali se koristi kada imamo mnogo kompleksnje funkcije.

useReducer(inputReducer); --- ovako ga pozivamo i prosledjujemo mu bar jedan argument a to je fnkcija u kojoj se nalaze njegove akcije.

switch (action.type) --- koristimo switch statement da saznamo kakvog je tima ta akcija.

case 'CHANGE': --- indetifikator i cekamo promenu te akcije.

default:
return state; --- ako ne bude bilo promene akcije po defaultu ce vratitit state.

...state --- ovako kopiramo stari state da ne bismoizgubili stare podatke.

{!inputState.isValid && <p>{props.erorText}</p>} -- proveravamo da li je validno.

onBlur={touchHandler} - radi kada klikne na taj element.

useEffect - omogucavanam da runujemonekelogikekada se neki dependeci promene.

props.onIput() - pozivamo props.oniput() kao funkciju jer ocekujemo da dobijemo funkciju a u zagradi stavljamo sta cemo da vracamo input komponeneti.






*/
