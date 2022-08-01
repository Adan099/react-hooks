import React, { createContext, useState } from 'react'
import { Login } from './Login'
import { User } from './User'

export const NameContext = createContext()

export const Context = () => {
	const [user, setUser] = useState('')

  return (
		<NameContext.Provider value={{user, setUser}}>
			<div className='text-center'>
				<Login />
				<User />
			</div>
		</NameContext.Provider>
  )
}
