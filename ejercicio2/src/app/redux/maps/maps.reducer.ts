import mapsTypes from "./maps.types"

interface MapsState {
    loading: boolean,
    error: null,
    markers: any[]
}

const MAPS_INITIAL_STATE = {
    loading: false,
    error: null,
    markers: [],
}

const mapsReducer = (state: MapsState = MAPS_INITIAL_STATE, action: any) => {
    const { type, payload } = action
    switch (type) {
        case mapsTypes.ADD_MARKER_START:
            return {
                ...state,
                loading: true
            }
        case mapsTypes.ADD_MARKER_SUCCESS:
            return {
                ...state,
                loading: false,
                markers: [...state.markers, payload]
            }
        case mapsTypes.ADD_MARKER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default mapsReducer