import React, { useState, useEffect } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function PopupContent({ eventDetail, getData }) {
    const [editEvent, setEditEvent] = useState({ title: "", start: "", end: "" })

    function handleEditEvent(e) {
        console.log(e)
        fetch(`http://localhost:9292/events/${e.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: editEvent.title,
                start: editEvent.start,
                end: editEvent.end
            })
        }).then(response => response.json())
            .then(e => {
                setEditEvent(editEvent)
                getData()
            })
    }

    return (
        <div>
            <h3>{eventDetail.title}</h3>
            <div>
                <h4> Title: <br/> <input
                    id='edit-title-box'
                    className="input"
                    type="text"
                    defaultValue={eventDetail.title}
                    placeholder="Edit Title"
                    onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })} />
                </h4>

                <h4>Starts: {eventDetail.start.toString()}
                    <DatePicker
                        className="input"
                        id='start-input' placeholderText='Start Date'
                        selected={editEvent.start} onChange={(start) => setEditEvent({ ...editEvent, start })}
                        defaultValue={eventDetail.start}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa" /></h4>
                <h4>Ends: {eventDetail.end.toString()}
                    <DatePicker
                        className="input"
                        placeholderText='End Date' selected={editEvent.end} onChange={(end) => setEditEvent({ ...editEvent, end })}
                        defaultValue={eventDetail.end}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa" /></h4>

                <button className='btn' id='edit-btn-id' onClick={() => handleEditEvent(eventDetail)}>??????</button>
            </div>
            <br />
        </div>
    )
}

export default PopupContent