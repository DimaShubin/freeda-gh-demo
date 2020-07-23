import React, {Suspense, lazy} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'
import {Spin} from 'antd'

const OtcOrder = lazy(() => import('./pages/OTCOrder'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Locations = lazy(() => import('./pages/Locations'))
const Merchant = lazy(() => import('./pages/Merchant'))
const Account = lazy(() => import('./pages/Account'))

const App = ({history}) => {
	return (
		<Router history={history}>
			<Layout>
				<Suspense fallback={<Spin />}>
					<Switch>
						<Route exact path='/' component={OtcOrder} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/locations' component={Locations} />
						<Route path='/merchant' component={Merchant} />
						<Route path='/account' component={Account} />
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	)
}

export default App
