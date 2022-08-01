import React, { forwardRef, useImperativeHandle, useState } from 'react'

export const Child = forwardRef((props, ref) => {
	const [visibility, setVisibility] = useState(props.initialState === 'true')
	useImperativeHandle(ref, () => ({
			toggleDiv() {
				setVisibility(!visibility)
			},
		}
	))

  return (
		<>
    	{visibility && <div>{props.value}</div>}
		</>
  )
})
