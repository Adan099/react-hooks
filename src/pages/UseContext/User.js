import React, { useContext } from 'react'
import { NameContext } from './Context'

export const User = () => {
	const { user } = useContext(NameContext)
  return (
    <div>User: {user}</div>
  )
}
