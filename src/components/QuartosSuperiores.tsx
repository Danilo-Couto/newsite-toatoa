import { Link } from 'react-router-dom';
import BotaoReservar from './BotaoReservar';
import { useEffect, useState } from 'react';

interface RoomDetails {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imagesPaths: string[];
  cover: string;
}

interface QrtSuperioresOnMainPage {
  qrtosSuperiores: { [key: number]: RoomDetails };
}

export const QuartosSuperiores = ({ qrtosSuperiores }: QrtSuperioresOnMainPage) => {
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(qrtosSuperiores).length > 0) {
      setIsLoaded(true);
    }
  }, [qrtosSuperiores]);


  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const entries = Object.entries(qrtosSuperiores).reverse();

  return (
    <div className='superior-rooms'>
      {entries.map(([key, value]) => (
        <div key={key}>
          <h3>{value.title}</h3>
          <div className="room-container">
            <Link to={`/suites/${value.slug}`} key={value.slug}>
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
