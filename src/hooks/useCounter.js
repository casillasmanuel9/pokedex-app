import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( counter + 20 );
    }

    const decrement = () => {
        if( counter - 20 >= 0 ) setCounter( counter - 20 );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}