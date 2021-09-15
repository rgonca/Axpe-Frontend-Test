import { CSSProperties } from "react"
import ReactGoogleAutocomplete from "react-google-autocomplete"

const SearchBox = ({ onPlaceSelected }: any) => {
    const style: CSSProperties = {
        position: 'fixed',
        minWidth: 300,
        zIndex: 10,
        top: 80,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 10, border: '1px solid #000000',
        borderRadius: 8,
        outline: 'none'
    }
    return (
        <div>
            <ReactGoogleAutocomplete
                onPlaceSelected={onPlaceSelected}
                style={style}
            />
        </div>
    )
}

export default SearchBox