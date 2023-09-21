import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	useMapEvents,
} from "react-leaflet";

import { useState } from "react";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

const Map = () => {
	const { cities } = useCities();

	const [position, setPosition] = useState([40, 0]);
	const [lat, lng] = useUrlPosition();

	const {
		isLoading: isGeolocationLoading,
		position: geolocationPosition,
		getPosition: getGeolocationPosition,
	} = useGeolocation(position);

	useEffect(() => {
		if (lat && lng) setPosition([lat, lng]);
	}, [lat, lng]);

	useEffect(() => {
		if (geolocationPosition)
			setPosition([geolocationPosition.lat, geolocationPosition.lng]);
	}, [geolocationPosition]);

	return (
		<div className={styles.mapContainer}>
			{!geolocationPosition && (
				<Button type="position" onClick={getGeolocationPosition}>
					Get My Location
				</Button>
			)}
			<MapContainer
				className={styles.map}
				center={position}
				zoom={6}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{cities.map((city) => (
					<Marker key={city.id} position={city.position}>
						<Popup>
							{city.cityName}, {city.country} <br /> {city.date}
						</Popup>
					</Marker>
				))}
				<ChangeCenter position={position} />
				<DetectClick />
			</MapContainer>
		</div>
	);
};

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetectClick() {
	const navigate = useNavigate();

	useMapEvents({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}

export default Map;
