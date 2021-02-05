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
      <div className="flex flex-col items-center">
        <h1 className="text-6xl mt-12 mb-24 md:text-7xl lg:text-8xl text-center font-bold w-full">
          <span className="py-5 text-transparent bg-clip-text text-center font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">
            Foodbank
          </span>
        </h1>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          className="mb-16"
          containerStyle={{
            height: '60vh',
            width: '100%'
          }}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-4.2858, 55.8698]} />
          </Layer>
        </Map>
      </div>
    </Layout>
  )
}

export default HomePage;