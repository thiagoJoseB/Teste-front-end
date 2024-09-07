import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import { PrevArrow, NextArrow } from './arrow';
import Modal from 'react-modal';
import fechar from './img/x.svg';


Modal.setAppElement('#root');


interface Card {
  productName: string,
  descriptionShort: string,
  photo: string,
  price: number


}


interface CardSliderProps {
  cards: Card[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const openModal = (card: Card) => {
    console.log("caiuuuuu");

    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    if (modalIsOpen) {
      const modalElement = document.querySelector('.modal') as HTMLElement;
      modalElement?.focus(); // Forçar o foco no modal
    }
  }, [modalIsOpen]);



  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const buttonStyle = {
    width: '30px',
    height: '30px',
    fontSize: '18px',
    gap:'10px',
    backgroundColor: 'white',
    border:'none',
     cursor:'pointer'
    
  };

  const buttonStyle2 = {
    width: '30px',
    height: '30px',
    fontSize: '18px',
    gap:'10px',
    marginLeft:'20px',
    backgroundColor: 'white',
     border:'none',
     cursor:'pointer'

  };
  


  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card" key={index} onClick={() => openModal(card)}>
            <img src={card.photo} />
            <p>{card.productName}</p>
            <p>{card.descriptionShort}</p>
            <h3>{`R$ ${card.price.toFixed(2)}`}</h3>
            <div className='btn-comprar' onClick={() => openModal(card)}><p>COMPRAR</p></div>
          </div>
        ))}
      </Slider>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Produto"
        style={{
          content: {
            background: '#fff',
            height: '299px',
            borderRadius: '8px',
            width: '769px',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
        
          <img
            src={selectedCard?.photo}
            alt={selectedCard?.productName}
            style={{
              width: '40%',
              maxWidth: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginRight: '20px'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
            <h2 style={{marginTop:'1px'}}>{selectedCard?.productName}</h2>
            
            <p style={{marginTop:'-9px'}}>{selectedCard?.descriptionShort}</p>
            <h3 style={{marginTop:'-4px'}}>{`R$ ${selectedCard?.price.toFixed(2)} `}</h3>
            <p style={{marginTop: '-10px'}}>Veja mais detalhes do produto &gt;</p>
            <div
              style={{
                width: '110px',
                height: '36px',
                border:'1px solid black'
              }}
            >
              <button style={buttonStyle}>-</button>
              <span
              style={{
               marginLeft:'20px'
              }} 
              >1</span>
              <button style={buttonStyle2}>+</button>
            </div>
            <div
              style={{
                width: '245px',
                height: '44px',
                borderRadius: '4px',
                backgroundColor: '#F71963',
                marginTop: '23px',
                cursor:'pointer'
              }}>
              <p
                style={{
                  fontFamily: 'Poppins',
                  color: 'white',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: 700
                }}
              >COMPRAR
              </p>
            </div>
          </div>
          <img onClick={closeModal}  src={fechar} style={{width:'20px', height:'20px', cursor:'pointer'}}/>
        </div>
      </Modal>

    </div>
  );
};


export default CardSlider;





