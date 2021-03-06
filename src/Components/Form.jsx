import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePlace, UpdatePlaceData } from "../actions/Index";

export default function Form() {
  // place stores the data fetched by API of the
  // location user have entered
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <div className="box">
            <input
              type="text"
              placeholder="enter city name"
              value={place}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  dispatch(UpdatePlaceData(place));
                }
              }}
              onChange={(e) => {
                dispatch(UpdatePlace(e.target.value));
              }}
            />
            <button
              className={theme ? "btn btn-light" : "btn btn-dark"}
              onClick={() => {
                dispatch(UpdatePlaceData(place));
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
