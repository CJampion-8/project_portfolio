import './navbar.css';

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav-wrapper">
        <p className="nav-name">Conrad Cypert</p>
        <div className="nav-links">
          <a href="https://github.com/CJampion-8" target="_blank"  rel="noreferrer" className="nav-link-custom">GitHub</a>
          <a href="#about" className="nav-link-custom">About</a>
          <a href="#pricing" className="nav-link-custom">Contact</a>
        </div>
      </div>
    </div>
  );
}


export default NavBar;
