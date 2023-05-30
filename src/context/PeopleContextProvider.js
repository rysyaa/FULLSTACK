import React, { createContext, useContext } from 'react'

export const peopleContext = createContext();
export const usePeople = () => {
  return useContext(peopleContext)
}

const PeopleContextProvider = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default PeopleContextProvider