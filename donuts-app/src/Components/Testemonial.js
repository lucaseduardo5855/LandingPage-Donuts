import ProfilePicture from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testemonial = () => {
  const testemonials = [
    {
      img: { ProfilePicture },
      nome: "Lucas",
      text: "Donuts maravilhosos, de excelente qualidade os ingredientes, recomendo a todos!",
      stars: 5,
    },
    {
      img: { ProfilePicture },
      nome: "Gabriel",
      text: "Comida adoravel, e atendimento nota 10!",
      stars: 5,
    },
    {
      img: { ProfilePicture },
      nome: "Fernando",
      text: "Donuts frescos, vou recomendar para todos, muito bom!",
      stars: 5,
    },
  ];

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

      <div className="testemonial-section-bottom">
        {testemonials.map((data) => (
          <div className="testemonial-img" key={data.nome}>
            <img src={ProfilePicture} alt={data.nome} />
            <h1>{data.nome}</h1>
            <div className="testemonial-stars-container">
              {[...Array(data.stars)].map((_, index) => (
                <AiFillStar key={index} color="orange" />
              ))}
            </div>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testemonial;
