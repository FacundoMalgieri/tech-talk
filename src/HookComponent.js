import React, {useEffect, useState} from 'react';
import HelloComponent from './HelloComponent';

/**
 * A functional component receives an object as param
 * but im destructuring to avoid having to use it like
 * props.messageProps
 * @param messageProps
 * @returns {Element<*>}
 */
const App = ({messageProps}) => {
  /**
   * useState is a Hook that allows stateless components to have state
   * returns an array with the state value and the setter
   */
  const [messageState, setMessageState] = useState('from state');
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * The handler for the event listener.
   * Updates the width in the local state.
   */
  const handleResize = () => setWidth(window.innerWidth);

  /**
   * useEffect is a Hook that receives a function as first param.
   * In this case adds the event listener and returns a function
   * that removes it when the component is unmounted.
   * Can receive a dependencies array as 2nd param to run this
   * each time that dependency changes.
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * The handler for the input.
   * Sets the current value of the input into the local state,
   * only if the pressed key is not Enter or null (Empty counts as a value).
   * @param e the key pressed event
   */
  const handleInput = (e) => {
    const {key, target: {value}} = e;
    if (key === 'Enter' && value) {
      setMessageState(value);
    }
  };

  /**
   * Function to reset the state to the first value.
   */
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