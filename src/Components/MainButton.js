import React from 'react'

const MainButton = (props) => {
  return (
    <button className=' h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2' >{props.buttontext}</button>
  )
}

export default MainButton