import {Action} from "redux";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type AppState = {
    readonly count: number
}

interface IIncrementAction extends Action<typeof INCREMENT> {
    count: number
}

interface IDecrementAction extends Action<typeof DECREMENT> {
    count: number
}

export type AppActions = IIncrementAction | IDecrementAction;
