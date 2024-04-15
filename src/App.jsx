import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer mensaje={'Handmade in London since 1972.'} />
		</>
	);
}

export default App;
