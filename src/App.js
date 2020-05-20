import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const seedDuration = 1; // Days

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        duration: seedDuration,
        end: moment()
          .add(seedDuration, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  onEventResize = ({start, end}) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      state.events[0].duration = moment(end).diff(start, 'days');
      return { events: state.events };
    });  
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = moment(start).add(state.events[0].duration, "days");
      return { events: state.events };
    });
  };  

  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
