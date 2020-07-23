import React from 'react'
import './style.css'

const CurrencyList = () => {
	return (
		<ul className='currency-list'>
			<li className='currency-list-item'>
				<div className='currency-index'>
					<span className='currency-index-label'>BTC/USD</span>
					<span className='currency-index-num currency-index-num--positive'>
						2.18%
					</span>
				</div>
				<div className='currency-price'>
					<b>$9,327.12</b>
				</div>
			</li>
			<li className='currency-list-item'>
				<div className='currency-index'>
					<span className='currency-index-label'>BTC/USD</span>
					<span className='currency-index-num currency-index-num--positive'>
						2.18%
					</span>
				</div>
				<div className='currency-price'>
					<b>$9,327.12</b>
				</div>
			</li>
			<li className='currency-list-item'>
				<div className='currency-index'>
					<span className='currency-index-label'>USDT/USD</span>
					<span className='currency-index-num currency-index-num--negative'>
						0,1%
					</span>
				</div>
				<div className='currency-price'>
					<b>$0.98</b>
				</div>
			</li>
		</ul>
	)
}

export default CurrencyList
