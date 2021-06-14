import React, { useState, useEffect, useContext } from 'react'

// create context

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// costum hook

export const UseGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
