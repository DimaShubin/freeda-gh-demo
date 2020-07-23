import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserHistory} from 'history'
import {syncHistoryWithStore, RouterStore} from 'mobx-react-router'

import RootStore from './stores/Root'
import App from './App'

import 'antd/dist/antd.css'
import './assets/styles/index.css'

export const StoreContext = React.createContext()

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routingStore)
export const rootStore = new RootStore(routingStore)

ReactDOM.render(
	<StoreContext.Provider value={rootStore}>
		<App history={history} />
	</StoreContext.Provider>,
	document.getElementById('root')
)
