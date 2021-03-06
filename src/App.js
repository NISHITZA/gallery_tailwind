import React, { useState, useEffect} from 'react';
import ImageCard from './components/imageCard'
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res=> res.json())
      .then(data =>{
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err =>console.log(err))
  })


  return (
    <div >
      <ImageCard />
    </div>
  );
}

export default App;
