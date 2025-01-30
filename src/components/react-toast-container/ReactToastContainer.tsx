import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ReactToastContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<ToastContainer className='body_4' />
		</>
	)
}

export default ReactToastContainer
