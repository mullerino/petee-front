import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css'

const Map = () => {
  return (
    <div className={styles.containerMap}>
      <MapContainer center={[-5.842377476890539, -35.197078814057804]} zoom={30} style={{ height: '100%', width: '100%', zIndex: '1' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[-5.842377476890539, -35.197078814057804]} />
      </MapContainer>
    </div>
  )
}

export default Map
