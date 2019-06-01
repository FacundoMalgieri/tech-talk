import React, {useEffect, useState} from 'react';
import HelloComponent from './HelloComponent';

const App = ({messageProps}) => {
  const [messageState, setMessageState] = useState('from state');
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleInput = (e) => {
    const {key, target: {value}} = e;
    if (key === 'Enter' && value) {
      setMessageState(value);
    }
  };

  const resetState = () => setMessageState('from state');

  return (
    <div className='app-container'>
      <HelloComponent message={messageState}/>
      <HelloComponent message={messageProps}/>
      <input type='text' onKeyPress={handleInput}/>
      <button onClick={resetState}>Reset State</button>
      <p>{`Width: ${width}`}</p>
    </div>
  );
};

export default App;