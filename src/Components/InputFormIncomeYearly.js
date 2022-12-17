import React from 'react'
import { MainButton } from '../Components/index'
import beniscool from './images/pngwing.png'

export default function InputFormIncomeYearly(props) {
  let {
    handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus,
  } = props.submitState

  return (
    <div className='relative lg:px-8 font-philosopher flex-col items-center justify-center text-center lg:rounded-3xl   lg:max-w-xl lg:mx-auto lg:px-20'>
      <div className='lg:absolute inset-0 lg:bg-white  shadow-lg transform -skew-y-6 sm:skew-y-0 lg:-rotate-6 lg:rounded-3xl bg-gradient-to-r from-lime-300 to-lime-600  '></div>

      <div className='lg:absolute inset-0 lg:bg-white  shadow-lg  lg:rounded-3xl lg:bg-white '></div>

      <img
        src={beniscool}
        className='z-10	relative  lg:py-10 mx-auto max-w-xs max-h-80	text-center'
      ></img>

      <div className='pt-5 lg:py-0'>
        <h1 className='font-philosopher z-10	relative text-center'>
          {' '}
          Only two things are certain, death and taxes...
        </h1>
        <h2 className='font-philosopher z-10	relative text-center'>
          How much can you scrape for your own funeral?
        </h2>
      </div>

      <form onSubmit={handleSubmit} className='z-10	relative my-8 flex-col justify-between'>
        <div className='flex my-4 justify-between items-center text-left '>
          <label>What is your yearly income?</label>
          <input
            className=' w-20 text-sm text-gray-800 bg-white border rounded py-2 px-3 hover:border-lime-300 focus:border-lime-400 shadow-md outline-0 text-right select-none'
            type='number'
            min={1}
            max={1000000000000}
            placeholder='0'
            required
            onChange={(e) => setGrossIncomeYearly(e.target.value)}
          ></input>
        </div>

        <div className='flex my-4 justify-between text-left items-center'>
          <label>How many children do you have?</label>
          <input
            className=' w-20 text-sm text-gray-800 bg-white border rounded py-2 px-3 hover:border-lime-300 focus:border-lime-400 shadow-md outline-0 text-right select-none'
            type='number'
            min={0}
            max={150}
            placeholder='0'
            required
            onChange={(e) => setChildrenNumber(e.target.value)}
          ></input>
        </div>

        <div className='flex my-4 justify-between text-left items-center'>
          <label>How many properties do you own?</label>
          <input
            className=' w-20 text-sm text-gray-800 bg-white border rounded py-2 px-3  hover:border-lime-300 focus:border-lime-400  shadow-md  outline-0 text-right select-none'
            type='number'
            required
            min={0}
            max={100}
            placeholder='0'
            onChange={(e) => setPropertyOwnership(e.target.value)}
          ></input>
        </div>

        <div className='flex font-philosopher my-4 justify-between text-left gap-5 items-center'>
          <label htmlFor='MaritalStatus'>What is your marital status?</label>
          <select
            className='text-gray-800 bg-white border rounded py-3 px-3  hover:border-lime-300 focus:border-lime-400 shadow-md outline-0 select-none'
            name='MaritalStatus'
            required
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value='none' selected disabled hidden>
              Select an Option
            </option>
            <option value='married'>Married</option>
            <option value='single'>Single</option>
            <option value='widow/Widower'>Widow/Widower</option>
          </select>
        </div>

        <MainButton buttontext='Calculate tax' className='font-philosopher ' />
      </form>
    </div>
  )
}
