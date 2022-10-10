import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models /IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils /date";

interface EventsCalendarProps {
    events: IEvent[];
}

const EventsCalendar: FC<EventsCalendarProps> = (props) => {
    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        )
    }
    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventsCalendar;