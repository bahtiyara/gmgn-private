import '@/styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found';
import { navData } from './const';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{navData.map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
