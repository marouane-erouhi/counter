import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import AddCounter from './components/AddCounter'
import Counter from './components/Counter'
import CounterData from './interfaces/CounterData'
import Context from './store/context'

function App() {
  // JANS
  const { counters, actions } = useContext(Context)

  return (
    <div className="App">
      <AddCounter />
      <div className="counters-container">
        {counters.map((counter: CounterData) => <Counter key={counter.id} {...counter} />)}
      </div>
    </div>
  )
}

export default App
