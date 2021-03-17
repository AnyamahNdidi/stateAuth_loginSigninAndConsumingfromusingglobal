import React, { createContext, useState, useEffect } from "react";
import { app } from "../../base";

export const AppContext = createContext();
const db = app.firestore().collection("users")


export const AppProvider = ({ children }) => {
  const [datause, setdatause] = useState(null);
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setdatause(user);

      db.doc(user.uid).get()
        .then((doc) => {
          setCurrent(doc.data())
        })

    });
  }, []);
  return (
    <AppContext.Provider value={{
      datause,
      current
    }}>
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};
