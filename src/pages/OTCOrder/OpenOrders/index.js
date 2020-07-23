import React from 'react'
import {Card, Carousel, Progress} from 'antd'

const OpenOrders = () => {
	const SamplePrevArrow = ({className, style, onClick}) => {
		return (
			<div
				className={className}
				style={{...style, display: 'block'}}
				a
				onClick={onClick}
			>
				<svg
					viewBox='0 0 140 140'
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g>
						<path
							d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'
							fill='currentColor'
						/>
					</g>
				</svg>
			</div>
		)
	}

	const SampleNextArrow = ({className, style, onClick}) => {
		return (
			<div
				className={className}
				style={{...style, display: 'block'}}
				onClick={onClick}
			>
				<svg
					viewBox='0 0 140 140'
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g>
						<path
							d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'
							fill='currentColor'
						/>
					</g>
				</svg>
			</div>
		)
	}
	return (
		<Card title='Card title' bordered={true} className='card-custom'>
			<ul className='orders-list'>
				<li className='orders-list-item'>
					<span className='orders-list-item-label'>OPEN ORDERS</span>
					<span
						className='orders-list-item-num'
						style={{backgroundColor: 'rgba(0,41,255,0.40)'}}
					>
						2
					</span>
				</li>
				<li className='orders-list-item'>
					<span className='orders-list-item-label'>
						NEXT EXPIRATION TIME
					</span>
					<span
						className='orders-list-item-num'
						style={{
							backgroundColor: 'rgba(255,0,106,0.40)',
						}}
					>
						3h 45m
					</span>
				</li>
				<li className='orders-list-item'>
					<span className='orders-list-item-label'>
						COUNTER OFFERS
					</span>
					<span
						className='orders-list-item-num'
						style={{
							backgroundColor: 'rgba(250,100,0,0.40)',
						}}
					>
						1
					</span>
				</li>
			</ul>
			<h5>PROGRESS</h5>
			<Carousel
				className='custom-carousel'
				arrows={true}
				dots={false}
				swipe={true}
				nextArrow={<SampleNextArrow />}
				prevArrow={<SamplePrevArrow />}
			>
				<div className='carousel-item'>
					<ul className='progress-list listreset'>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								Order ID
							</span>
							<span className='progress-list-item-num'>
								B5104
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								Buy
							</span>
							<span className='progress-list-item-num'>
								3.25 BTC
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								CONFIRMED
							</span>
							<span className='progress-list-item-num'>
								2.65 BTC
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								TO BE FILLED
							</span>
							<span className='progress-list-item-num'>
								0.6 BTC
							</span>
						</li>
					</ul>
					<Progress
						type='circle'
						width={100}
						strokeWidth={10}
						strokeColor={{
							'0%': '#C7FB10',
							'50%': '#FDD835',
							'100%': '#00C853',
						}}
						percent={82}
					/>
				</div>
				<div className='carousel-item'>
					<ul className='progress-list listreset'>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								Order ID
							</span>
							<span className='progress-list-item-num'>
								B5104
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								Buy
							</span>
							<span className='progress-list-item-num'>
								3.25 BTC
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								CONFIRMED
							</span>
							<span className='progress-list-item-num'>
								2.65 BTC
							</span>
						</li>
						<li className='progress-list-item'>
							<span className='progress-list-item-label'>
								TO BE FILLED
							</span>
							<span className='progress-list-item-num'>
								0.6 BTC
							</span>
						</li>
					</ul>
					<Progress
						type='circle'
						width={100}
						strokeWidth={10}
						strokeColor={{
							'0%': '#C7FB10',
							'50%': '#FDD835',
							'100%': '#00C853',
						}}
						percent={32}
					/>
				</div>
			</Carousel>
		</Card>
	)
}

export default OpenOrders
