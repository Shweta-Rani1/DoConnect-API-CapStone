import AddMovie from "./addmovie";
import Menubar from "./menubar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Routes,Route} from'react-router-dom';
import LocationContext from "./locationcontext";
import { useContext,useState } from "react";
import MyEvents from "./myevents";
import MyBookings from "./mybookings";
import Home from "./home";
import Contacts from "./contact";
import Login from "./login";

function App(){
  const [location, setLocation]=useState('Banglore');
  const updateLocation = (newLocation)=>{
    setLocation(newLocation);
  };

 // const location= useContext(LocationContext);
  return (
    <LocationContext.Provider value={{location, updateLocation}}>
  <div>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MyShow-{location}/</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      
      {(location==='Banglore')?
      <li class="nav-item">
        <Link class="nav-link" to='/events'>Events</Link>
      </li>
      :''}
      <li class="nav-item">
        <Link class="nav-link" to='/bookings'>Bookings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/contact'>Contacts</Link>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <Link to="/login" type="button" class="btn btn-outline-success my-2 my-sm-0" >Login</Link>
    </form>
  </div>
</nav>

<Routes>
  <Route path="/" element={<Home></Home>} />
  <Route path="/movies" element={<AddMovie title="Movies" />} />
  <Route path="/events" element={<MyEvents></MyEvents>} />
  <Route path="/bookings" element={<MyBookings></MyBookings>} />
  <Route path="/contact" element={<Contacts />} />
  <Route path="/login" element={<Login />} />

</Routes>
  </div>
  </LocationContext.Provider>
);
}

export default App;
