import { SET_FORM_LOGIN } from "../Actions/types";

const initialState = {
    form: {
        name: '',
        email: '',
        password: '',
    }
}

export default function SignInReducer (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case SET_FORM_LOGIN:
            return {
                // ...state,
                form: {
                    ...state.form,
                    [action.inputType]: action.inputValue,
                },
            }
        default: 
            return state;
    }
};