import React from "react"
import NavBar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight} from 'react-icons/fi';


 const Home = () => {
    return(
        <div className="home-container" id="home">
            <NavBar />        

            <div className="home-banner-container">
                
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="imagem de fundo da home container" />
                </div>

                <div className="home-text-section">
                    <h1 className="primary-heading">
                       Seu Donuts Favorito Entregue em Sua Casa     
                    </h1>
                    <p className="primary-text">
                        Diversos sabores deliciosos pra adoçar seus melhores momentos. Peça já o seu e receba um mimo de surpresa.
                    </p>
                    <p className="primary-text">
                        Ou venha comer conosco em um ambiente climatizado e aconchegante com várias opções para seu pedido
                    </p>
                    <button className="secundary-button">Faça seu pedido <FiArrowRight/></button>
                </div>

                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt="donuts" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default  Home;