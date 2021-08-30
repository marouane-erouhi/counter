import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Context from './store/context'
import useCounter from './hooks/useCounters'

const Index = () => {
  const store = useCounter()
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)
