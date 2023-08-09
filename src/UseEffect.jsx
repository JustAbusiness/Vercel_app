import React from 'react';
import ExUseRef from './components/ExUseRef';
import { useState } from 'react';

const UseEffect = () => {
    const [value, setValue] = useState(10)
    return (
        <div className='App'>
            <ExUseRef initialValue={value}></ExUseRef>
        </div>
    );
};

export default UseEffect;