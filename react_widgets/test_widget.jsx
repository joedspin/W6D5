import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

class TestWidget extends React.Component {
  constructor(props) {
    super(props);
    // console.log('hello');
  }

  render() {
    const tc = [{title: "tab1",content: "tab1 content"},
      { title: "tab2", content: "tab2 content" },
      { title: "tab3", content: "tab3 content" }];
    return(
      <>
        <Clock />
        <Tabs titleContent ={tc}/>
        <Weather />
      </>
    )
  }
}

export default TestWidget;