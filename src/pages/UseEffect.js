import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const UseEffect = () => {
	const [response, setResponse] = useState([])
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((response) => {
				// console.log(response.data.length)
				setResponse(response.data)
			})
	}, [])

	const ListResponse = () => {
		return (
			response.slice(0, 2).map((a) =>
					<div key={a.id}>
						<div>User List</div>
						<ul>
							<li><b>Id: </b>{a.id}</li>
							<li><b>Name: </b>{a.name}</li>
							<li><b>Email: </b>{a.email}</li>
						</ul>
					</div>
			)
		)
	}
	
  return (
    <div className='mt-5 text-center'>
      <ListResponse />
    </div>
  )
}