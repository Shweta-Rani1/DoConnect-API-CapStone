import {useContext} from "react";
import LocationContext from "./locationcontext";

function Contacts(){
    const {location, updateLocation}=useContext(LocationContext);
    return(
        <div>
            <h1>My Contacts</h1>
            <p>List of Contacts will be displayed here.</p>
      
           {location}
           </div>
    );
 
}
export default Contacts;