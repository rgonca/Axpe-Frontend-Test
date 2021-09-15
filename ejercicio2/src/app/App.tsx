import { lazy, Suspense } from 'react';
import './App.css';

import Map from './components/Map';

function App() {

  console.log(process.env.REACT_APP_GMAPS_API_KEY);

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
