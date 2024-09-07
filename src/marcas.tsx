import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import { PrevArrow, NextArrow } from './arrow';
import React from 'react';


interface MarcasSliderProps{
    marcas: string[];
}



const MarcasSlider: React.FC<MarcasSliderProps> =({ marcas})  => {

    const settings = { 
        infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        };
    
        const sliderContainerStyle = {
            width: '90%',
            margin: '0 auto',
            cursor:'pointer'
          };
        
          const sliderImageContainerStyle = {
            display: 'flex',
            justifyContent: 'center'
          };
        
        
          return (
            <div style={sliderContainerStyle}>
              <Slider {...settings}>
                {marcas.map((image, index) => (
                  <div key={index} style={sliderImageContainerStyle}>
                    <img src={image} alt={`Imagem ${index}`} 
                    style={{
                         width: '200px',
                         height: '200px',
                         borderRadius: '100px',
                         border: '2px solid #ccc',
                         boxShadow: '#00000021'
                        

                    }} />
                  </div>
                ))}
              </Slider>
            </div>
          );
        };
        


export default MarcasSlider;
   


