import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const position = [48.2917, 25.9354];

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "60vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={L.divIcon({ className: "custom-marker" })}
        >
          <Popup>Чернівці, Україна</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
