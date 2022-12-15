import React from 'react'
import { MainButton } from '../Components/index'
/*import {beniscool} from "../images/pngwing.png"

<img src={beniscool}></img>
*/


export default function InputFormIncomeYearly(props) {

    let{handleSubmit,
      setGrossIncomeYearly,
      setChildrenNumber,
      setPropertyOwnership,
      setMaritalStatus} = props.submitState;

  return (
    <div className='  flex-col items-center justify-center text-center '>
      <div></div>
      
      <h1> Only two things are certain, death and taxes</h1>
      <h2>How much can you scrape for your own funeral?</h2>

      <form  onSubmit={handleSubmit} >
      <label>What is your yearly gross income?</label>
      <input type="number" min={1} max={1000000000000} required onChange={e => setGrossIncomeYearly(e.target.value)}></input>

      <label>How many children do you have?</label>
      <input type="number"  min={0} max={150} required onChange={e => setChildrenNumber(e.target.value)}></input>

      <label>How many properties do you own?</label>
      <input type="number" required min={0} max={100} onChange={e => setPropertyOwnership(e.target.value)} ></input>

      <label htmlFor="MaritalStatus">What is your marital status?</label>
      <select name='MaritalStatus' required onChange={e => setMaritalStatus(e.target.value)}>
      <option value="none" selected disabled hidden>Select an Option</option>
      <option value="married">Married</option>
      <option value="single">Single</option>
      <option value="widow/Widower">Widow/Widower</option>
      </select>
      < MainButton buttontext = "See results"  />

      </form>

    </div>
  )
}


