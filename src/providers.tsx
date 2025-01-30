'use client'

import ReactToastContainer from '@/components/react-toast-container/ReactToastContainer'
// import { GoogleTagManager } from '@next/third-parties/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)
	return (
		<>
			<QueryClientProvider client={client}>
				<ReactToastContainer>
					{children}
					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				</ReactToastContainer>
			</QueryClientProvider>
		</>
	)
}
