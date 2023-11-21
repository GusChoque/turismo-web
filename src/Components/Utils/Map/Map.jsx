import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VITE_MAP_COORD } from "../../../../env";
import "./Map.css"

function Map() {
  const position = VITE_MAP_COORD;
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      className="leaflet-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
