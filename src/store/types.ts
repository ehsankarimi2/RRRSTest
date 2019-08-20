import {Action} from "redux";

export type AppState = {
    readonly count: number
}


export enum SagaActionTypes {
    INCREMENT = '@@counterSaga/INCREMENT',
    DECREMENT = '@@counterSaga/DECREMENT'
}

export enum ReducerActionTypes {
    INCREMENT = '@@counterReducer/INCREMENT',
    DECREMENT = '@@counterReducer/DECREMENT'
}

interface IIncrementSagaAction extends Action<SagaActionTypes.INCREMENT> {
    count: number
}

interface IDecrementSagaAction extends Action<SagaActionTypes.DECREMENT> {
    count: number
}

export type SagaActions = IIncrementSagaAction | IDecrementSagaAction;


interface IIncrementReducerAction extends Action<ReducerActionTypes.INCREMENT> {
    count: number
}

interface IDecrementReducerAction extends Action<ReducerActionTypes.DECREMENT> {
    count: number
}

export type ReducerActions = IIncrementReducerAction | IDecrementReducerAction;


