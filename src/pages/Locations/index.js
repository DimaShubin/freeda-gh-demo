import React from 'react'
import {Row, Col, Typography} from 'antd'

const Locations = () => {
	const {Title} = Typography
	return (
		<div className='locations'>
			<Row>
				<Col type='flex' align='middle'>
					<Title>Locations</Title>
				</Col>
			</Row>
		</div>
	)
}

export default Locations
