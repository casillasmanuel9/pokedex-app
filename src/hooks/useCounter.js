import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter( initialState );
    }

    const increment = ( factor ) => {
        setCounter( counter + factor );
    }

    const decrement = ( factor ) => {
        if( counter - factor >= 0 ) setCounter( counter - factor );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}