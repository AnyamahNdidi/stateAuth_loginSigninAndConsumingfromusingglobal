import React, { useContext } from 'react'
import "./Headerstyle.css"
import { Link } from "react-router-dom"
import { AppContext } from "../ContextApi/AuthState"
import { app } from "../../base"

const Header = () => {

  const { datause } = useContext(AppContext)

  return (
    <div>
      <div className="Headernav">
        <div className="Logo">
          Logo
        </div>
        <div className="navlinkcon">
          <Link to="" className="nav_links">
            Home
            </Link>
          <Link to="/course" className="nav_links">
            Course
            </Link>
          <Link to="/study" className="nav_links">
            Study
            </Link>
          <div>
            {
              datause && datause.email
            }
          </div>
          <div>
            {
              datause ?
                (<div
                  onClick={() => {
                    app.auth().signOut()
                  }}
                >
                  Sign out
                </div>) :
                (<Link to="/register" className="nav_links">
                  Sign up
                </Link>)
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
