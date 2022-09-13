import React from "react";

import Teams from "./Teams";
import TeamList from "./TeamList";

const Employees = () => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <Teams />

          <TeamList />
        </div>
      </div>
    </main>
  );
};
export default Employees;
