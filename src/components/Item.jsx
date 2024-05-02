import { Link } from 'react-router-dom';

const Item = ({ item }) => {
	return (
		<div className="col-md-4 text-center py-3">
			<Link className="text-decoration-none text-black" to={'/item/' + item.id}>
				<img className="img-fluid" src={item.imagen} alt={item.nombre} />
				<div className="card-body">
					<p className="card-text text-uppercase ">{item.nombre}</p>
					<p className="card-text">
						$<b>{item.precio}</b>
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Item;
