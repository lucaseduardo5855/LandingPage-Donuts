import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFloodWater } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  const WorkinfoData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      title: "Feito de forma caseira",
      text: "Todos os nossos donuts são preparados com carinho e atenção aos detalhes. Usamos receitar tradicionais e técnicas artesanais para criar donuts frescos e saborosos!",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      title: "Ingrediente selecionados",
      text: "Escolhemos os melhores ingredientes para garantir que nosso donuts sejam sempre frescos e deliciosos. Usamos apenas produtos de alta qualidade desde a farinha até os recheios, para proporcionar uma experiência unica.",
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      title: "Entrega em toda a Cidade",
      text: "Levamos nossos donuts diretamento até você em qualquer lugar da cidade. Nossa Equipe de entregar garante que seu pedido chegue rápido e em perfeitas condições.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Como Servimos você</h1>
        <p className="primary-text">
          Nossa missão é proporcionar a você uma experiência única e deliciosa.
          Desde a seleção cuidadosa dos ingredientes até a entrega no seu
          endereço, cada etapa do nosso processo é pensada para garatir que você
          receba os melhores donuts da cidade. Estamos comprometidos com a
          qualidade
        </p>
      </div>

      <div className="work-section-bottom">
        {WorkinfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
