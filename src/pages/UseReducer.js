import React, { useReducer } from 'react'
import '../App.css'

export const UseReducer = () => {

  const setReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, display: state.display }
      case "DISPLAY":
        return { count: state.count, display: !state.display }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(setReducer, {
    count: 0,
    display: true
  })

  return (
    <>
      <div className='mt-5 text-center'>
        <p>{state.count}</p>
        <button 
          onClick={() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'DISPLAY' })
          }}
        >
          Increment
          </button>
        {state.display && <p>This is visible</p>}
      </div>
    </>
  )
}
