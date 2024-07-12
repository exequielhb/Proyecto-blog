import { Button, Navbar, Sidebar, TextInput } from "flowbite-react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import {
  FaMoon
} from "react-icons/fa"

const Header = () => {

  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" />
        </Link>
        <form>
            <TextInput
                placeholder="Buscar..."
                className="hidden lg:inline"
                rightIcon={AiOutlineSearch}
             />
        </form>
        <Button className="lg:hidden w-12 h-10" color="gray" pill>
            <AiOutlineSearch />
        </Button>

        {/* Seccion Navegacion Links */}
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                <FaMoon />
            </Button>
            {/* Login boton */}
            <Link to="/login">
              <Button gradientDuoTone="purpleToPink" >
                Iniciar
              </Button>
            </Link>
            {/* Funciona con el collapse */}
              <Navbar.Toggle />
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path == "/"} as={'div'}>
                  <Link to="/">Inicio</Link>
                </Navbar.Link>
                <Navbar.Link active={path == "/about"} as={'div'}>
                  <Link to="/about">Sobre Nosotros</Link>
                </Navbar.Link>
                <Navbar.Link active={path == "/posts"} as={'div'}>
                  <Link to="/posts">Posts</Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Header