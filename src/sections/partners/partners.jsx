import './partners.scss';
import '../../utils/customStuff.scss';

import firstIMG from './media/pic-first.png';
import secondIMG from './media/pic-sec.png';
import thirdIMG from './media/pic-thrd.png';
import fourthIMG from './media/pic-frth.png';
import fifthIMG from './media/pic-fifth.png';
import sixthIMG from './media/pic-six.png';
import seventhIMG from './media/pic-seven.png';
import eighthIMG from './media/pic-eight.png';

const cards = [
  {
    image: firstIMG,
  },
  {
    image: secondIMG,
  },
  {
    image: thirdIMG,
  },
  {
    image: fourthIMG,
  },
];

const cards2 = [
  {
    image: fifthIMG,
  },
  {
    image: sixthIMG,
  },
  {
    image: seventhIMG,
  },
  {
    image: eighthIMG,
  },
];

function PartnersContent() {
  return (
    <div className="wrapper">
      <div id='partners' className="about-us__title-wrapper">
        <a href="/partners" className="about-us-title wrapper-content">
          Партнери<span className="icon-arrow"></span>
        </a>
      </div>

      <div className="wrapper-content-right ">
        <div className="partners-gif"></div>

        <div className="partners-description wrapper-content">
          Кожна з наших організацій-партнерів має своє спрямування, <br />але всі ми працюємо з темами, пов’язаними з правами <br />ЛГБТК+ людей.
        </div>

      </div>

      <div className="partners-cards">
        {cards.map((card, index) => (
          <a key={index} href='/' className="partners-card">
            <img src={card.image} alt={`Partner ${index + 1}`} className="partners-card-image" />
          </a>
        ))}
      </div>

      <div className="partners-cards2">
        {cards2.map((card, index) => (
          <a key={index} href='/' className="partners-card">
            <img src={card.image} alt={`Partner ${index + 1}`} className="partners-card-image" />
          </a>
        ))}
      </div>
    </div>
  );
}

function PartnersGrid() {
  return (
    <div className="partners__background-grid">
      <div className="partners__bg-line"></div>
      <div className="partners__bg-line"></div>
      <div className="partners__bg-line"></div>
      <div className="partners__bg-line"></div>
      <div className="partners__bg-line"></div>
      <div className="partners__bg-line"></div>
    </div>
  );
}

function Partners() {
  return (
    <div className="partners">
      <PartnersGrid />
      <div>
        <PartnersContent />
      </div>
    </div>
  );
}

export default Partners;
