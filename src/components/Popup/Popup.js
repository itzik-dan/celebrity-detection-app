import React, { useEffect } from "react";
import "./Popup.css";

const Popup = (props) => {
  useEffect(props.updateLoading);

  return (
    <div className="popup">
      <div className="popup\_inner">
        <table>
          <tbody>
            <tr>
              <th>Celebrity Details (top 3 predictions)</th>
              <th>Probability</th>
            </tr>
            <tr>
              <th>{props.predictions[0].name}</th>
              <th>
                {Number(props.predictions[0].value * 100).toFixed(2) + "%"}
              </th>
            </tr>
            <tr>
              <th>{props.predictions[1].name}</th>
              <th>
                {Number(props.predictions[1].value * 100).toFixed(2) + "%"}
              </th>
            </tr>
            <tr>
              <th>{props.predictions[2].name}</th>
              <th>
                {Number(props.predictions[2].value * 100).toFixed(2) + "%"}
              </th>
            </tr>
          </tbody>
        </table>
        <br></br>
        <button onClick={props.refreshPage}>Try Another</button>
      </div>
    </div>
  );
};

export default Popup;
