import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import SearchBox from './Searchbox';

import { useDispatch, useSelector } from 'react-redux';
import { addMarkerAction } from '../redux/maps/maps.actions';
import { RootState } from '../redux/store';

const Map = () => {
    const dispatch = useDispatch()
    const markers = useSelector((state: RootState) => state.maps.markers)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GMAPS_API_KEY}`
    })

    const onPlaceSelected = (place: any) => {
        if (!place.geometry) {
            return false;
        }
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()
        dispatch(addMarkerAction({ lat: lat, lng: lng }))
    }

    const containerStyle = {
        maxWidth: '100vw',
        height: '100vh'
    };


    const center = {
        lat: 40.2596580482148,
        lng: -3.692849816115912
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            {markers.map((marker: any, i: any) => 
                <Marker
                    key={i}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
            )}
            <SearchBox onPlaceSelected={onPlaceSelected} />
            <></>
        </GoogleMap>
    ) : <></>

}

export default Map
