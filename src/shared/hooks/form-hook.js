import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            };
      default:
        return state;
    }
  };

export const useForm = (initialInputs,initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
      });
      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
      }, []);

      const setFormData = useCallback ((inputData, formValidity) => {
          dispatch({
              type: 'SET_DATA',
              inputs: inputData,
              formIsValid: formValidity
          });
      }, [] );

      return [formState, inputHandler, setFormData];
};



/*
HOOKS JE VALJDA DA MOGU DA KORISTIM USE REDUCER ILI USE STATE U DRUGIM FUNKCIJAMA KOJE JE REACT PREPOZNATI I PONOVO URADITI TOJ FUNKCIJI DA JE RERENDUJE SA TIM DODATNIM RENDOVANJEM.

hooks funkcije uvek krecu sa malim slovom "useForm".

OVAJ USE REDUCER JE BIO U NEW PLACE AL POSTO CEMO VISE PUTA TO KORISTITI PRAVIMO HOOK OVDE DA MOGU SVI DA GA KORISTE.

HOOKS SE MOGU KORISTITI SAMO DIREKTNO U KOMPONENTNE FUNKCIJE ne mogu se koristiti u foor loops u if vlokove...





*/