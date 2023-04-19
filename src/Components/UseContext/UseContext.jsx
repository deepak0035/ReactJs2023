import { Children, createContext } from "react"
import React from 'react'

const TryContext = createContext();
const UseContext = (children) => {
   const userData = {
        name: "John Doe",
        age: 30,
        email: "envkt@example.com"
    }
  return (
    <TryContext.Provider value={userData}>
    {Children}
    </TryContext.Provider>
  )
}

export default {UseContext,TryContext};