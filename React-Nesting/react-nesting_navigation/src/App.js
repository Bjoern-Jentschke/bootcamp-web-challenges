import "./styles.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home" className="navigation__link">
            Home
          </Link>
          <Link href="#about" className="navigation__link">
            About
          </Link>
          <Link href="#impressum" className="navigation__link">
            Impressum
          </Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
