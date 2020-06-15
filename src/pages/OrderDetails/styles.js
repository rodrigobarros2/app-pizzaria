import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InfoOrders = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		padding: 20px 0;
	}

	p {
		padding: 20px 0;
	}
`;

export const Select = styled.select`
	font-weight:700;
	font-size:17px;

	&[data-status='queue_up'] {
		color: #f39c12;
	}
	&[data-status='preparing'] {
		color: #2980b9;
	}
	&[data-status='on_the_way'] {
		color: #8e44ad;
	}
	&[data-status='delivered'] {
		color: #16a085;
	}
	&[data-status='canceled'] {
		color: #333333;
	}
`;
