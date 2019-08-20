import {ReducerActions, ReducerActionTypes, SagaActions, SagaActionTypes} from "./types";

export const incrementReducer = (count: number) : ReducerActions => {
    return {
        type: ReducerActionTypes.INCREMENT,
        count: count
    }
};

export const decrementReducer = (count: number) : ReducerActions => {
    return {
        type: ReducerActionTypes.DECREMENT,
        count: count
    }
};

export const incrementSaga = (count: number) : SagaActions => {
    return {
        type: SagaActionTypes.INCREMENT,
        count: count
    }
};

export const decrementSaga = (count: number) : SagaActions => {
    return {
        type: SagaActionTypes.DECREMENT,
        count: count
    }
};
