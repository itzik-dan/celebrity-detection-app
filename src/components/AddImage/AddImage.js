import React from 'react'
import './AddImage.css'

const AddImage = ({handleInputChange, onSubmit}) => {
	return (
		<div>
		<p className='f2'>
			{'Enter a profile picture & reveal the predicted demographic characteristics'}
		</p>
		<div className='center'>
		 	<div className='form center pa4 br3 shadow-5'>
			<input type='text' className='f4 pa2 w-70 center' placeholder="Enter Image Url" onChange={handleInputChange}/>
			<button className='w-30 grow f4 link ph3 pv2 dib white bg-black' onClick={onSubmit} >Add Face</button>
		</div>
		</div>
		</div>


		
	)
}

export default AddImage