const autocompleteService = new google.maps.places.AutocompleteService();
const sessionToken = new google.maps.places.AutocompleteSessionToken();

const getPredictions = async (search: any) => {
    return await new Promise((resolve, reject) => {
        const geolocation = getGeolocation();
        const predictionsConfig = {
            input: search,
            sessiontoken: sessionToken,
            componentRestrictions: { country: "es" },
        }

        autocompleteService.getPlacePredictions(predictionsConfig,
            async (predictions, status) => {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    reject(status);
                }
                // console.log("traza predicciones en google", predictions);

                resolve(predictions);

            });
    });
}

const getGeolocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log('traza posicion', position.coords.latitude, position.coords.longitude);
                resolve(position);
            });
        } else {
            reject('Geolocation not supported')
        }
    })
}

const geoCode = async(placeDescription: any) => {
    return await new Promise((resolve, reject) => {

        if (placeDescription) {
            new google.maps.Geocoder().geocode({ address: placeDescription }, (results, status) => {
                resolve({
                    lat: results[0].geometry.location.lat(),
                    lon: results[0].geometry.location.lng(),
                    city: results[0].address_components.filter(addressComponent => {
                        return addressComponent.types.indexOf('locality') > -1;
                    })[0].long_name,
                    province: results[0].address_components.filter(addressComponent => {
                        return addressComponent.types.indexOf('administrative_area_level_2') > -1;
                    })[0].long_name
                });
            })
        } else {
            reject('Geocode not found')
        }

    })
}

export default {
    geoCode,
    getPredictions,
    getGeolocation,
}