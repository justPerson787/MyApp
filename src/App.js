import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js';
import places from "./places.json";

class App extends Component {

  state = {
    places2: [
      { name: "Newport Aquarium",
        location: {
          lat: 39.0947, 
          lng: -84.4974
        }       
      },
      { name: "Cincinnati Zoo",
        location: {
          lat: 39.1446, 
          lng: -84.5086
        }
      },
      { name: "Purple People Bridge",
        location: {
          lat: 39.0980, 
          lng: -84.4977 
        }
      },
      { 
        name: "Fountain Square",
        location: {
          lat: 39.1015, 
          lng: -84.5125
        }
      },
      { 
        name: "Railway Museum of Greater Cincinnati",
        location: {
          lat: 39.0478, 
          lng: -84.5080
        }
      }
    ]
  };

  

  /*componentDidMount() {
      this.setState({ places: this.state.places });
  }*/
  

  render() {
    
    return (
      <main>
        <div id="map">
          
          <MapContainer places={places}/>
        </div>
      </main>
      

    );
  }
}


export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
