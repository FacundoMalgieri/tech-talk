import React, {Component} from 'react';
import HelloComponent from './HelloComponent';

class App extends Component {
  state = {
    messageState: 'from state',
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState({width: window.innerWidth});

  handleInput = (e) => {
    const {key, target: {value}} = e;
    if (key === 'Enter' && value) {
      this.setState({messageState: value});
    }
  };

  resetState = () => this.setState({messageState: 'from state'});

  render() {
    const {messageProps} = this.props;
    const {messageState, width} = this.state;

    return (
      <div className='app-container'>
        <HelloComponent message={messageState}/>
        <HelloComponent message={messageProps}/>
        <input type='text' onKeyPress={this.handleInput}/>
        <button onClick={this.resetState}>Reset State</button>
        <p>{`Width: ${width}`}</p>
      </div>
    );
  };
}

export default App;
