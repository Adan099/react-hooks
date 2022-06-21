import React, { useRef, useState } from 'react'

export const UseRef = () => {
	
	const inputRef = useRef(null)
	const [name, setName] = useState('Name')

	const checkOnClick = () => {
		setName(inputRef.current.value)
		inputRef.current.focus()
		inputRef.current.value = ''
	}
	
  return (
		<div className='mt-5 text-center'>
			<div>{name}</div>
			<div>
				<input type='text' className='inp' placeholder='Enter name ...' ref={inputRef} />
				<button className='inp-btn' onClick={checkOnClick}>Change Name</button>
			</div>
		</div>
  )
}
