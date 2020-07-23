import React from 'react'
import {Row, Col, Typography} from 'antd'

const Dashboard = () => {
	const {Title} = Typography

	return (
		<div className='dashboard'>
			<Row>
				<Col type='flex' align='middle'>
					<Title>Dashboard</Title>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
