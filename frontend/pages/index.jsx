import Layout from "../components/Layout";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibW91bnRpbnkiLCJhIjoiY2trc3B2a2I3MGRidzJ1bG1pbWFrbzNocyJ9.j3oXww2jPMt109mHKe1Xgg'
});

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-xl pt-3 pb-5">Welcome to the app</h1>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '60vh',
          width: '100%'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </Layout>
  )
}

export default HomePage;