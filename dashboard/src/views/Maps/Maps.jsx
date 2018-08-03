import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => {
    
    const markers = props.crowd.map((location, index) => (
      <Marker position={location} key={index} />
    ));
    console.log(props.position);
    return (
    <GoogleMap
      defaultZoom={13}
      center={props.position}
      defaultCenter={props.position}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: true
      }}
    >
    {markers}
      {/* <Marker position={{ lat: 21.372493, lng: 39.851559 }} />
      <Marker position={{ lat: 21.370935, lng: 39.845079 }} /> */}

    </GoogleMap>
  )})
);

function Maps({ ...prop }) {
  
  return (
    <CustomMap 
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQJq13e28LYxO7CuCQYbuL2tzfKDn0iao&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `48vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      crowd={prop.crowd}
      position={prop.position}
    />
  );
}

export default Maps;
