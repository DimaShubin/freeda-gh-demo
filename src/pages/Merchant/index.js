import React from 'react'
import {Row, Col, Typography} from 'antd'

const Merchant = () => {
	const {Title} = Typography
	return (
		<div className='merchant'>
			<Row>
				<Col type='flex' align='middle'>
					<Title>Merchant</Title>
				</Col>
			</Row>
		</div>
	)
}

export default Merchant
