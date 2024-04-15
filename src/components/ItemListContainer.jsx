const ItemListContainer = ({ mensaje }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>{mensaje}</h2>
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
