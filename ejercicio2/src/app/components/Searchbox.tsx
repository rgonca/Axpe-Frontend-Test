import { useState, useRef } from "react";
import { StandaloneSearchBox, Autocomplete } from "@react-google-maps/api";
import ReactGoogleAutocomplete from "react-google-autocomplete";
const SearchBox = ({ onPlaceSelected }: any) => {
    const style = {
        position: 'fixed',
        minWidth: 300,
        zIndex: 10,
        top: 80,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 10, border: '1px solid black',
        borderRadius: 8,
        outline: 'none'
    }
    return (
        <div>
            <ReactGoogleAutocomplete
                onPlaceSelected={onPlaceSelected}
                style={{
                    position: 'fixed',
                    minWidth: 300,
                    zIndex: 10,
                    top: 80,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 10, border: '1px solid black',
                    borderRadius: 8,
                    outline: 'none'
                }}
            />
        </div>
    )
}

export default SearchBox