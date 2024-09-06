import { NavLink } from "react-router-dom"
import wagLogo from "../assets/images/logo-wag-boas-acoes.png"

const NavBar = () => {
  
  const linkClass = ({ isActive }: {isActive: boolean}) => isActive ? "text-white font-bold underline underline-offset-8" : "text-white font-bold no-underline"
  
  return (
    <nav>
      <div>
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 space-x-10 items-center justify-center">
            <NavLink to="/">
              <img
                className="flex flex-1 h-14 w-auto justify-start"
                src={wagLogo}
                alt="Wag Logo"
              />
            </NavLink>
            <div className="justify-items-center items-center">
              <div className="flex space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar