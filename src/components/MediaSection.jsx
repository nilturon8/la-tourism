import promoVideo from "../assets/video/promo.mp4";
import laAudio from "../assets/audio/la-ambient.mp3";
import editedImg from "../assets/images/la-edited.jpg";

export default function MediaSection() {
  return (
    <section id="media" className="section">
      <div className="container">
        <h2>Multimèdia</h2>

        <h3>Vídeo promocional</h3>
        <video controls width="100%">
          <source src={promoVideo} type="video/mp4" />
        </video>

        <h3>Àudio (street tour)</h3>
        <audio controls>
          <source src={laAudio} type="audio/mpeg" />
        </audio>

        <h3>Imatge editada</h3>
        <img src={editedImg} alt="Los Angeles edited" width="100%" />
      </div>
    </section>
  );
}
