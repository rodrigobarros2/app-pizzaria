import React, { useState } from 'react';
import { Container, InfoOrders, Select } from './styles';

function OrderDetails({ location }) {
	const [status, setStatus] = useState(location.state.status);

	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	function handleStatus(event) {
		setStatus(event.target.value);
	}

	return (
		<Container>
			<InfoOrders>
				<h3>Pedido</h3>
				<h1>Rodrigo Barros</h1>
				<p>{formatter.format(10.5)}</p>
			</InfoOrders>

			<div>
				<Select
					defaultValue={location.state.status}
					onChange={handleStatus}
					data-status={status}
				>
					<option value="queue_up">Na fila</option>
					<option value="preparing">Preparando</option>
					<option value="on_the_way">A caminho</option>
					<option value="delivered">Entregue</option>
					<option value="canceled">Cancelado</option>
				</Select>
				<button
					type="text"
				onClick={() => {
						console.log(status);
					}}
				>
					Salvar
				</button>
			</div>
		</Container>
	);
}

export default OrderDetails;
