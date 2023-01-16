import React from 'react'

export default function Details(props) {
  const {name , age}=props
    return (
    <div className='box'>
        <h1> Name : {name}</h1>
        <h1> Age : {age}</h1>
    </div>
  )
}
