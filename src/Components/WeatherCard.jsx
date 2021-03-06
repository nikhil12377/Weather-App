import React from "react";
import { useSelector } from "react-redux";

export default function WeatherCard() {
  // placeData store the data we have fetch from API
  // the data is in JSON format
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="offset-md-4 col-12 col-md-4">
            {/* checks wether we have correct data of location or not */}
            {placeData.location ? (
              // if we have correct data
              // we'll display data of temperature, location name, etc...
              <div className={theme ? "card Dark" : "card"}>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}°</div>
                <div className="desc">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Cloud</div>
                      <div className="data">
                        {placeData.current.cloud}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // else we'll tell user to enter correct name again
              <h2 className="heading">Enter the name of place</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
