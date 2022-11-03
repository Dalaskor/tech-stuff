import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ProductActionCreators from '../store/action-creator/product';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ProductActionCreators, dispatch);
}