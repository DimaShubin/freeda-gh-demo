import React, {useState, useEffect} from 'react'
import {Layout, Button} from 'antd'
import './styles.css'
import OpenOrders from './OpenOrders'
import CreateOrders from './CreateOrder'
import Transactions from './Transactions'
import {Widget as ChatWidget, addResponseMessage} from 'react-chat-widget'

import 'react-chat-widget/lib/styles.css'

const ChatIcon = ({color, height, width}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width || 20}
			height={height || 20}
			viewBox='0 0 20 20'
		>
			<title>speech bubbles</title>
			<g fill={color || 'currentColor'}>
				<path d='M18 4h-1v7a2 2 0 0 1-2 2H4v1a2 2 0 0 0 2 2h10l4 4V6a2 2 0 0 0-2-2z' />
				<path d='M14 0H2a2 2 0 0 0-2 2v14l4-4h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
			</g>
		</svg>
	)
}

const OTCOrder = () => {
	const {Content, Sider} = Layout

	useEffect(() => {
		addResponseMessage('Welcome to Freeda chat!')
	}, [])

	const handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`)
	}

	const getCustomLauncher = (handleToggle) => (
		<button onClick={handleToggle} className='chatBox-btn'>
			<ChatIcon color={'#fff'} />
			<span>CHAT</span>
		</button>
	)

	return (
		<>
			<Layout className='custom-layout'>
				<Content>
					<CreateOrders />
					<Transactions />
				</Content>
				<Sider width='330px' theme='light' breakpoint={'lg'}>
					<OpenOrders />
				</Sider>
			</Layout>
			<ChatWidget
				handleNewUserMessage={handleNewUserMessage}
				title='Chat box Header'
				launcher={(handleToggle) => getCustomLauncher(handleToggle)}
			/>
		</>
	)
}

export default OTCOrder
