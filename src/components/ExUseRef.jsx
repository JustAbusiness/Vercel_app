import React from 'react';
import { useState, useEffect } from 'react';

const ExUseRef = ({initialValue}) => {
    const [count, setCount] = useState(initialValue);


    useEffect(() => {
        let interval;
        if (count > 0) {
            interval = setInterval(() => {
                setCount(prev => prev - 1);
            }, 1000);
        }  
        
        return () => {
            clearInterval(interval);
        }
    }, [count] )

    return (
        <div>
            {count > 0 ? (
                <h1>Count down now is : {count}</h1>
            ) : 
               <h1> Count down is finished !!! </h1>
            }
        </div>
    );
};

export default ExUseRef;