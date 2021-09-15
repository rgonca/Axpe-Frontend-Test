import mapsTypes from "./maps.types";

export const addMarkerAction = (marker: any) => async (dispatch: any) => {
    dispatch({ type: mapsTypes.ADD_MARKER_START });
    try {
        dispatch({
            type: mapsTypes.ADD_MARKER_SUCCESS,
            payload: marker
        });
    } catch (error) {
        console.log('Agency services error', error);
        dispatch({
            type: mapsTypes.ADD_MARKER_ERROR,
            payload: error
        })
    }
};