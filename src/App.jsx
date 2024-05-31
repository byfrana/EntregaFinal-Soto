import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path={'/'} element={<ItemListContainer />} />
					<Route path={'/category/:id'} element={<ItemListContainer />} />
					<Route path={'/item/:id'} element={<ItemDetailContainer />} />
					<Route path={'/checkout'} element={<Checkout />} />
					<Route path={'/cart'} element={<Cart />} />
					<Route path={'*'} element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
