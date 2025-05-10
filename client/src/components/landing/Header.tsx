import { Logo, ThemeToggler } from "@/components";
import { Anchor } from "@/styledComponents";

export function Header({ pathname }: { pathname?: string }) {
  const isHomePage = pathname === "/";
  const isAppPages = !isHomePage && !pathname?.includes("auth");
  const rootPath = isAppPages ? "/dashboard" : "/";

  return (
    <>
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
