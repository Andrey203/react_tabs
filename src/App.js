import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selected: tabs[0],
  }

  option = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selected.title}
        </h1>
        <Tabs
          option={this.option}
          tabs={tabs}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
