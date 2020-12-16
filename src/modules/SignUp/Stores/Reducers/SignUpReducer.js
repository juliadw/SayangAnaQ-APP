import { SET_FORM_REGISTER, SUBMIT_REGISTER_SUCCESS } from "../Actions/types";

const initialState = {
    form: {
        name: '',
        email: '',
        password: '',
    }
}

export default function SignUpReducer (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case SET_FORM_REGISTER:
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

