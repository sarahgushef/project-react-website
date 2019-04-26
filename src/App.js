import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/Home"

import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div>
      <NavigationBar />

      <Route path="/" exact component={Home} />
    </div>
  )
}

export default App
