import React from 'react'
import {Row, Col, Table, Button} from 'antd'

const columnsSet = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Side',
		dataIndex: 'side',
		key: 'side',
	},
	{
		title: 'Asset',
		dataIndex: 'asset',
		key: 'asset',
	},
	{
		title: 'Volume',
		dataIndex: 'volume',
		key: 'volume',
	},
	{
		title: 'Price/Total',
		dataIndex: 'price_total',
		key: 'price_total',
		render: (priceTotal) => (
			<>
				<div className='table-price' style={{textAlign: 'center'}}>
					{priceTotal['price']}
				</div>
				<div className='table-price' style={{textAlign: 'center'}}>
					Total: {priceTotal['total']}
				</div>
			</>
		),
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: (status) => {
			let statusColor = {
				active: '#00C853',
				canceled: '#F44336',
				сompleted: 'gba(0,0,0,0.87)',
			}
			return (
				<span style={{color: `${statusColor[status.toLowerCase()]}`}}>
					{status}
				</span>
			)
		},
	},
	{
		title: 'Date/Time',
		dataIndex: 'date_time',
		key: 'date_time',
		render: (data) => (
			<>
				<div style={{textAlign: 'center'}}>{data['date']}</div>
				<div style={{textAlign: 'center'}}>{data['time']}</div>
			</>
		),
	},
	{
		title: 'Exp. Time',
		dataIndex: 'exp_time',
		key: 'exp_time',
		render: (expTime) =>
			expTime.toLowerCase() !== 'expired' ? (
				<span style={{color: '#FF006A'}}>{expTime}</span>
			) : (
				<span>{expTime}</span>
			),
	},
	{
		title: 'Cancel',
		dataIndex: 'Cancel',
		key: 'Cancel',
		render: (text, record) => (
			<Button
				disabled={record.status.toLowerCase() !== 'active' && true}
				type='primary'
				style={{
					backgroundColor: 'rgba(0,0,0,0.12)',
					color: 'black',
					borderColor: 'transparent',
					opacity: record.status.toLowerCase() !== 'active' && 0.5,
				}}
			>
				Cancel
			</Button>
		),
	},
]

const data = [
	{
		id: 'B2671',
		side: 'Buy'.toUpperCase(),
		asset: 'BTC',
		volume: '2.456123',
		price_total: {price: '$9,307.15', total: '$30,249.18 '},
		status: 'Active',
		date_time: {date: 'Jun 5, 2020', time: '3:46 PM PST'},
		exp_time: '3:46 PM PST',
		cancel: 'Cancel',
	},
	{
		id: 'E2903',
		side: 'Buy'.toUpperCase(),
		asset: 'BTC',
		volume: '5.5',
		price_total: {price: '$9,307.15', total: '$30,249.18 '},
		status: 'Completed',
		date_time: {date: 'Jun 5, 2020', time: '3:46 PM PST'},
		exp_time: 'Expired',
		cancel: 'Cancel',
	},
	{
		id: 'E1905',
		side: 'Sell'.toUpperCase(),
		asset: 'ETH',
		volume: '2.4561230000',
		price_total: {price: '$9,307.15', total: '$30,249.18 '},
		status: 'Canceled',
		date_time: {date: 'Jun 5, 2020', time: '3:46 PM PST'},
		exp_time: 'Expired',
		cancel: 'Cancel',
	},
	{
		id: 'E2903',
		side: 'Buy'.toUpperCase(),
		asset: 'BTC',
		volume: '5.5',
		price_total: {price: '$9,307.15', total: '$30,249.18 '},
		status: 'Active',
		date_time: {date: 'Jun 5, 2020', time: '3:46 PM PST'},
		exp_time: '3:46 PM PST',
		cancel: 'Cancel',
	},
	{
		id: 'E1905',
		side: 'Sell'.toUpperCase(),
		asset: 'ETH',
		volume: '2.4561230000',
		price_total: {price: '$9,307.15', total: '$30,249.18 '},
		status: 'Canceled',
		date_time: {date: 'Jun 5, 2020', time: '3:46 PM PST'},
		exp_time: 'Expired',
		cancel: 'Cancel',
	},
]

const Transactions = () => {
	const columns = columnsSet.map((col, index) => ({
		...col,
		align: 'center',
	}))
	return (
		<Row>
			<Col span={23}>
				<div className='bordered-title'>
					<h2>Transactions</h2>
				</div>
				<Table
					columns={columns}
					dataSource={data}
					pagination={false}
					scroll={{x: 'max-content'}}
				/>
			</Col>
		</Row>
	)
}

export default Transactions
