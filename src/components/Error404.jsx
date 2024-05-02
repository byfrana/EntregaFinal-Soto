import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h1>Error 404</h1>
					<p>La página que estás buscando no existe</p>
					<p className="m-6">
						<Link to={'/'} className="btn bg-black text-white">
							Volver al Inicio
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Error404;
