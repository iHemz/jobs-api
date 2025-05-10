import { Logo } from "@/components";
import { useAppSelector } from "@/hooks/useStore";
import { Aside } from "@/styledComponents";
import { MENU_LINKS } from "@/utils/data";
import { NavLink } from "react-router";

export function Navbar() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  return (
    <Aside $dark={isDark}>
      <Logo path="/app" />
      <nav>
        {MENU_LINKS.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive, isPending }) =>
              `navlink ${isActive ? "active" : isPending ? "pending" : ""}`
            }
          >
            <link.icon />
            {link.title}
          </NavLink>
        ))}
      </nav>
    </Aside>
  );
}
