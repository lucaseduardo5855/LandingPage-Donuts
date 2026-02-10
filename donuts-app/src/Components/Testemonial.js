import ProfilePicture from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testemonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Avaliações</p>
        <h1 className="primary-heading">O que dizem sobre nós</h1>
        <p className="primary-text">
          Nossos clientes adoram a qualidade e o sabor dos nossos donuts. Cada
          mordida é uma explosão de sabor que traz alegria e satisfação. Estamos
          sempre recebendo elogios pela variedade de sabores que oferecemos.
        </p>
      </div>

      <div className="testomonial-section-bottom">
        <img src={ProfilePicture} alt="imagem do avaliador" />
        <p>
          Descobri a loja de donuts foi uma das melhores coisas, O atendimento é
          excelente e os donuts são sempre frescos, recomendo!
        </p>
      </div>

      <div className="testemonials-starts-container">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  );
};

export default Testemonial;
