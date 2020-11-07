import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function Map() {
  return (
          <GoogleMap
            defaultZoom = {10}
            defaultCenter = {{lat: 45.421532, lng: -75.697189}}
          />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapComponent() {
  return(
    <div style = {{width: '100vw', height: '50vh'}}>
    <WrappedMap
      googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8697K-Vxv4dnjtbIiOx4JGsVY-hbqWd0`}
      loadingElement = {<div style = {{height: '100%'}} />}
      containerElement = {<div style = {{height: '100%'}} />}
      mapElement = {<div style = {{height: '100%'}} />}
    />
  </div>
  )
} 