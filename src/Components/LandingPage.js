import React from 'react'
import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <div>
        <Link to="/input"><button>Input your income</button></Link>
        <Link to="/results"><button>See results</button></Link>
    </div>
  )
}

export default LandingPage