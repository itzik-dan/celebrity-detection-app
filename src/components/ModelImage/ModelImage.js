import React from 'react'
import './ModelImage.css'

const ModelImage = ({imgUrl, box}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
			<img id='img' alt='' src={imgUrl} width='500px' height='auto'/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	)
}

export default ModelImage