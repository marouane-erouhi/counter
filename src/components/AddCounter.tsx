import React, { useContext, useState } from 'react'
import CounterData from '../interfaces/CounterData'
import Context from '../store/context'
import './AddCounters.css'

export default function AddCounter() {
  const [value, setValue] = useState('')
  // const [counters, actions] = useCounter()
  const { counters, actions } = useContext(Context)

  const onchange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload: CounterData = {
      id: new Date().getTime() + '',
      currentValue: 0,
      name: value
    }
    actions({ type: 'addCounter', payload })
    setValue('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input id='counter-input' placeholder='Enter counter name...' value={value} onChange={onchange} />
    </form>
  )
}