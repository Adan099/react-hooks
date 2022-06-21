import React, { useEffect, useLayoutEffect, useRef } from 'react'

export const UseLayoutEffect = () => {
	const inputRef = useRef()

	useLayoutEffect(() => {	
		inputRef.current.value = 'Loading User'
	}, [])

	useEffect(() => {
		inputRef.current.value = 'User Loaded'
	}, [])
	
	
  return (
    <div className='mt-5 text-center'>
			<input type='text' className='inp' placeholder='Enter name ...' ref={inputRef} />
		</div>
  )
}
