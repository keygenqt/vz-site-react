import {useContext, useEffect, useReducer, useState} from "react";
import PropTypes from "prop-types";
import {MD5} from "crypto-js";
import {AppContext} from "../contexts/AppContext";

/**
 * Request reducer
 *
 * @param method
 * @param refresh
 * @param params
 * @return {never}
 */
export const useRequest = (method, refresh, ...params) => {

    const {type} = useContext(AppContext)
    const [arg] = useState(params)
    const [update, setUpdate] = useState(refresh)

    const key = `request-${MD5(method.toString())}`

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
        if (!key) return;

        const fetchData = async () => {

            if (type === 'PUSH' || update) {
                localStorage.removeItem(key)
                if (update) {
                    await new Promise(r => setTimeout(r, 500));
                }
                setUpdate(false)
            }

            if (localStorage.getItem(key)) {
                const data = JSON.parse(localStorage.getItem(key));
                dispatch({type: 'FETCHED', payload: data});
            } else {
                dispatch({type: 'FETCHING'});
                try {
                    await new Promise(r => setTimeout(r, 1000));
                    if (cancelRequest) return;

                    const response = await method.apply(this, arg)
                    localStorage.setItem(key, JSON.stringify(response))
                    dispatch({type: 'FETCHED', payload: response});

                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({type: 'FETCH_ERROR', payload: error});
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [key, type, method, arg, update]);

    useEffect(() => {
        if (refresh) {
            setUpdate(true)
        }
    }, [refresh])

    return state;
}

useRequest.propTypes = {
    method: PropTypes.func.isRequired,
    params: PropTypes.object,
};