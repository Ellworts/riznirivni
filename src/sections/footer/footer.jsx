import './footer.scss';
import '../../utils/customStuff.scss';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <button className="footer-menu">
          <div className="number">01</div>
          <div className="label">ПРОЄКТИ</div>
        </button>
        <button className="footer-menu">
          <div className="number">02</div>
          <div className="label">ПРО НАС</div>
        </button>
        <button className="footer-menu">
          <div className="number">03</div>
          <div className="label">ПИТАННЯ</div>
        </button>
        <button className="footer-menu">
          <div className="number">04</div>
          <div className="label">ДОПОМОГА</div>
        </button>
      </div>

      <div className="footer-bottom">
        <p id='left'>Website by <a href='https://t.me/ellworts' id="underline">ellworts</a></p>
        <p>
          ПРОЄКТ РІЗНІ.РІВНІ РЕАЛІЗОВАНО ЗА ІНІЦІАТИВИ ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ:
          Гендер Зед, Інша, КиївПрайд, Ліга, Сфера, Освітній Центр з Прав Людини у Львові за підтримки
          <br />
          Національного Демократичного Інституту в Україні та урядів Великобританії, Швеції та Канади.
          ІДЕЯ ТА РОЗРОБКА ПРОЄКТУ: Технологічна креативна агенція [isdgroup]
        </p>
        <p id='right'>© РІЗНІ РІВНІ, 2024.</p>
      </div>
    </div>
  );
}

export default Footer;
