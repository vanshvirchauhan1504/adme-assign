import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Grid = () => {

    const [images, setImages] = useState([]);
    const [currentIndexes, setCurrentIndexes] = useState([1,10,20,30,40]);

    const fetchImages = async () => {
        try {
          const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
    
      // Change current image index when clicking previous or next
      const handlePrevClick = (groupIndex) => {
        setCurrentIndexes(prevIndexes => {
          const newIndexes = [...prevIndexes];
          newIndexes[groupIndex] = (newIndexes[groupIndex] === 0 ? images.length - 1 : newIndexes[groupIndex] - 1);
          return newIndexes;
        });
        // console.log(groupIndex)
      };
    
      const handleNextClick = (groupIndex) => {
        setCurrentIndexes(prevIndexes => {
          const newIndexes = [...prevIndexes];
          newIndexes[groupIndex] = (newIndexes[groupIndex] === images.length - 1 ? 0 : newIndexes[groupIndex] + 1);
          return newIndexes;
        });
      };
    
    //   Fetch images on component mount
      useEffect(() => {
        fetchImages();
      }, []);

    return (
    <div className="container">
        {
            images.length>0?
            <>
            <div className="row mb-3">
            <div className="col-lg-8 col-sm-12 test i1 mt-3">
                <img src={images.length>0?images[currentIndexes[0]].download_url:''} alt="" className='img-fluid' />
                <button className='prev controller' onClick={()=>handlePrevClick(0)}><p className='h1'>{'<'}</p></button>
                <button className='next controller' onClick={()=>handleNextClick(0)}><p className='h1'>{'>'}</p></button>
            </div>
            <div className="col-lg-4 col-sm-12 mt-3">
                    <div className="col-lg-12 i2 test">
                        <img src={images.length>0?images[currentIndexes[1]].download_url:''} alt="" className='img-fluid' />
                        <button className='prev controller' onClick={()=>handlePrevClick(1)}><p className='h1'>{'<'}</p></button>
                        <button className='next controller' onClick={()=>handleNextClick(1)}><p className='h1'>{'>'}</p></button>
                    </div>
                    <div className="col-lg-12 i2 test mt-3">
                        <img src={images.length>0?images[currentIndexes[2]].download_url:''} alt="" className='img-fluid' />
                        <button className='prev controller' onClick={()=>handlePrevClick(2)}><p className='h1'>{'<'}</p></button>
                        <button className='next controller' onClick={()=>handleNextClick(2)}><p className='h1'>{'>'}</p></button>
                    </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-6 col-sm-12 test ">
                <img src={images.length>0?images[currentIndexes[3]].download_url:''} alt="" className='img-fluid mb-3' />
                <button className='prev controller' onClick={()=>handlePrevClick(3)}><p className='h1'>{'<'}</p></button>
                <button className='next controller' onClick={()=>handleNextClick(3)}><p className='h1'>{'>'}</p></button>
            </div>
            <div className="col-lg-6 col-sm-12 test">
                <img src={images.length>0?images[currentIndexes[4]].download_url:''} alt="" className='img-fluid' />
                <button className='prev controller' onClick={()=>handlePrevClick(4)}><p className='h1'>{'<'}</p></button>
                <button className='next controller' onClick={()=>handleNextClick(4)}><p className='h1'>{'>'}</p></button>
            </div>
        </div>
        </>:
           <h1>
            Loading
           </h1>
         }

    </div>
  )
}

export default Grid