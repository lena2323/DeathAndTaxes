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
    <div className='font-philosopher flex-col items-center justify-center text-center lg:max-w-lg	lg:mx-auto'>
      <img src={beniscool} className=" my-10 mx-auto max-w-xs"></img>

      <h1 className='font-philosopher'> Only two things are certain, death and taxes...</h1>
      <h2 className='font-philosopher'>How much can you scrape for your own funeral?</h2>

      <form  onSubmit={handleSubmit} className="my-6 flex-col ">
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


