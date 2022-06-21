import React, { useRef } from 'react'
import { Child } from './Child'


export const Parent = () => {
	const childRef = useRef(null)
  return (
    <div className='mt-5 text-center'>
      <button onClick={() => {childRef.current.toggleDiv()}}>Parent Toggle Button</button>
      <Child ref={childRef} value='2' initialState='false' />
    </div>
  )
}
