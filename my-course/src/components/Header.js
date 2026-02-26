import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      
        <img src={logo} alt="Logo" className="logo" />
      
      {/* Right: Navigation */}
      <nav className="nav-links" >
        <a href="/courses" style={{textdecoration: "none"}}>Courses</a>
        <a href="/login" style={{textdecoration: "none"}}>Login</a>
        <a href="/about" style={{textdecoration: "none"}}>About</a>
        <a href="/signup" style={{textdecoration: "none"}}>Signup</a>
      </nav>
    </header>
  );
}

export default Header;
