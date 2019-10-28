import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import './App.css';

import {PageHeader} from 'antd';
import {Start} from './components'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader
          style={{
            borderBottom: '1px solid rgb(235, 237, 240)'
          }}
          title="口算生成器"
        />
        <Start className="start"/>
      </div>
    )
  }
}
