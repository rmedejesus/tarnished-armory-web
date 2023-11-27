export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Tarnished Armory</a>
      <ul>
        <li>
          <a href="/ammo">Ammo</a>
        </li>
        <li>
          <a href="/armaments">Armaments</a>
        </li>
      </ul>
    </nav>
  );
}