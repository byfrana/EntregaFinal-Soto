import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<ItemListContainer />} />
				<Route path={'/category/:id'} element={<ItemListContainer />} />
				<Route path={'/item/:id'} element={<ItemDetailContainer />} />
				<Route path={'*'} element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
