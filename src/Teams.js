import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Teams = () => {
  const { selectedTeam, handleSelectTeam } = useContext(DataContext);
  return (
    <div className="container">
      <div className="row mt-2">
        <select
          className="form-select form-select-lg"
          value={selectedTeam}
          onChange={handleSelectTeam}
        >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
    </div>
  );
};
export default Teams;
