import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    createNewUser,
    loginUserThunk,
    userAuthCheck,
} from '../app/store/ApiThunkCalls';
import { setSlide } from '../app/store/loginReducer';

const AllActions = {
    userAuthCheck,
    loginUserThunk,
    createNewUser,
    setSlide,
};

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(AllActions, dispatch);
};

export default useActions;
