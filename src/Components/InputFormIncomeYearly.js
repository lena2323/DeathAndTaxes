import React from 'react';
import { MainButton } from '../Components/index';
import beniscool from "./images/pngwing.png";



export default function InputFormIncomeYearly(props) {

    let{handleSubmit,
      setGrossIncomeYearly,
      setChildrenNumber,
      setPropertyOwnership,
      setMaritalStatus} = props.submitState;

  return (
    <div className='relative lg:px-8 font-philosopher flex-col items-center justify-center text-center lg:rounded-3xl   lg:max-w-xl lg:mx-auto lg:px-20'>
      <div	class="lg:absolute inset-0 lg:bg-white  shadow-lg transform -skew-y-6 sm:skew-y-0 lg:-rotate-6 lg:rounded-3xl bg-gradient-to-r from-blue-300 to-blue-600  ">  
      </div>

      <div	class="lg:absolute inset-0 lg:bg-white  shadow-lg  lg:rounded-3xl lg:bg-white ">    
      </div>
      
      <img src={beniscool} className="z-10	relative  py-10 mx-auto max-w-xs max-h-80	"></img>

      <h1 className='font-philosopher z-10	relative '> Only two things are certain, death and taxes...</h1>
      <h2 className='font-philosopher z-10	relative '>How much can you scrape for your own funeral?</h2>

      <form  onSubmit={handleSubmit} className="z-10	relative my-8 flex-col ">
      <div className='flex my-4 justify-between  '>
        <label>What is your yearly income?</label>
        <input type="number" min={1} max={1000000000000} required onChange={e => setGrossIncomeYearly(e.target.value)}></input>
      </div>

      <div className='flex my-4 justify-between'>
        <label>How many children do you have?</label>
        <input type="number"  min={0} max={150} required onChange={e => setChildrenNumber(e.target.value)}></input>
      </div>

      <div className='flex my-4 justify-between'>
        <label>How many properties do you own?</label>
        <input type="number" required min={0} max={100} onChange={e => setPropertyOwnership(e.target.value)} ></input>
      </div>

      <div className='flex font-philosopher my-4 justify-between'>
        <label htmlFor="MaritalStatus">What is your marital status?</label>
        <select name='MaritalStatus' required onChange={e => setMaritalStatus(e.target.value)}>
          <option value="none" selected disabled hidden>Select an Option</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="widow/Widower">Widow/Widower</option>
        </select>
      </div>

      < MainButton buttontext = "See results" className="font-philosopher"  />

      </form>

    </div>
  )
}


