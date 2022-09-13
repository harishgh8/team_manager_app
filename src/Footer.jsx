import React from 'react'

const thisYr = new Date

const Footer =()=>{
    return(
        <div className='container'>
        <div className='row'>
<p className='col text-center' > Team allocation App {thisYr.getFullYear()}</p>
        </div>
        </div>
    )
}
export default Footer           