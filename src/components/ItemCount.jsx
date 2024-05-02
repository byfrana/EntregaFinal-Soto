import { useEffect, useState } from 'react';

const ItemCount = ({ stock }) => {
	const [contador, setContador] = useState(1);
	const [itemStock, setItemStock] = useState(stock);

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

	const onAdd = () => {
		if (contador <= itemStock) {
			setItemStock(itemStock - contador);
			setContador(1); /* reinicio el contador */
			console.log('Agregaste ' + contador + ' Productos al Carrito!');
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
					<button type="button" className="btn bg-black text-white" onClick={onAdd}>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
