import { SET_ERROR, SET_RESPONSE, SET_LOADING } from './constants';

export const setError = error => ({
    type: SET_ERROR,
    payload: error
})

export const setResponse = response => ({
    type: SET_RESPONSE,
    payload: response
})

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
})