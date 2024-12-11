import './topbar.scss';

function TopBar() {
  return (
    <div className="topbar">
      <a href="/" aria-label="main" className="logo"></a>

      <ul className="horizontal-menu">
        <li className="menu-item">
          <a href="#projects-section" className="scroll-link">проєкти</a>
        </li>
        <li className="menu-item scroll-link">
          <a href="#about-us-section">про нас</a>
        </li>
        <li className="menu-item scroll-link">
          <a href="#questions">питання</a>
        </li>
        <li className="menu-item scroll-link">
          <a href="#partners">партнери</a>
        </li>
      </ul>

      <div className="social-media">
        <a href="https://www.instagram.com/rizni.rivni/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon insta"></a>
        <a href="https://www.tiktok.com/@riznirivni" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon tiktok"></a>
      </div>
    </div>
  );
}

export default TopBar;
