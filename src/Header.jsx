import React from 'react'

const Header =({teamMemberCount, selectedTeam})=>{
    return(
        <div className='container'>

      <div className='row mt-2'>
        <header className="mt-4 p5 bg-secondary text-white text-center rounded">
            <h2 className='p-2'>{selectedTeam} has total : {teamMemberCount} members</h2>
        </header>
        </div>
        </div>
    )
}
export default Header           