import React from 'react'
import '../App.scss'


function MeetingsModal({allEvents, setAllEvents, setShowMeetingsModal}) {
    
    const handleDelete = (id) => {
        const newAllEvents = allEvents.filter((event) => event.id !== id);
        setAllEvents(newAllEvents);
        
    }

  return (
    <div className='meetings'>
        <div className='container'>
        <img src="https://www.svgrepo.com/show/135247/multiply.svg" alt="" className='cross' onClick={() => setShowMeetingsModal(false)} />
            {
                allEvents.map((event) => {
                    return(
                        <div className='event'>

                        <div className="id">#{event.id}</div>
                        <div className='eventDetails'>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <span className='start'>{event.start.toLocaleString()} - {" "}</span>
                            <span className='end'>{event.end.toLocaleString()}</span>
                        </div>
                        <div className='buttons'>
                            <button className='edit'>Edit</button>
                            <button className='delete' onClick={() => handleDelete(event.id)}>Delete</button>
                        </div>

                            </div>
                    )
                })
            }

        </div>
        
    </div>
  )
}

export default MeetingsModal