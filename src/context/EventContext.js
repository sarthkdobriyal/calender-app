import { createContext,  useState } from "react";
import {v4 as uuid} from 'uuid';

export const EventContext = createContext();

export const EventContextProvider = ({children}) => {

    const events = [
        {
            id:uuid(),
            title:"First meeting",
            description:"First meet of the day",
            start:new Date(2023,2,1),
            end:new Date(2023,2,2)
        },
        {
            id:uuid(),
            title:"Second meeting",
            description:"Second meet of the day",
            start:new Date(2023,2,4),
            end:new Date(2023,2,5)
        },
        {
            id:uuid(),
            title:"Third meeting",
            description:"Third meet of the day",
            start:new Date(2023,2,5),
            end:new Date(2023,2,9)
        },
        {
            id:uuid(),
            title:"Third meeting",
            description:"Third meet of the day",
            start:new Date(2023,2,5),
            end:new Date(2023,2,9)
        },
    ]

    const [allEvents, setAllEvents] = useState(events);

    


    return (
        <EventContext.Provider
            value={{
                allEvents,
                setAllEvents
            }}
        >
        {children}
        </EventContext.Provider>
    )
}