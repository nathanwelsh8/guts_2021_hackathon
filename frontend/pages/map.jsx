import Layout from "../components/Layout";
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibW91bnRpbnkiLCJhIjoiY2trc3B2a2I3MGRidzJ1bG1pbWFrbzNocyJ9.j3oXww2jPMt109mHKe1Xgg'
});

const MapPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
       
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          className="mb-16"
          center={[-4.2858, 55.8698]}
          containerStyle={{
            height: '60vh',
            width: '100%'
          }}
        >
          <Marker
            coordinates={[-4.2858, 55.8698]}
            anchor="bottom" >
            <img src={"marker.svg"}/>
          </Marker>
        </Map>
      </div>
    </Layout>
  )
}

export default MapPage;