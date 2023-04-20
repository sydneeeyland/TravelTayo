import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <section className="nav">
      <header className="header">
        <a href="" className="logo">
          TravelTayo
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#work">Map</a>
          </li>
          <li>
            <a href="#about">Community</a>
          </li>
          <li>
            <a href="#careers">Donate</a>
          </li>
          <li>
            <a href="#contact">Login</a>
          </li>
        </ul>
      </header>

      <Outlet />
    </section>
  );
}

export default Layout;
