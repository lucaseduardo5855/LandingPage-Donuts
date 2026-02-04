import React from "react"
import NavBar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";

 const Home = () => {
    return(
        <div className="home-container">
            <NavBar />        

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="imagem de fundo da home container" />
                </div>
            </div>
        </div>
    );
};


export default  Home;