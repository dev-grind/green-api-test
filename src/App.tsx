import { BrowserRouter } from 'react-router'
import { Router } from './pages/router'
import { Providers } from './providers'

function App() {
	return (
		<>
			<Providers>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Providers>
		</>
	)
}

export default App
