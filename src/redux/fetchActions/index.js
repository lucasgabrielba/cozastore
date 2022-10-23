import api from "../../services/api";
import { addProduct, addProducts } from '../ducks/products';

export const getProdutsByPilot = () => {
    return dispatch => {
        api
            .get('/')
            .then(res => {
                dispatch(addProducts(res.data.products))
            })
            .catch(error => console.log(error))
    }
}