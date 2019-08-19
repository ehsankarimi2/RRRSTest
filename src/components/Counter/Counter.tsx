import React, {useState} from 'react';
import {connect} from "react-redux";
import {AppActions, AppState, DECREMENT, INCREMENT} from "../../store/types";
import {Dispatch} from "redux";

type Props = {
    count: number
    onIncrement: (count: number) => void
    onDecrement: (count: number) => void
};

const Counter: React.FC<Props> = props => {
    let [count, setCount] = useState(0);


    function onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (isNaN(+event.target.value)) {
            return;
        }
        setCount(+event.target.value);
    }

    return (
        <>
            <input onChange={onInputChangeHandler} value={count}/>
            <button onClick={() => props.onIncrement(count)}>Increment</button>
            <button onClick={() => props.onDecrement(count)}>Decrement</button>
            <br/>
            <p>Count : {props.count} </p>
        </>
    );
};

Counter.propTypes = {};

const mapStateToProps = (state: AppState, ownProps: Props) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
    return {
        onIncrement: (count: number) => dispatch({type: INCREMENT, count: count}),
        onDecrement: (count: number) => dispatch({type: DECREMENT, count: count})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
