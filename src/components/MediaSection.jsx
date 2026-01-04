import promoVideo from "../assets/video/promo.mp4";
import laAudio from "../assets/audio/la-ambient.mp3";
import laImage from "../assets/images/la-edited.jpg";

export default function MediaSection() {
  return (
    <section id="media" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Multimedia</h2>
          <p>
            This section includes a promotional video, a separate audio track (30+
            seconds), and an edited image.
          </p>
        </div>

        <div className="grid grid--2">
          <div className="card">
            <h3>Promotional video</h3>
            <p className="muted">
              A short video to showcase Los Angeles and its main attractions.
            </p>
            <video className="media" controls playsInline>
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="card">
            <h3>Audio (Street Tour narration)</h3>
            <p className="muted">
              A short narration describing Los Angeles and the activities featured
              on this website.
            </p>
            <audio className="media" controls>
              <source src={laAudio} type="audio/mpeg" />
              Your browser does not support HTML5 audio.
            </audio>

            <div className="divider" />

            <h3>Edited image</h3>
            <p className="muted">
              An edited photo of Los Angeles (with visible editing such as text,
              filters, or color correction).
            </p>
            <img className="image" src={laImage} alt="Los Angeles edited" />
          </div>
        </div>
      </div>
    </section>
  );
}
