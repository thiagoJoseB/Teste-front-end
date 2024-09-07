import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss';
import logo from './img/logo.svg';
import lupa from './img/lupa.svg';
import present from './img/present.svg';
import heart from './img/Heart.svg';
import car from './img/ShoppingCart.svg';
import person from './img/UserCircle.svg';
import truck from './img/Truck.svg';
import check from './img/ShieldCheck.svg';
import credit from './img/CreditCard.svg';
import banner from './img/banner.svg';
import moda from './img/moda.svg';
import superMercado from './img/supermercados.svg';
import corrida from './img/corrida.svg';
import ferramentas from './img/ferramentas.svg';
import bebida from './img/whiskey.svg';
import tecnologia from './img/monitorar-tablet-e-smartohone.svg';
import saude from './img/cuidados-de-saude.svg';
import CardSlider from './card';
import bannerProduto from './img/produto-banner.svg';
import bannerParceiro from './img/parceiro-banner.svg';
import marcas from './img/marca.svg';
import MarcasSlider from './marcas';
import FormasPagamento from './img/formas_pagamento.svg';
import redesSocias from './img/redesSocias.svg';
import rodaPe from './img/rodape.svg';
const products = [
  {
    productName: "Iphone 11 PRO MAX BRANCO 1",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 15000
  },
  {
    productName: "IPHONE 13 MINI 1",
    descriptionShort: "IPHONE 13 MINI 1",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 9000
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 2",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 14990
  },
  {
    productName: "IPHONE 13 MINI 2",
    descriptionShort: "IPHONE 13 MINI 2",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 12000
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 3",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 4550
  },
  {
    productName: "IPHONE 13 MINI 3",
    descriptionShort: "IPHONE 13 MINI 3",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 38000
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 4",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 42000
  },
  {
    productName: "IPHONE 13 MINI 4",
    descriptionShort: "IPHONE 13 MINI 4",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 520
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 5",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 149990
  },
  {
    productName: "IPHONE 13 MINI 5",
    descriptionShort: "IPHONE 13 MINI 5",
    photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 100000
  }
];


const images = [marcas, marcas ,marcas ,marcas, marcas , marcas, marcas];



