import React from 'react'
import { InputFormIncomeHandleSumbit, MainButton } from '../Components/index'

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const LandingPage = () => {
  return (
    <div className='  px-3 flex items-center justify-center bg-neutralbcg min-h-screen max-w-screen'>
      <InputFormIncomeHandleSumbit/>
      <div className='fixed top-0 z-10 right-3 text-xs'>
        <MainButton
          buttontext='See my portfolio'
          onclick={() => openInNewTab('https://jade-alpaca-59a262.netlify.app/')}
        />
      </div>
    </div>
  )
}

export default LandingPage
