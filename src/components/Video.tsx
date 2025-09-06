import 'react-responsive-carousel/lib/styles/carousel.min.css';

const video = '/WhatsApp Video 2024-08-09 at 09.57.09.mp4'

const mainVideo = () => {
  return (
    <div>
      <video src={video} height="600" autoPlay muted />
    </div>
  );
};

export default mainVideo;