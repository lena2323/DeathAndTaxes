import React from 'react'
import { MainButton } from '../Components/index'
import { MainCard } from '../Components/index'

const LandingPage = () => {
  return (
    <div className='container p-5 flex-col text-center items-center bg-neutralbcg mx-auto' >
       < MainCard />
       < MainButton buttontext = "See results"/>
    </div>
  )
}

export default LandingPage