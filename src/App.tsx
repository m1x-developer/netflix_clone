import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MailLayout from './layouts/MainLayout'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MailLayout />} />
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
