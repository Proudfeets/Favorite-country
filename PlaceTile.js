import React from 'react'

const PlaceTile = (props) => {
  return (
    <div>
    <li className={props.className} onClick={props.handleClickWrapper} >
    {props.name}
    </li>
    </div>
  )
}
export default PlaceTile
