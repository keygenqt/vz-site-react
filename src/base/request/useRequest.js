import {useContext, useEffect, useReducer, useState} from "react";
import PropTypes from "prop-types";
import {NavigateContext} from "../contexts/NavigateContext";
import {AppCache} from "../../base";

/**
 * Request reducer
 *
 * @param method
 * @param refresh
 * @param params
 * @return {never}
 */
export const useRequest = (method, refresh = false, ...params) => {

    const {type} = useContext(NavigateContext)
    const [arg] = useState(params)
    const [update, setUpdate] = useState(refresh)

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

            if (type === 'PUSH' || update) {
                AppCache.requestClear(method)
                if (update) {
                    await new Promise(r => setTimeout(r, 500));
                }
                setUpdate(false)
            }

            if (AppCache.requestIsHas(method)) {
                dispatch({type: 'FETCHED', payload: AppCache.requestGet(method)});
            } else {
                dispatch({type: 'FETCHING'});
                try {
                    await new Promise(r => setTimeout(r, 1000));
                    if (cancelRequest) return;

                    const response = await method.apply(this, arg)

                    AppCache.requestSet(method, response)
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
    }, [type, method, arg, update]);

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