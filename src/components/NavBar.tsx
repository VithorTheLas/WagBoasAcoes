import { NavLink } from "react-router-dom";
import wagLogo from "../assets/images/logo-wag-boas-acoes.png";

const NavBar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-bold underline underline-offset-8"
      : "font-semibold no-underline";

  return (
    <nav>
      <>
        <div className="flex justify-center items-center pt-8">
          <NavLink to="/">
            <img className="flex w-24" src={wagLogo} alt="Wag Logo" />
          </NavLink>
          <div className="w-44" />
          <div className="flex gap-8 text-white">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/quem-somos" className={linkClass}>
              Quem Somos
            </NavLink>
            <NavLink to="/como-funciona" className={linkClass}>
              Como Funciona
            </NavLink>
            <NavLink to="/como-surgiu" className={linkClass}>
              Como Surgiu
            </NavLink>
            <NavLink to="/contato" className={linkClass}>
              Contato
            </NavLink>
          </div>
        </div>
      </>
    </nav>
  );
};

export default NavBar;
