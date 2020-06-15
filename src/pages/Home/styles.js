import styled from 'styled-components';

export const OrderItem = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px 20px 0;
	cursor: pointer;
`;

export const OrderContainer = styled.div`
	width: 100%;
	max-width: 960px;
	display: flex;
	background: #eee;
	justify-content: space-between;
	align-items: center;
`;

export const OrderList = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NumberOrder = styled.p`
	padding: 10px;
`;

export const ClientName = styled.p`
	width: 100%;
	max-width: 960px;
	padding: 10px;
`;

export const StatusBtn = styled.div`
	padding: 10px;
	margin: 0 20px;
	color: #fafafa;
	cursor: pointer;
	border-radius: 5px;

	&[data-status='queue_up'] {
		color: #fafafa;
		background: #f39c12;
	}
	&[data-status='preparing'] {
		color: #fafafa;
		background: #2980b9;
	}
	&[data-status='on_the_way'] {
		color: #fafafa;
		background: #8e44ad;
	}
	&[data-status='delivered'] {
		color: #fafafa;
		border-color: #16a085;
		background: #16a085;
	}
	&[data-status='canceled'] {
		color: #fafafa;
		background: #333333;
	}
`;
