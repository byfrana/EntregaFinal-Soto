import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
	const [contador, setContador] = useState(1);
	const [itemStock, setItemStock] = useState(stock);
	const [visible, setVisible] = useState(true);

	const incrementar = () => {
		if (contador < itemStock) {
			setContador(contador + 1);
		}
	};

	const decrementar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};

	const addToCart = () => {
		if (contador <= itemStock) {
			setItemStock(itemStock - contador);
			onAdd(contador);
			setContador(1);
			setVisible(false);
		}
	};

	useEffect(() => {
		setItemStock(stock);
	}, [stock]);

	return (
		<div className="container p-0">
			<div className="flex-row d-flex justify-content-left">
				<div className="px-0">
					<div className="btn-group">
						<button type="button" className="btn bg-black text-white" onClick={decrementar}>
							-
						</button>
						<button type="button" className="btn bg-black text-white">
							{contador}
						</button>
						<button type="button" className="btn bg-black text-white" onClick={incrementar}>
							+
						</button>
					</div>
				</div>
				<div className="px-2">
					{visible ? (
						<button type="button" className="btn bg-black text-white text-uppercase " onClick={addToCart}>
							Agregar Al Carrito
						</button>
					) : (
						<Link to={'/cart'} className="btn bg-black text-white text-uppercase ">
							Finalizar Compra
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
