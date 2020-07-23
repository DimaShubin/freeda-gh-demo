import React from 'react'
import {Row, Col, Typography} from 'antd'

const Account = () => {
	const {Title} = Typography
	return (
		<div className='account'>
			<Row>
				<Col type='flex' align='middle'>
					<Title>Account</Title>
				</Col>
			</Row>
		</div>
	)
}

export default Account
