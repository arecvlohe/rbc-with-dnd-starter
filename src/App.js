import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
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
