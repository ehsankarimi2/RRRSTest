import {AppState, ReducerActions, ReducerActionTypes} from "./types";
import {Reducer} from "redux";

const initialState: AppState = {
    count: 0
};

const reducer: Reducer<AppState, ReducerActions> = (state = initialState, action) => {
    switch (action.type) {
        case ReducerActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + action.count
            };
        case ReducerActionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - action.count
            };
        default:
            return state;
    }
};

export default reducer;
