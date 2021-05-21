import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api"
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css";
import styledMap from "./styledMap";
import './App.css';

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: "100vh",
};
const center = {
  lat: 43.784439,
  lng: -88.787865,
}
const options = {
  styles: styledMap,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
    const [markers, setMarkers] = React.useState([]);


if (loadError) return "Error loading maps";
if (!isLoaded) return "Loading Maps";

  return <div>
    <h1>Car Meets</h1>
    <GoogleMap mapContainerStyle={mapContainerStyle}
     zoom={10}
      center={center}
      options={options}
      onClick={(event) => {
        setMarkers(current => [...current, {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
          },
        ]);
       }}
      >
        
      </GoogleMap>
  </div>
}