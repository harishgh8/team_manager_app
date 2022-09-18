import React, { useContext } from "react";
import women from "./images/women.png";
import men from "./images/men.png";
import DataContext from "./context/DataContext";

const TeamList = () => {
  const { selectedTeam, employees, handleEmployeeClick } =
    useContext(DataContext);
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="card-collection">
          {employees.map((employee) => (
            <div
              key={employee.id}
              id={employee.id}
              className={
                employee.teamName === selectedTeam
                  ? "card m-2 standout"
                  : "card m-2"
              }
              style={{ cursor: "pointer" }}
              onClick={handleEmployeeClick}
            >
              <img
                src={employee.gender === "male" ? men : women}
                className="card-img-top"
                alt="profile_pics"
              />
              <div className="card-body">
                <h6 className="card-title">{employee.fullName}</h6>
                <p className="card-text">{employee.designation}</p>
                <p className="card-text">{employee.teamName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamList;
