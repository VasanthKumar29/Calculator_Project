import React, { useState } from 'react';

function Main() {
  const [result, setResult] = useState('');
  const [preResult, setPreResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear= () => {  
    if(preResult === ''){
      setResult('');
    }
    else{
      setPreResult(result);
      setResult('');     
    }
    
  }

  const clearAll = () => {
    setResult('');
    setPreResult('');
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
    if(result.length === 1){
      setPreResult('');
    }
  }

  const calculate = () => {
    try{
      setPreResult(result);
      setResult(eval(result).toString());
    }
    catch(e){
      setResult('error');
    }
  }


  return (
    <div>
       <h1>C A L C U L A T O R</h1>
      <div className="calci-grid">
     
        <div className='output'>
          <div className='prev-operand'>{preResult}</div>
          <div className='current-operand'>{result}</div>
        </div>

        <button onClick={clear} onDoubleClick={clearAll} id="clear" className='span-two'>AC</button>
        <button onClick={backspace} id="backspace">DEL</button>
        <button name="/" onClick={handleClick}>÷</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="*" onClick={handleClick}>×</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={calculate} id="result" className='span-two'>=</button>

      </div>
    </div>
    
  );
}

export default Main;