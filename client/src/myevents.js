import {useState, useEffect, useContext} from 'react';
import LocationContext from './locationcontext';

const MyEvents=()=>{
    const{location,updateLocation}=useContext(LocationContext);
    const[eventType, setEventType]=useState('Sports');
    const[eventName, setEventName]=useState('Cricket Match');
    const[eventDesc, setEventDesc]=useState('Test');
    const handleEventTypeChange=()=>{
        setEventType('Conference');
    }

    useEffect(()=>{
        console.log('triggered useEffect');              //componentDidMount but unlike that it will get trigger everytime the state changes

    });
    return(
        <div>
            <h1>My Events</h1>
            <p>List of events will be displayed here.</p>
            <hr />
            <p>Location: {location}</p>
            <h3>{eventType}</h3>
            <h3>{eventName}</h3>
            <h3>{eventDesc}</h3>
            <button onClick={handleEventTypeChange}>Change Event Type</button>
        </div>
    );
}
export default MyEvents;