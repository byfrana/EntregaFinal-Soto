import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer mensaje={'Hecho a mano en Londres desde 1972.'} />
		</>
	);
}

export default App;
