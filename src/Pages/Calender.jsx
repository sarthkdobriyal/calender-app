import React,{ useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import '../App.scss'
import Navbar from '../components/Navbar'
import AddEventModal from '../components/AddEventModal'

function Calender() {
    const locales = {
        "en-IN":require("date-fns/locale/en-IN")
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })

    const events = [
        {
            title:"First meeting",
            description:"First meet of the day",
            start:new Date(2023,2,1),
            end:new Date(2023,2,2)
        },
        {
            title:"Second meeting",
            description:"Second meet of the day",
            start:new Date(2023,2,4),
            end:new Date(2023,2,5)
        },
        {
            title:"Third meeting",
            description:"Third meet of the day",
            start:new Date(2023,2,5),
            end:new Date(2023,2,9)
        },
    ]

    const [newEvent, setNewEvent] = useState({
        title: "",
        description:"",
        start:"",
        end:""
    })

    const [allEvents, setAllEvents] = useState(events);

    const [showModal, setShowModal] = useState(false);


    const handleModal  = () => {
        setShowModal(true);
    } 

    

  return (
    <div className='main'>
        <Navbar />

        {showModal && <AddEventModal
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            setShowModal={setShowModal}
            setAllEvents={setAllEvents}
        />}

        <div className='calender'>
            <button className='addNew' onClick={handleModal}>+ Add New Event</button>
            <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{
                height:500,
                margin:"50px"
            }}
        />
        </div>
        

    </div>
  )
}

export default Calender