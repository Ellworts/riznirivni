import React, { useState } from 'react';
import './projects.scss';

import collectionRivnosti from './media/jpeg/collection-rivnosti.jpg';
import tolerance from './media/mp4/tolerance.mp4';
import museum from './media/mp4/museum.mp4';
import tucha from './media/jpeg/tucha.png';
import rizniRazom from './media/jpeg/rizni-razom.png';

const slides = [
  {
    image: collectionRivnosti,
    headline: 'Колекція рівності',
    description: 'Разом із трьома всесвітньо відомими дизайнерками LITKOVSKAYA, BEVZA та KSENIASCHNAIDER запустили першу в світі Колекцію Рівності, що належить усім, хто підтримує рівні права.'
  },
  {
    image: tolerance,
    headline: 'Маніфест толерантності',
    description: 'Це перша у світі музична колаборація за рівні права ЛГБТ+ ком`юніті, стати частиною якої можуть лише толерантні люди.',
    isVideo: true
  },
  {
    image: museum,
    headline: 'Музей прийняття',
    description: 'Інтерактивний онлайн Музей Прийняття, в якому можна пережити досвід батьків ЛГБТК+ дітей.',
    isVideo: true
  },
  {
    image: tucha,
    headline: 'Різні.Рівні х ТУЧА',
    description: 'Українська музикантка ТУЧА та Різні.Рівні до Міжнародного жіночого дня випустили підбірку пісень вітчизняних музиканток і продюсерок «Видимі та гучні».'
  },
  {
    image: rizniRazom,
    headline: 'Різні.Рівні разом',
    description: 'Інфокампанія в інстаграм, яка об’єднала українську ЛГБТК+ спільноту, підсилила її видимість, дала їй та союзни_цям додаткову опору, відчуття єдності та підтримки.'
  }
];

function Projects() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="projects">
      <div id='projects-section' className="projects-title">
        <a href="/projects" className="section__title-wrapper">Проєкти <span className="icon-arrow"></span></a>
      </div>
      <div className="projects-slider">
        <div className="projects-slider-media">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`projects-slider-slide ${activeButton === index ? 'active' : ''}`}
              style={{ opacity: activeButton === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            >
              {slide.isVideo ? (
                <video
                  src={slide.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="projects-slider-video"
                />
              ) : (
                <div
                  className="projects-slider-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="projects-slider-gradientContainer">
          <h2 className="projects-slider-headline">{slides[activeButton].headline}</h2>
          <h3 className="projects-slider-description">
            {slides[activeButton].description}
          </h3>
        </div>
      </div>
      <div className="buttons-grid">
        <nav className="buttons">
          <div className="buttons-row">
            {slides.slice(0, 3).map((slide, index) => (
              <button
                key={index}
                className={`custom-button ${activeButton === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {slide.headline}
                <span className="buttons-icon"></span>
              </button>
            ))}
          </div>
          <div className="buttons-row">
            {slides.slice(3, 5).map((slide, index) => (
              <button
                key={index + 3}
                className={`custom-button ${activeButton === index + 3 ? 'active' : ''}`}
                onClick={() => handleClick(index + 3)}
              >
                {slide.headline}
                <span className="buttons-icon"></span>
              </button>
            ))}
          </div>
        </nav>
        <nav className="buttons-row2">
          <button className="custom-button--about-us">
            всі проєкти
            <span className="buttons-arrow"></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Projects;
