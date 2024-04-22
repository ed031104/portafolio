import Logo from "/src/components/Logo.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavBar = () => {

  const scrollTosection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollSkills = () => scrollTosection("tecnologias");
  const scrollProject = () => scrollTosection("Proyectos");
  const scrollAbout = () => scrollTosection("sobre mi");

  return (
      <Navbar className="fixed bg-indigo-950/5  shadow-2xl shadow-blue-950"  >
      <NavbarBrand >
        <Logo />
        <p className="font-bold text-inherit text-white p-3">EdwinDev</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <Link
            onClick={() => scrollSkills("tecnologias")}
            color="foreground"
            href="#"
            className="text-white"
          >
            Tecnologías
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            onClick={() => scrollAbout("tecnologias")}
            href="#"
            aria-current="page"
            className="text-indigo-700"
          >
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => scrollProject("proyectos")}
            color="foreground"
            href="#"
            className="text-white"
          >
            Portafolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-indigo-500">
            Contáctame
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
