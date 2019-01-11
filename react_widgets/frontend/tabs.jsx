import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabsIndex: 0};
  }

  changeTab(idx){
    // debugger
    this.setState({tabsIndex: idx});

  }

  render() {
    const headers = this.props.titleContent.map((pairs, idx) => {
      let thisClass = 'tab-headers';
      if (idx === this.state.tabsIndex) thisClass += ' selected';
      return (
        <span className={thisClass} key={idx}>
        <h1 onClick={() => this.changeTab(idx)}>
        {pairs.title}</h1>
      </span>
      )
    });
    return (
    <>
      <div className="tabs">
          <div className="tab-headers">{headers}</div>
        <article className="tab-content">
          {this.props.titleContent[this.state.tabsIndex].content}
        </article>
      </div>
    </>
    );
  }
}

export default Tabs;