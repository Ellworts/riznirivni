import './about-us.scss'

function AboutUs() {
  return (
    <div id='about-us-section' className="about-us_container">
      <div  className="about-us__title-wrapper">
        <a href="/about-us" className="about-us-title">Про нас<span className="icon-arrow"></span></a>
      </div>

      <div className="about-us__text">
        <p className="about-us__text-main">Хто такі різні.рівні?</p>
        Інформаційна кампанія? Рух?
        <br />Громадська організація? Медіа?
      </div>

      <div className="about-us__content-grid">
        <p className='about-us__content-text'>Ми ширимо ідею рівності для всіх та показуємо що підтримувати ЛГБТК+ людей - це нова норма, до якої потрібно прагнути.
          <br /><br />
          Адже тільки так можливо розбудувати свідоме українське суспільство, у якому комфортно жити кожному та кожній.
        </p>
        <button className="custom-button--about-us">
          більше про нас
          <span className="buttons-arrow"></span>
        </button>
      </div>
    </div>
  )
}

export default AboutUs