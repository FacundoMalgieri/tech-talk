import React, {Component} from 'react';
import HelloComponent from './HelloComponent';

class App extends Component {
  /**
   * The local state of the component.
   * @type {{messageState: string, width: number}}
   */
  state = {
    messageState: 'from state',
    width: window.innerWidth
  };

  /**
   * When component finishes Mounting adds an event
   * listener to the browser's window.
   * 1st param is the event name listened to.
   * 2nd a function to handle what to do when the event occurs.
   */
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * Example to demonstrate how this lifecycle works
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState): void {
    console.log('current state', this.state);
    console.log('prev state', prevState);
  }

  /**
   * Always got to be sure of removing the event listener
   * when the component is unmounted to avoid a memory leak.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  /**
   * The handler for the event listener.
   * Updates the width in the local state.
   */
  handleResize = () => this.setState({width: window.innerWidth});

  /**
   * The handler for the input.
   * Sets the current value of the input into the local state,
   * only if the pressed key is not Enter or null (Empty counts as a value).
   * @param e the key pressed event
   */
  handleInput = (e) => {
    const {key, target: {value}} = e;
    if (key === 'Enter' && value) {
      this.setState({messageState: value});
    }
  };

  /**
   * Function to reset the state to the first value.
   */
  resetState = () => this.setState({messageState: 'from state'});

  /**
   * Class components must implement this method returning an element or null
   * @returns {Element<*>}
   */
  render() {
    const {messageProps} = this.props;
    const {messageState, width} = this.state;
    const placeholder = 'Type and press Enter ...';

    return (
      <div className='app-container'>
        <HelloComponent message={messageState}/>
        <HelloComponent message={messageProps}/>
        <input type='text' onKeyPress={this.handleInput} placeholder={placeholder}/>
        <button onClick={this.resetState}>Reset State</button>
        <p>{`Width: ${width}`}</p>
      </div>
    );
  };
}

export default App;
