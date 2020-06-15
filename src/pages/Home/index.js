import React, { useState } from 'react';
import api from '../../server/api';
import {
	OrderItem,
	OrderContainer,
	NumberOrder,
	ClientName,
	StatusBtn,
	OrderList,
} from './styles';
function Home({ history }) {
	const [orders, setOrders] = useState([]);

	React.useEffect(() => {
		api.get('orders').then((orders) => {
			setOrders(orders.data);
		});
	}, []);

	function OrderDetails(status) {
		history.push('/orderdetails', { status });
	}

	function StatusName(status) {
		switch (status) {
			case 'queue_up':
				return 'Na fila';
			case 'preparing':
				return 'Preparando';
			case 'on_the_way':
				return 'A caminho';
			case 'delivered':
				return 'Entregue';
			case 'canceled':
				return 'Cancelado';

			default:
				return '';
		}
	}

	return (
		<>
			{orders.map((order, i) => (
				<OrderItem key={i.toString()}
					onClick={() => {
						OrderDetails(order.status);
					}}
				>
					<OrderContainer>
						<OrderList>
							<NumberOrder>Pedido {order.order_id}</NumberOrder>
							<ClientName>Leandro</ClientName>
						</OrderList>
						<StatusBtn data-status={order.status}>
							{StatusName(order.status)}
						</StatusBtn>
					</OrderContainer>
				</OrderItem>
			))}
		</>
	);
}

export default Home;
