import { createContext, useContext, useReducer } from "react";
import { SET_ERROR, SET_RESPONSE, SET_LOADING } from './constants';
export const QrContext = createContext();

const initialState = {
    response: null,
    loading: false,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_RESPONSE:
            return {
                ...state,
                response: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export function QrProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <QrContext.Provider value={{ state, dispatch }}>
            {children}
        </QrContext.Provider>
    )
}

export function useQrContext() {
    const context = useContext(QrContext);
    if (!context) throw new Error('useQrContext must be used inside a QrContextProvider');
    return context;
}