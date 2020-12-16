import ChildDataReducer from '../../modules/ChildData/Stores/Reducers/ChildDataReducer';
import DashboardMenuReducer from '../../modules/DashboardMenu/Stores/Reducers/DashboardMenuReducer';
import ListIngredientReducer from '../../modules/ListIngredient/Stores/Reducers/ListIngredientReducers';
import RecomendationMenuReducer from '../../modules/RecomendationMenu/Stores/Reducers/RecomendationMenuReducer';
import SignInReducer from '../../modules/SignIn/Stores/Reducers/SignInReducer';
import SignUpReducer from '../../modules/SignUp/Stores/Reducers/SignUpReducer';
import { combineReducers } from 'redux'

// import NutritionalNeedsReducer from '../../modules/NutritionalNeeds/Stores/Reducers/NutritionalNeedsReducer';





// import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
    SignUpReducer,
    SignInReducer,
    ListIngredientReducer,
    RecomendationMenuReducer,
    ChildDataReducer,
    DashboardMenuReducer,
    // NutritionalNeedsReducer
    // form: formReducer
});

export default RootReducer;