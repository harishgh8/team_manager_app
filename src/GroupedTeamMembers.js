import React, { useState } from "react";

const GroupedTeamMembers = ({
  employees,
  handleEmployeeClick,
  selectedTeam,
  handleSelectTeam,
}) => {
  const [groupedTeam, setGroupedteam] = useState(selectedTeam);
  console.log(selectedTeam);
  return (
    <div className="container">
      <div className="row">
        <h6>Hello</h6>
      </div>
    </div>
  );
};

export default GroupedTeamMembers;
