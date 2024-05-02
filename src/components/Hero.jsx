import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [bg,setBg] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images,setImages] = useState([]);

  const getBg = async () => {
    const {data} = await axios.get('https://picsum.photos/v2/list');
    setImages(data)
    setBg(data[currentIndex].download_url)
    console.log(bg)
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? bg.length - 1 : prevIndex - 1));
    setBg(images[currentIndex].download_url)
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === bg.length - 1 ? 0 : prevIndex + 1));
    setBg(images[currentIndex].download_url)
  };

  useEffect(()=>{
    getBg();
  },[])

  return (
    <div className="container bg-body-tertiary hero test">
        <img src={bg} alt="" className='img-fluid' />
        <button className='prev controller' onClick={()=>handlePrev()}><p className="h3">{'<'}</p></button>
        <button className="next controller" onClick={()=>handleNext()}><p className="h3">{'>'}</p></button>
    </div>
  )
}

export default Hero