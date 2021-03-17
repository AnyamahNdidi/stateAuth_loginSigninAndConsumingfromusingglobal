import React from 'react'
import { Button } from "antd"
import 'antd/dist/antd.css';
import { app } from "../../base"
import { Link, useHistory } from "react-router-dom"

const newUser = app.firestore().collection("users")
function Register() {
  const hist = useHistory();
  const [email, setEmail] = React.useState("")
  const [password, setpassword] = React.useState("")
  const [name, setName] = React.useState("")
  const [profile, setProfile] = React.useState("")
  const [photoFile, setPhotoFile] = React.useState("")
  const [toggle, setToggle] = React.useState(true)

  const clickToggle = () => {
    setToggle(!toggle)
  }

  const SignUpuser = async () => {
    const bestUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password)

    await newUser.doc(bestUser.user.uid).set({
      email,
      name,
      password,
      profile
    });

    hist.push("/")
  }

  const SignInUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password)
    hist.push("/")
  }
  return (
    <>
      {
        toggle ? <div>
          <br />
          <br />
          <center>
            <h1>Please Fill In Your Details</h1>
            <div
              style={{
                width: "300px"
              }}
            >
              <input
                type="file"
              />
              <br />
              <br />
              <input
                placeholder="email"
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />

              <input
                placeholder="password"
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <br />

              <input
                placeholder="Name"
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <input
                placeholder="Profile"
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
              <br />
              <Button

                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",

                }}
                onClick={SignUpuser}

              >
                Sing Up
         </Button>

              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-around", width: "70%" }}>
                Already have an account
           <div
                  onClick={clickToggle}

                  style={{ color: "green ", fontWeight: "bold", cursor: "pointer" }}>
                  Log in
           </div>
              </div>


            </div>
          </center>
        </div> :
          <div>
            <br />
            <br />
            <center>
              <h1>Please LogIn</h1>
              <div
                style={{
                  width: "300px"
                }}


              >


                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",
                    paddingLeft: "10px",
                    display: "flex",

                  }}
                />
                <br />

                <input
                  placeholder="password"
                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",
                    paddingLeft: "10px",
                    display: "flex",

                  }}
                />
                <br />

                <Button

                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",

                  }}

                  onClick={SignInUser}

                >
                  Log In
          </Button>
                <br />
                <br />

                <div style={{ display: "flex", justifyContent: "space-around", width: "70%" }}>
                  Don't have an account
           <div
                    onClick={clickToggle}

                    style={{ color: "green ", fontWeight: "bold" }}>
                    Sing Up
           </div>
                </div>
              </div>
            </center>
          </div>
      }
    </>
  )
}

export default Register
