import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import '../App.scss'
import { v4 as uuid} from 'uuid'


function AddEventModal({ newEvent, setNewEvent, setShowAddEventModal, setAllEvents}) {

    const handleSubmit= (e) => {
        e.preventDefault();
        setAllEvents(prevState => ([...prevState,newEvent]))
        setNewEvent({
            title: "",
            description:"",
            start:"",
            end:""
        })
        setShowAddEventModal(false);
    }

  return (
    <div className='modal'>
        <div className='container'>
            <img src="https://www.svgrepo.com/show/135247/multiply.svg" alt="" className='cross' onClick={() => setShowAddEventModal(false)} />
            <h3>Add Event Details</h3>
            <form  onSubmit={(e) => handleSubmit(e)}>
                
                <input type="text" id="title" placeholder='Add Title' value={newEvent.title} onChange={(e) => setNewEvent({...newEvent,title:e.target.value, id: uuid()})}/>
                
                <input type="text" id="description" placeholder='Description' value={newEvent.description} onChange={(e) => setNewEvent({...newEvent,description:e.target.value})} />
                <DatePicker
                placeholderText='Start Date and time'
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent,start})}
                showTimeSelect
                />
                <DatePicker
                placeholderText='End Date and time'
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent,end})}
                showTimeSelect
                />

                <button>Add Event</button>
                
            </form>

        </div>
    </div>
  )
}

export default AddEventModal