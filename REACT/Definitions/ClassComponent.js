// Class Component are the javascript Classes that extends the React.Component class. they use render method to return
// JSX elements . Class Components have their own internal state and lifecycle methods .
// ex===> componentDidMount,componentDidUpdate,componentWillUnmount















import React, { Component } from 'react';
class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Component is not mounted yet.'
    };
  }

  componentDidMount() {
    // This method is called after the component is first rendered.
    // You can perform tasks like data fetching or setup here.
    setTimeout(() => {
      this.setState({ message: 'Component has been mounted!' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    // This method is called after a component's state or props change.
    // You can perform tasks based on these changes.
    if (prevState.message !== this.state.message) {
      console.log('Message has changed:', this.state.message);
    }
  }

  componentWillUnmount() {
    // This method is called just before the component is removed from the DOM.
    // You can perform cleanup tasks here, like removing event listeners.
    console.log('Component is unmounting...');
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default LifecycleExample;

