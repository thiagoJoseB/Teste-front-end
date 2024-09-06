import React from 'react';
import esquerdaSeta from './img/esquerda.svg';
import direitaSeta from './img/direita.svg';
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: '-50px',
          zIndex: 1,
          background: `url(${esquerdaSeta}) no-repeat center center`,
          backgroundSize: 'contain',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    );
  };
  
  export const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: '-50px',
          zIndex: 1,
          background: `url(${direitaSeta}) no-repeat center center`,
          backgroundSize: 'contain',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    );
  };
