import { Logo } from "@/components";
import { closeMobileMenu } from "@/features/tools/toolsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { ProfileMenu } from "@/layouts/ProfileMenu";
import { Aside } from "@/styledComponents";
import { MENU_LINKS } from "@/utils/data";
import MenuClose from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const { isDarkTheme, isMobileMenuOpen } = useAppSelector(
    (state) => state.tools
  );
  const dispatch = useAppDispatch();

  return (
    <Aside $dark={isDarkTheme} $isMobileMenuOpen={isMobileMenuOpen}>
      <div className="mobile-menu">
        <Logo path="/app" />
        <IconButton
          className="menu-btn"
          size="small"
          onClick={() => dispatch(closeMobileMenu())}
        >
          <MenuClose className="menu-icon" sx={{ width: 32, height: 32 }} />
        </IconButton>
      </div>
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
      <ProfileMenu />
    </Aside>
  );
}
