import React, { useContext } from 'react'
import { NameContext } from './Context'

export const Login = () => {
	const { setUser } = useContext(NameContext)
  return (
    <>
			<input onChange={(e) => {setUser(e.target.value)}} />
    </>
  )
}
