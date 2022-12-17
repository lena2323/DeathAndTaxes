import React from 'react'
import { MainCard, MainButton } from '../Components/index'



const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
}; 

const LandingPage = () => {
  return (
    <div className=' px-4 py-10 flex items-center justify-center bg-neutralbcg min-h-screen' >
       < MainCard />
       <div className="fixed absolute bottom-0 left-3">
       <MainButton buttontext="See my portfolio" onclick={() => openInNewTab('https://jade-alpaca-59a262.netlify.app/')}/>
       </div>
    </div>
  )
}

export default LandingPage