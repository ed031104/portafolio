import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./logo";

function NavBar() {
  return (
    <Navbar className="w-full" shouldHideOnScroll>
      <NavbarBrand>
        <Logo  />
        <p className="font-bold text-inherit p-3">EdwinDev</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Tecnologías
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portafolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contáctame
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