const MyComponent: React.FC = () => {
  return (
    <div className='App'>
      <header className='header-vtex'>
        <div className='topo'>
          <ol>
            <li>
              <img className='img-topo' src={truck} />
              <label>Compra 100% segura</label></li>

            <li>
              <img className='img-topo' src={check} />
              <label> Frete grátis acima de R$ 200</label>
            </li>
            <li>
              <img className='img-topo' src={credit} />
              <label>Parcele suas compras</label>
            </li>
          </ol>

        </div>
        <div className='centro-header'>
          <img className='logo-img' src={logo} />
          <input className='search' placeholder='O que você está buscando?' />
          <img className='lupa-img' src={lupa} />
          <img className='present-img' src={present} />
          <img className='menu-img' src={heart} />
          <img className='menu-img' src={person} />
          <img className='menu-img' src={car} />

        </div>
        <nav className='menu'>
          <ol>
            <li>Todas Categorias</li>
            <li>Supermercado</li>
            <li>Livros</li>
            <li>Moda</li>
            <li>Lançamentos</li>
            <li style={{ color: '#F71963' }}>Ofertas do dia</li>
            <li>Assinatura</li>
          </ol>

        </nav>

      </header>
      <main className='main-vtex'>
        <div className='banner'>
          <img className='banner-img' src={banner} />
        </div>
        <div className='opcoes'>
          <div className='caixa-opcoes'>
            <div style={{ background: '#FFFFFF' }} className='caixa-img'>
              <img className='img-opcoes' src={tecnologia} />
            </div>
            <label style={{ color: 'red', marginLeft: '20px' }} className='titulo-opcoes'>Tecnologia</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={superMercado} />
            </div>
            <label style={{ marginLeft: '10px' }} className='titulo-opcoes'>Supermercado</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={bebida} />
            </div>
            <label style={{ marginLeft: '32px' }} className='titulo-opcoes'>Bebidas</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={ferramentas} />
            </div>
            <label style={{ marginLeft: '16px' }} className='titulo-opcoes'>Ferramentas</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={saude} />
            </div>
            <label style={{ marginLeft: '40px' }} className='titulo-opcoes'>Saúde</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={corrida} />
            </div>
            <label style={{ fontSize: '16px' }} className='titulo-opcoes'>Esportes e Fitnes</label>
          </div>
          <div className='caixa-opcoes'>
            <div className='caixa-img'>
              <img className='img-opcoes' src={moda} />
            </div>
            <label style={{ marginLeft: '40px' }} className='titulo-opcoes'>Moda</label>
          </div>
        </div>
        <div className='produtosRelacionados'>
          <div className='caixa-titulo-produto'>
          </div>
          <div className='caixa-produtos'>
            <div className='nome-produtos'></div>
            <div className='nome-produtos'></div>
            <div className='nome-produtos'></div>
            <div className='nome-produtos'></div>
            <div className='nome-produtos'></div>
            <div className='nome-produtos'></div>
          </div>
        </div>
        <div className='cardProdutos'>
          <CardSlider cards={products} />
        </div>
        <div className='parceiros'>
          <div style={{ marginLeft: '10px' }} className='cardParceiro'>
            <img src={bannerParceiro} />
          </div>
          <div style={{ marginLeft: '110px' }} className='cardParceiro'>
            <img src={bannerParceiro} />
          </div>
        </div>
        <div className='tituloProdutosRelacionados'>

        </div>

        <div className='caixaProdutosRelacionados'>
            <div style={{ marginLeft: '30px' }} className='cardProdutosRelacionados'>
              <img src={bannerProduto} />
            </div>
            <div style={{ marginLeft: '80px' }} className='cardProdutosRelacionados'>
            <img src={bannerProduto} />
            </div>

           
        </div>

        <div className='tituloNavegueMarcas'>
          <h3>Navegue por marcas</h3>
          <MarcasSlider marcas={images}/>

        </div>



      </main>
      <footer className='footer'>
        <div className='footerConteudo'>
          <div className='sobreNos'>
          <div>
            <h2>SOBRE NÓS</h2>
              <ul>
                <li>CONHEÇA</li>
                <li>COMO COMPRAR</li>
                <li>INDICAÇÃO E DESCONTO</li>
              </ul>
              <img src={redesSocias}/>
          </div>

          </div>
          <div className="informacoesUteis">
            <h2>INFORMAÇÕES ÚTEIS</h2>
              <ul>
                <li>FALE CONOSCO</li>
                <li>DÚVIDAS</li>
                <li>PRAZOS DE ENTREGA</li>
                <li>FORMAS DE PAGAMENTO</li>
                <li>POLITICA E PRIVACIDADE</li>
                <li>TROCAS E DEVOLUÇÕES</li>
              </ul>
          </div>

          <div className='formasPagamento'>
            <h3>FORMAS DE PAGAMENTO</h3>
            <img src={FormasPagamento}/>

          </div>
          <div className='caixaFaleConosco'>
            <p>Cadastre-se e Receba nossas</p>
            <h3>novidades e promoções</h3>
            <label>Excepteur sint occaecat cudatat non ent, sunt in</label><br></br>
            <label style={{marginLeft:'90px'}}>culpa qui officia lorem ipsum</label>
            <div className='caixaInput'>
            <input placeholder='Seu e-mail' className='input-novidades'/>
            <div className='btnOK'><p>ok</p></div>
            </div>


          </div>

        </div>
        <div className='rodaPe'>
          <div className='texto'>
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
          </div>

          <div className='logoRodaPe'>
          <img src={rodaPe}/>
          </div>
        </div>

      </footer>
    </div>



  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>

);






reportWebVitals();


