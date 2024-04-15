import cart from '../assets/images/cart.svg';

const CartWidget = () => {
	return (
		<button type="button" className="btn position-relative">
			<img src={cart} alt="carrito" width={24} />
			<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-light">1</span>
		</button>
	);
};

export default CartWidget;
