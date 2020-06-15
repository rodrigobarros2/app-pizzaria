import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrderDetails from './pages/OrderDetails';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/orderdetails" component={OrderDetails} />
			</Switch>
		</BrowserRouter>
	);
}
