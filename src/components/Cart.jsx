import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';
import trash from '../assets/images/trash2.svg';

const Cart = () => {
	const { cart, removeItem, clear, getCountProducts, getSumPriceProducts } = useContext(CartContext);

	if (getCountProducts() == 0) {
		return (
			<div className="container my-5">
				<div className="row">
					<div className="col text-center">
						<h3>Tu carrito está vacío!</h3>
						<Link to={'/'} className="btn text-white bg-dark my-5">
							Volver al Inicio
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container my-5">
			<div className="row">
				<div className="col">
					<table className="table">
						<tbody>
							<tr>
								<td colSpan={6} className="text-end">
									<button className="btn text-white bg-dark " onClick={clear}>
										Vaciar Carrito
									</button>
								</td>
							</tr>
							{cart.map((item) => (
								<tr key={item.id}>
									<td>
										<img src={item.imagen} alt={item.nombre} width={120} />
									</td>
									<td className="align-middle text-start">{item.nombre}</td>
									<td className="align-middle text-end">${item.precio}</td>
									<td className="align-middle text-center">x{item.quantity}</td>
									<td className="align-middle text-end">
										<img
											src={trash}
											width={24}
											alt="Eliminar Producto"
											title="Eliminar Producto"
											onClick={() => {
												removeItem(item.id);
											}}
										/>
									</td>
								</tr>
							))}
							<tr>
								<td colSpan={2} className="text-end">
									<b>Total</b>
								</td>
								<td className="text-end">
									<b>${getSumPriceProducts()}</b>
								</td>
								<td>&nbsp;</td>
								<td className="text-end">
									<Link to={'/checkout'} className="btn text-white bg-dark ">
										Comprar
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Cart;
