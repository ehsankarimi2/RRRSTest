import React, {useState} from 'react';
import {connect} from "react-redux";
import {AppState, SagaActions} from "../../store/types";
import {Dispatch} from "redux";
import {decrementSaga, incrementSaga} from "../../store/actions";

type Props = {
    count: number
    onIncrement: (count: number) => void
    onDecrement: (count: number) => void
};

const Counter: React.FC<Props> = props => {
    let [inputValue, setInputValue] = useState(0);


    function onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (isNaN(+event.target.value)) {
            return;
        }
        setInputValue(+event.target.value);
    }

    return (
        <>
            <input onChange={onInputChangeHandler} />
            <button onClick={() => props.onIncrement(inputValue)}>Increment</button>
            <button onClick={() => props.onDecrement(inputValue)}>Decrement</button>
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

const mapDispatchToProps = (dispatch: Dispatch<SagaActions>) => {
    return {
        onIncrement: (count: number) => dispatch(incrementSaga(count)),
        onDecrement: (count: number) => dispatch(decrementSaga(count))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
