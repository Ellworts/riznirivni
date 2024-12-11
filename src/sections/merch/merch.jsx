import './merch.scss';
import MerchGrid from './merch-grid.jsx';

import firstIMG from './media/png/firstIMG.png';
import secondIMG from './media/png/secondIMG.png';
import thirdIMG from './media/png/thirdIMG.png';
import fourthIMG from './media/png/fourthIMG.png';

const cards = [
  {
    image: firstIMG,
    headline: 'принти на чашки',
    top: '160px',
  },
  {
    image: secondIMG,
    headline: 'піни та стікери',
    top: '286px',
  },
  {
    image: thirdIMG,
    headline: 'Текстильні вироби',
    top: '138px',
  },
  {
    image: fourthIMG,
    headline: 'принти на чашки',
    top: '0px',
  },
];

function Merch() {
  return (
    <div className="merch-section">
      <MerchGrid />
      <div className="merch-section__container">
        <div className="overlay-content">

          <div className="about-us__title-wrapper">
            <a href="/merch" className="about-us-title">Мерч<span className="icon-arrow"></span></a>
          </div>

          <div>
            <p className="faq">
              Створюйте свої принти з <span className="w600">Різні.Рiвнi: <br />завантажуйте</span> файли тут!</p>
          </div>

          <div className="cards-grid">
            {cards.map((card, index) => (
              <a
                key={index}
                href="/"
                className="card"
                style={{ top: card.top, position: 'relative' }}
              >
                <span className="card__image">
                  <img src={card.image} alt={card.headline} />
                </span>
                <p className="card__headline">{card.headline}</p>
              </a>
            ))}
          </div>


          <div className="button-container">
            <button className="custom-button--about-us">
              до файлів
              <span className="buttons-arrow"></span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Merch;
