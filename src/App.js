import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/Home"
import SkincarePage from "./pages/SkincarePage"

import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div>
      <NavigationBar />

      <Route path="/" exact component={Home} />
      <Route path="/SkincarePage" component={SkincarePage} />
    </div>
  )
}

export default App
