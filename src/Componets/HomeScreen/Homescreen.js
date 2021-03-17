import React, { useContext } from 'react'
import Header from '../Header/Header'
import { app } from "../../base"
import { AppContext } from "../ContextApi/AuthState"
const Homescreen = () => {
  const { datause } = useContext(AppContext);
  const { current } = useContext(AppContext)

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div>
        this is the home page
     <h1>{datause && datause.email}</h1>
        <p>
          your usernamr is {current && current.name}
        </p>
      </div>

    </div >
  )
}

export default Homescreen
