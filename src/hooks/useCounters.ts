import { useEffect, useState } from "react";
import CounterData from "../interfaces/CounterData";
import produce from 'immer'
import useLocalStorage from "./useLocalStorage";

export default function useCounter(): any {
  const [counters, setCounters] = useLocalStorage('counters', [])
  // const [counters, setCounters] = useState<CounterData[]>([])

  const addCounter = (c: CounterData) => {
    const newState = produce(counters, (draft: CounterData[]) => {
      draft.push(c)
    })

    setCounters(newState)
  }

  const updateCounterValue = (id: string, newValue: number) => {
    const index = counters.findIndex((element: CounterData) => element.id === id)
    if (index === -1) return counters

    const newState = produce(counters, (draft: CounterData[]) => {

      draft[index].currentValue = newValue

    })

    setCounters(newState)
  }

  const deleteCounter = (id: string) => {
    const index = counters.findIndex((element: CounterData) => element.id === id)
    if (index === -1) return counters

    const newState = produce(counters, (draft: CounterData[]) => {
      draft.splice(index, 1)
    })

    setCounters(newState)

  }

  const actions = (action: any) => {
    const { type, payload } = action
    switch (type) {
      case 'addCounter':
        addCounter(payload)
        break
      case 'set':
        //update state for id
        updateCounterValue(payload.id, payload.value)
        break
      case 'deleteCounter':
        deleteCounter(payload.id)
        break
      default:
        console.log(`Action ${type} those not exist.`)
        break
    }
  }

  return { counters, actions }
}