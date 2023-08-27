import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const ChartPage = () => {
  const [chartData, setChartData] = useState({});
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const result = await response.json();
        const data = {
          labels: Object.keys(result.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(result.cases),
              borderColor: "rgba(255, 0, 0, 0.5)",
              fill: false,
            },
          ],
        };
        setChartData(data);
      } catch (error) {
        console.error("Error fetching the historical data", error);
      }
    };

    const fetchCountriesData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const countries = await response.json();
        setCountriesData(countries);
      } catch (error) {
        console.error("Error fetching the countries data", error);
      }
    };

    fetchChartData();
    fetchCountriesData();
  }, []);

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        {/* <div className="w-full h-1/2 mb-4">
          <Line data={chartData} />
        </div> */}
        <div className="relative z-[1] w-full h-1/2 flex justify-center items-center ">
          <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {countriesData.map((country, index) =>
              country.countryInfo.lat && country.countryInfo.long ? (
                <Marker
                  key={index}
                  position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                  <Popup>
                    <h4>{country.country}</h4>
                    <p>Active: {country.active}</p>
                    <p>Recovered: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        </div>
        <div className="ss:w-96 w-48  ss:h-96 h-48 absolute bottom-32 z-0 ss:left-32 left-0 bg-gradient-to-tl from-[#f09800] to-black rounded-full"></div>
        <div className="ss:w-80 w-28  ss:h-80 h-28 absolute -top-44 z-0 ss:right-32 right-0 bg-gradient-to-br from-[#f09800] to-black rounded-full"></div>
        <div className="ss:w-52 w-32 ss:h-52 h-32 absolute bottom-0 z-0 ss:right-16 right-2 bg-gradient-to-bl from-[#f09800] to-black rounded-full"></div>
      </div>
    </>
  );
};

export default ChartPage;
