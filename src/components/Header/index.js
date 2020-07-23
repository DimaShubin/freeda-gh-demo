import React from 'react'
import {Menu, Row} from 'antd'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.jpg'
import './style.css'
import CurrencyList from './CurrencyList'

const Header = () => {
	return (
		<header className='header'>
			<Row justify='space-between'>
				<div className='logo-holder'>
					<a href='/'>
						<img src={Logo} alt='freeda logo' />
					</a>
				</div>
				<Row>
					<CurrencyList />
					<Menu
						mode='horizontal'
						justify='space-around'
						align='right'
						className='ant-menu-customized'
					>
						<Menu.Item key='/dashboard'>
							<Link to='/dashboard'>Dashboard</Link>
						</Menu.Item>
						<Menu.Item key='/location'>
							<Link to='/location'>Locations</Link>
						</Menu.Item>
						<Menu.Item key='/'>
							<Link to='/'>OTC</Link>
						</Menu.Item>
						<Menu.Item key='/merchant'>
							<Link to='/merchant'>Merchant</Link>
						</Menu.Item>
						<Menu.Item key='/account'>
							<Link to='/account'>Account</Link>
						</Menu.Item>
					</Menu>
				</Row>
			</Row>
		</header>
	)
}

export default Header
