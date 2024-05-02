import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import CartWidget from './CartWidget';

const Navbar = () => {
	return (
		<div className="container-fluid">
			<div className="row bg-black p-3 p-b-0">
				<div className="col"></div>
				<div className="col text-center">
					<Link to={'/'}>
						<img src={logo} alt="The Great Frog" width={280} />
					</Link>
				</div>
				<div className="col d-flex align-items-center justify-content-end">
					<CartWidget></CartWidget>
				</div>
			</div>
			<div className="row bg-black">
				<div className="col text-center py-3">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<NavLink className="nav-link link-light" to={'/'}>
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link link-light" to={'/category/anillos'}>
								Anillos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link link-light" to={'/category/aros'}>
								Aros
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link link-light" to={'/category/colgantes'}>
								Colgantes
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
