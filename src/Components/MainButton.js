import React from 'react'

const MainButton = (props) => {
  return (
    <button className='text-gray-800 bg-white border rounded py-3 px-3  hover:border-lime-300 focus:border-lime-400 shadow-md outline-0 mb-6 mt-3 focus:bg-lime-100' >{props.buttontext}</button>
  )
}

export default MainButton