import React, { useEffect, useState } from "react";

import "./weather.css";

const WeekWeather = () => {

	// Esta funcion in-line recibe el json con los climas de la semana una vez fetcheados, y devuelve un grupo de parragrafos para mostrarlos.
	const ListWeatherWeek = ({ weather }) => {
		let weekWeather = [];

		for (let i = 0; i < 6; i++) {
			weekWeather.push(<p key={weather.time[i]}>{weather.time[i]} | <span className="minWeatherNum">{weather.temperature_2m_min[i]}</span>° - <span className="maxWeatherNum">{weather.temperature_2m_max[i]}</span>°</p>);
		}

		return weekWeather;
	}

	// usamos states para cambiar el contenido de la pagina tras fetchear.
	const [isLoading, setIsLoading] = useState(true);

	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		// fetch con promesas para evitar ciertos problemas con async en useEffect
		fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.92&longitude=-57.95&daily=temperature_2m_max,temperature_2m_min&timezone=auto")
			.then(x => x.json()
			.then(data => setWeatherData(data.daily)));
	}, []);

	useEffect(() => {
		if (weatherData.length !== 0) {
			setIsLoading(false);
		}
	}, [weatherData]);

	return (
		<div className="weatherContainer">
			<p>Clima para la siguiente semana:</p>
			{isLoading ? (
				<p>Cargando...</p>
			) : (
				<ListWeatherWeek weather={weatherData} />
			)}
		</div>
	);
}

export default WeekWeather;