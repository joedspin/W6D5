import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: ""};
  }

  render(){
    const variables = this.props.inputVals.map((item,idx) =>{
      return(
        <li key={idx}>
          {item}
        </li>
      )
    });

    return (
      <>
        <input type="text"/>
        <ul>
          {variables}
        </ul>
      </>
    )
  }
}


export default Autocomplete;