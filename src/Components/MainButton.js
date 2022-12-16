import React from 'react'

const MainButton = (props) => {
  return (
    <button className='text-gray-800 bg-white border rounded py-3 px-3  hover:border-lime-300 focus:border-lime-400 shadow-md outline-0 mb-6 mt-3 active:bg-gray-100 active:border-gray-300' >{props.buttontext}</button>
  )
}

export default MainButton