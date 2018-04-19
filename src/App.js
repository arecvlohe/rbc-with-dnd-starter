import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import './App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import logo from './logo.svg';

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {

  state = {
    events: [{ start: new Date(), end: new Date(moment().add(1, 'days')), title: "Some title" }]
  }

  onEventResize(type, { event, start, end, allDay }) {
    console.log(start)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DnDCalendar style={{ height: '100vh'}} resizable selectable onEventResize={this.onEventResize.bind(this)} events={this.state.events} />
      </div>
    );
  }
}

export default App;
