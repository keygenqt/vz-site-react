import {useContext, useEffect, useReducer, useState} from "react";
import PropTypes from "prop-types";
import {MD5} from "crypto-js";
import {NavigateContext} from "../contexts/NavigateContext";

/**
 * Request reducer
 *
 * @param method
 * @param params
 * @return {never}
 */
export const useRequest = (method, ...params) => {

    const {type} = useContext(NavigateContext)
    const [arg] = useState(params)

    const initialState = {
        status: 'idle',
        loading: true,
        error: null,
        data: null,
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING':
                return {...initialState, status: 'fetching', loading: true};
            case 'FETCHED':
                return {...initialState, status: 'fetched', data: action.payload, loading: false};
            case 'FETCH_ERROR':
                return {...initialState, status: 'error', error: action.payload, loading: false};
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {

        let cancelRequest = false;

        const fetchData = async () => {
            dispatch({type: 'FETCHING'});
            try {
                await new Promise(r => setTimeout(r, 1000));
                if (cancelRequest) return;

                const response = await method.apply(this, arg)
                dispatch({type: 'FETCHED', payload: response});

            } catch (error) {
                if (cancelRequest) return;
                dispatch({type: 'FETCH_ERROR', payload: error});
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [type, method, arg]);

    return state;
}

useRequest.propTypes = {
    method: PropTypes.func.isRequired,
    params: PropTypes.object,
};