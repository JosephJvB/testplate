import React from 'react'

import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

const subscriptions = []

const App = () => {
  return (
    <div className='app'>
      <h1>React Component Subscriptions</h1>
      <div className='children'>
        <ChildOne subscribe={subscribe} trigger={trigger} />
        <ChildTwo subscribe={subscribe} trigger={trigger} />
      </div>
    </div>
  )
}

function subscribe (fn) {
  const foundFunc = subscriptions.find(f => f.name === fn.name)
  !foundFunc && subscriptions.push(fn) 
}

function trigger (msg) {
  subscriptions.forEach(sub => sub(msg))
}

export default App

