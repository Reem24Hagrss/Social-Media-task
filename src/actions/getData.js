import {GET_DATA} from './types';
import axios from 'axios';

export const getData = () => async dispatch =>{
    const response = await axios.get('js/data.json')
    dispatch({type: GET_DATA, payload: response.data})
}
