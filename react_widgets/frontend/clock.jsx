import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentTime: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentWillUnmount(){
    clearInterval(this.tickInterval);
  }

  componentDidMount(){
    const tickInterval = setInterval(this.tick, 1000);
    this.tickInterval = tickInterval;
  }

  tick(){
    this.setState({currentTime: new Date()});
  }

  render() {
    let ct = this.state.currentTime;

    return (
      <div className="clock">
        <p>Time: {ct.toLocaleTimeString('en-US')}</p>
        <p>Date: {ct.toDateString()}</p>
      </div>
    )
  }
}

export default Clock;