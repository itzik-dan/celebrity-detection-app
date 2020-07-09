import React, { useState } from 'react';
import AddImage from './components/AddImage/AddImage'
import ModelImage from './components/ModelImage/ModelImage'
import './App.css';
import Popup from './components/Popup/Popup';  
import Spinner from './components/Spinner/Spinner';  
import Clarifai from 'clarifai';

//Initialize machine learning api
const app = new Clarifai.App({
 apiKey: 'c18d80e9c3554eb4aaa7c321034222dd'
});

function App() {

  //Initialize the image input field
  const [input, setInput] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  //Initialize the face recognition frame
  const [box, setBox] = useState([])
   //Initialize the predictions output array from api
  const [predictions, setPredictions] = useState([])
  //Initialize the loading spinner, will be used once api is loading the face predictions
  const [loading, setLoading] = useState(false)

  //function for detecting the face and frame it
  const facePosition = data => {
    const boundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('img')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: boundaries.left_col*width,
      topRow: boundaries.top_row*height,
      rightCol: width - (boundaries.right_col*width),
      bottomRow: height - (boundaries.bottom_row*height)
    }
  }

  //function for updating the image url input field
  const handleInputChange = event => {
    setInput(event.target.value)
  }   

  //function for predicting the face using the api, will trigger when "Add Face" button is triggered
  const onSubmit = () => {
    setImgUrl(input)
    setLoading(true)
    app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', input)
    .then(response => {
      const predict_arr = []
      response.outputs[0].data.regions[0].data.concepts.map((el, index) => {
        return index === 0 || index === 20 || index === 22 ? predict_arr.push(el) : null
      })
      setPredictions(predict_arr)
      setBox(facePosition(response))
  })
    .catch(err => {
      let r = window.confirm("Pictue is too blurry, press 'OK' to add new vivid picture." ); 
      if (r === true){ 
        window.location.reload(); 
      }
   });
  }

  const refreshPage = () => { 
      window.location.reload(); 
  }  

  const updateLoading = () => { 
      setLoading(false); 
  }

  return (
    <div className="App">
    {loading && <Spinner />}
    <AddImage handleInputChange={handleInputChange} onSubmit={onSubmit}/>
    <ModelImage imgUrl={imgUrl} box={box} /> 
    {predictions.length !== 0 && <Popup  updateLoading={updateLoading} predictions={predictions}  refreshPage={refreshPage} />} 
    </div>
  );
}

export default App;
