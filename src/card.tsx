import React,  { useState , useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import { PrevArrow, NextArrow } from './arrow';
import  Modal from 'react-modal';


Modal.setAppElement('#root');


interface Card{
    productName: string,
    descriptionShort: string ,
    photo: string,
    price:number


}


interface CardSliderProps{
    cards: Card[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) =>{

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


      return (
        <div className="card-slider-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="card" key={index}  onClick={() => openModal(card)}>
              <img src={card.photo}/>
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
      <h2>{selectedCard?.productName}</h2>
      <p>{selectedCard?.descriptionShort}</p>
      <h3>{selectedCard?.price}</h3>
      <button onClick={closeModal} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>Fechar</button>
    </div>
  </div>
</Modal>

        </div>
      );
    };
    
 
export default CardSlider;





  