import React, { useContext, useState } from "react";
import CounterData from "../interfaces/CounterData";
import Context from "../store/context";
import './Counter.css'

export default function Counter({ id, currentValue, name }: CounterData) {
  const { counters, actions } = useContext(Context)

  const updateValue = (value: number) => {
    actions({
      type: 'set',
      payload: { id, value }
    })
  }

  const deleteCounter = () => {
    actions({
      type: 'deleteCounter',
      payload: { id }
    })
  }

  return (
    <div className="counter-container">
      <button onClick={() => updateValue(currentValue - 1)}>-</button>
      <div className="counter-content">
        <div className="counter-title">
          <h3>{name}</h3>
          <button onClick={deleteCounter} title="delete counter"><i class="far fa-times-circle"></i></button>
        </div>
        <p>{currentValue}</p>
      </div>
      <button onClick={() => updateValue(currentValue + 1)}>+</button>
    </div>
  )
}