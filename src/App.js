import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {GetStartedPage} from 'pages'
import 'fonts.css'


const App = () => {
  return (
    <Switch>
      <Route path="/" component={GetStartedPage}/>
    </Switch>
  )
}

export default App