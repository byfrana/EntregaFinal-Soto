const ItemListContainer = ({ mensaje }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col text-center p-5">
					<h2 className="subtitle">{mensaje}</h2>
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
