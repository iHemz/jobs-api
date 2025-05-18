import { Logo } from "@/components";
import { clearJob } from "@/features";
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

  const closeNavbar = () => {
    dispatch(closeMobileMenu());
    dispatch(clearJob());
  };

  return (
    <Aside $dark={isDarkTheme} $isMobileMenuOpen={isMobileMenuOpen}>
      <div className="mobile-menu">
        <Logo path="/app" />
        <IconButton className="menu-btn" size="small" onClick={closeNavbar}>
          <MenuClose className="menu-icon" sx={{ width: 32, height: 32 }} />
        </IconButton>
      </div>
      <nav>
        {MENU_LINKS.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            end={link.href === "/app"}
            onClick={closeNavbar}
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
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
