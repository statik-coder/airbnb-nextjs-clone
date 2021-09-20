import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { DealType } from '../pages/search';

interface Props {
  searchRes: DealType[];
}

export const Map: React.FC<Props> = ({ searchRes }) => {
  const [selected, setSelected] = useState<DealType | null>();

  const coordinated = searchRes.map((item) => {
    return {
      longitude: item.long,
      latitude: item.lat,
    };
  });

  const center = getCenter(coordinated);

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    zoom: 11,
    latitude: center ? center.latitude : 37.7577,
    longitude: center ? center.longitude : -122.4376,
  });

  return (
    <ReactMapGL
      {...viewPort}
      onViewportChange={setViewPort}
      mapStyle="mapbox://styles/stat1k/cktspjwdr5d7t17oz5qwwe4zv"
      mapboxApiAccessToken={process.env.mapbox_access_token}>
      {searchRes.map((res) => {
        return (
          <div key={res.img}>
            <Marker
              onClick={() => setSelected(res)}
              longitude={res.long}
              latitude={res.lat}
              offsetLeft={-20}
              offsetTop={-10}>
              <div className="py-1 px-2 shadow-md hover:scale-105 transform transition duration-150 cursor-pointer border-black border-2 rounded-full bg-white text-xs">
                {res.price}
              </div>
            </Marker>

            {selected && selected.long === res.long && (
              <Popup
                closeOnClick
                latitude={res.lat}
                longitude={res.long}
                onClose={() => setSelected(null)}>
                <span>
                  {res.title} / {res.star} stars
                </span>
              </Popup>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
};
