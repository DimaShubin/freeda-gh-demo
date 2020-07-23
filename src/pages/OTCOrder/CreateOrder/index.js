import React, {useState} from 'react'
import {Form, Row, Col, Input, Button, Radio, Modal} from 'antd'

const CreateOrders = () => {
	const [value, setValue] = useState('Bitcoin')
	const [modalVisible, setModalVisible] = useState(false)
	const options = [
		{
			label: 'Bitcoin',
			value: 'Bitcoin',
		},
		{
			label: 'Ether',
			value: 'Ether',
		},
		{
			label: 'USDT',
			value: 'USDT',
		},
	]

	const currencyAbbr = {
		bitcoin: 'BTH',
		ether: 'ETH',
		usdt: 'USDT',
	}

	const onChange = (e) => {
		setValue(e.target.value)
	}
	return (
		<Row>
			<Col span={23}>
				<section>
					<div className='bordered-title'>
						<h2>Create order</h2>
					</div>
					<Form layout='vertical'>
						<Form.Item
							label='ASSET'
							colon={false}
							className='basic-input'
							style={{margin: '20px 0'}}
						>
							<Radio.Group
								options={options}
								onChange={onChange}
								value={value}
								optionType='button'
								className='radio-tab-style'
							/>
						</Form.Item>

						<Form.Item
							name='price'
							// rules={[{required: true}]}
							colon={false}
							label='PRICE'
							style={{
								display: 'inline-block',
								width: 'calc(50% - 15px)',
								margin: '20px 0',
							}}
							className='basic-input'
						>
							<Input placeholder='0.00' suffix={'USD'} />
						</Form.Item>

						<Form.Item
							name='volume'
							// rules={[{required: true}]}
							label='VOLUME'
							colon={false}
							style={{
								display: 'inline-block',
								width: 'calc(50% - 15px)',
								margin: '20px 0 20px 30px',
							}}
							className='basic-input'
						>
							<Input
								placeholder='0'
								suffix={currencyAbbr[`${value.toLowerCase()}`]}
							/>
						</Form.Item>

						<Form.Item
							style={{
								display: 'inline-block',
								width: 'calc(50% - 15px)',
								margin: '20px 0',
							}}
						>
							<Button
								type='primary'
								htmlType='submit'
								block
								className='modified-btn'
								onClick={() => setModalVisible(true)}
							>
								BUY
							</Button>
						</Form.Item>
						<Form.Item
							style={{
								display: 'inline-block',
								width: 'calc(50% - 15px)',
								margin: '20px 0 20px 30px',
							}}
						>
							<Button
								type='primary'
								htmlType='submit'
								block
								onClick={() => setModalVisible(true)}
								className='modified-btn'
								style={{
									background: '#f5006b',
									borderColor: '#f5006b',
								}}
							>
								SELL
							</Button>
						</Form.Item>
						<Modal
							centered
							closable={false}
							visible={modalVisible}
							onOk={() => setModalVisible(false)}
							onCancel={() => setModalVisible(false)}
						>
							<h4>Review your order</h4>
							<h3>Buy {value}</h3>
							<p>
								Sample text: Price $9,305.58 per{' '}
								{currencyAbbr[`${value.toLowerCase()}`]} . your
								total amount is $23,890. If we accept your order
								you will need to submit a wire transfer for the
								tatal amount.
							</p>
						</Modal>
					</Form>
				</section>
			</Col>
		</Row>
	)
}

export default CreateOrders
