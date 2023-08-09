import React from 'react';
import { useState, useRef } from 'react';

const UseRef = () => {
    const [number, setNumber] = useState(0);
    const numberInputRef  = useRef(null);

    const handleIncrement = () => {
        setNumber((prevNumber) => prevNumber + 1);
      };
    
      const handleDecrement = () => {
        setNumber((prevNumber) => prevNumber - 1);
      };

      const handleCopy = () => {
        const enteredValue  = parseFloat(numberInputRef.current.value);
        if (!isNaN(enteredValue)) {  // Đoạn này kiểm tra xem giá trị enteredValue có phải là một số hợp lệ hay không bằng cách sử dụng câu lệnh điều kiện. Nếu enteredValue là một số hợp lệ (không phải NaN), thì nội dung bên trong khối lệnh sẽ được thực thi.
            setNumber(enteredValue);
        }
      }
    return (
        <div className='App'>
             <h2>Displayed Number: {number}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
        <input type="text" ref={numberInputRef} />
      <button onClick={handleCopy}>Copy</button>
        </div>
    );
};

export default UseRef;