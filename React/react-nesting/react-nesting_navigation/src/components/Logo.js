import logo from "../img/logo.jpg";
import Link from "./Link";
import Image from "./Image";

export default function Logo() {
  return (
    <Link href="#">
      <Image className="round-image" src={logo} alt="logo" />
    </Link>
  );
}
