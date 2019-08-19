import {AppActions, AppState} from "./types";
import {Reducer} from "redux";

const initialState: AppState = {
    count: 0
};

const reducer: Reducer<AppState, AppActions> = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + action.count
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.count
            };
        default:
            return state;
    }
};

export default reducer;
