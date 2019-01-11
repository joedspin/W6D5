import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {temp: 0};
    this.request = this.request.bind(this)();
  }
    componentWillUnmount() {
      clearInterval(this.tempInterval);
    }

  componentDidMount() {
    const tempInterval = setInterval(this.request, 600000);
    this.tempInterval = tempInterval;
  }

  request(){
    let that = this;
    let request = new XMLHttpRequest();

    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=10003,us&id=524901&APPID=a03a8bf951543130ca37bd9b9876aed5', true);
    
    request.onload = function () {
      const data = JSON.parse(request.responseText);
      const tempk = data.main.temp;
      const tempf = Math.round(((tempk - 273.15) * (9 / 5) + 32)*100)/100 ;
      that.setState({temp: tempf});
    };

    request.send();

  }

  render(){
    return(
      <>
        <div className="temp">
          <h2>Temperature in New York, NY</h2>
          <p>{this.state.temp}&deg;F</p>
        </div>
      </>
    )
  };
}

export default Weather;

