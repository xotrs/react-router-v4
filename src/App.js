import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div>
          <Header/>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
      </div>
    </Router>
  )
}

export default App