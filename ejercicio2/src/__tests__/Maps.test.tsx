import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../app/redux/store'

import Map from "../app/components/Map";
import SearchBox from "../app/components/Searchbox";

describe('<Map/>', () => {
    test('should display the map', () => {
        render(
            <Provider store={store}>
                <Map />
            </Provider>
        )
    })

})