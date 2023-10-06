import React from 'react'
import './transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
     <h1 className='aa'>WELCOME</h1>
        
        USER NAME:&nbsp;&nbsp;{props.username}
        <br/>
        PASSWORD:&nbsp;&nbsp;{props.password}
        <br/>
        USER TYPE:&nbsp;&nbsp;{props.usertype}

     
    </div>
  )
}

export default Transferdata
