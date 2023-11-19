import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const position = [-24.789040676562674, -65.41031850852323];
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          HQ
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
