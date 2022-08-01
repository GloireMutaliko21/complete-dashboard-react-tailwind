/* eslint-disable no-unused-vars */
import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Inject } from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {

  const save = 'e-event-create e-text-ellipsis e-control e-btn e-lib e-flat e-primary';
  const saveEvent = 'e-control e-btn e-lib e-primary e-event-save e-flat';
  const moreDetails = 'e-event-details e-text-ellipsis e-control e-btn e-lib e-flat';

  const closePopup = (args) => {
    const classNameSave = args.event.target.className

    if (args.event.target.className !== moreDetails) {
      if (classNameSave === save || classNameSave === saveEvent) {
        scheduleData.push({
          Id: scheduleData.length + 1,
          Subject: args.data.Subject,
          Location: args.data.Location,
          StartTime: args.data.StartTime,
          EndTime: args.data.EndTime
        })
        console.log(scheduleData);
      }
    }
  }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        popupClose={closePopup}
        height='650px'
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar