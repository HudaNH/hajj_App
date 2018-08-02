import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const locations = [{ lat: 21.372494, lng: 39.851569 }, 
  { lat: 21.373495, lng: 39.852579 }, 
  { lat: 21.374496, lng: 39.853589 },
  { lat: 21.375497, lng: 39.854599 }, 
  { lat: 21.376498, lng: 39.855569 }];

const CustomMap = withScriptjs(
  withGoogleMap(props => {
    
    const markers = locations.map((location, index) => (
      <Marker position={location} key={index} />
    ));

    return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 21.375251, lng: 39.851559 }}
      defaultOptions={{
        scrollwheel: false,
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
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
