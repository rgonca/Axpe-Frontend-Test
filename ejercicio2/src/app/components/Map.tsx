import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import SearchBox from './Searchbox';
const containerStyle = {
    maxWidth: '100%',
    height: '900px'
};

const center = {
    lat: 40.2596580482148,
    lng: -3.692849816115912
};

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GMAPS_API_KEY}`
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(map => {
        const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(map => {
        setMap(null)
    }, [])


    const onPlaceSelected = (place: any) => {
        console.log(place);
        
    }
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <SearchBox onPlaceSelected={onPlaceSelected} />
            <></>
        </GoogleMap>
    ) : <></>

}

export default Map
