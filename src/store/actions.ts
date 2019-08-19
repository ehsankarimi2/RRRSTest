import {AppActions, DECREMENT, INCREMENT} from "./types";

export function increment(count: number): AppActions {
    return {
        type: INCREMENT,
        count: count
    }
}

export function decrement(count: number): AppActions {
    return {
        type: DECREMENT,
        count: count
    }
}
