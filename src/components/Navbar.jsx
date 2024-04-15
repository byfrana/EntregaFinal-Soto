import logo from '../assets/images/logo.svg';
import CartWidget from './CartWidget';

const Navbar = () => {
	return (
		<div className="container-fluid">
			<div className="row bg-black p-3 p-b-0">
				<div className="col"></div>
				<div className="col text-center">
					<a href="#">
						<img src={logo} alt="The Great Frog" width={280} />
					</a>
				</div>
				<div className="col d-flex align-items-center justify-content-end">
					<CartWidget></CartWidget>
				</div>
			</div>
			<div className="row bg-black">
				<div className="col text-center py-3">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<a className="nav-link link-light" href="#">
								Anillos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link link-light" href="#">
								Aros
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link link-light" href="#">
								Colgantes
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link link-light" href="#">
								Pulseras
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
