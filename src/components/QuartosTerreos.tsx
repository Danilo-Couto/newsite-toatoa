import { Link } from "react-router-dom";
import BotaoReservar from "./BotaoReservar";
import { useEffect, useState } from "react";

interface RoomDetails {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imagesPaths: string[];
  cover: string;
}

interface QrtTerreosOnMainPage {
  qrtTerreos: { [key: number]: RoomDetails };
}

export const QuartosTerreos = ({ qrtTerreos }: QrtTerreosOnMainPage) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(qrtTerreos).length > 0) {
      setIsLoaded(true);
    }
  }, [qrtTerreos]);


  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const entries = Object.entries(qrtTerreos);

  return (
    <div className='inferior-rooms'>
      {entries.map(([key, value]) => (
        <div key={key} >
        <h3> {value.title} </h3>
        <div className="room-container">
          <Link to={ `/suites/${value.slug}` } key={ value.slug }>
            <img loading='lazy' src={value.cover} className="room-image"
            alt={`Imagem da suíte ${value.slug}`}/>
          </Link>
          <BotaoReservar />
        </div>
      </div>
      ))}
    </div>
  );
};
