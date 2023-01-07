import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import All from "./components/All";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<All />} />
    </Routes>
    </>
  )
}

export default App