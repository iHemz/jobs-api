import { Logo, ThemeToggler } from "@/components";
import { openMobileMenu } from "@/features/tools/toolsSlice";
import { useAppDispatch } from "@/hooks/useStore";
import { Anchor } from "@/styledComponents";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export function Header({ pathname }: { pathname?: string }) {
  const isHomePage = pathname === "/";
  const isAppPages = !isHomePage && !pathname?.includes("auth");
  const rootPath = isAppPages ? "/dashboard" : "/";
  const dispatch = useAppDispatch();

  return (
    <>
      <IconButton
        className="menu-btn"
        size="small"
        onClick={() => dispatch(openMobileMenu())}
      >
        <MenuIcon className="menu-icon" sx={{ width: 32, height: 32 }} />
      </IconButton>
      {!isAppPages && <Logo path={rootPath} />}
      {isAppPages && <Logo path={rootPath} className="app" />}
      <div>
        <nav>
          <Anchor
            href="https://jobs-api-tydg.onrender.com/api-docs/"
            target="_blank"
          >
            API Documentation
          </Anchor>
          {isHomePage && (
            <>
              <Anchor href="/auth/login">Login</Anchor>
              <Anchor href="/auth/register">Sign Up</Anchor>
            </>
          )}
        </nav>
        <ThemeToggler />
      </div>
    </>
  );
}
