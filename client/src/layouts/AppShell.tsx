import { useAppSelector } from "@/hooks/useStore";
import { Div, Footer, Header, Main, Wrapper } from "@/styledComponents";
import type { AppShellProps } from "@/types/appshell";
import type React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function AppShell({
  header: HeaderContent,
  aside: AsideContent,
  footer: FooterContent,
}: AppShellProps<React.ComponentType<{ pathname?: string }>>) {
  const { isDarkTheme, isMobileMenuOpen } = useAppSelector(
    (state) => state.tools
  );
  const { pathname } = useLocation();
  const isAppPages = pathname.includes("app");
  const isAuthPages = pathname.includes("auth");

  return (
    <Wrapper
      $dark={isDarkTheme}
      $aside={!!AsideContent}
      $asideWidth={320}
      $isMobileMenuOpen={isMobileMenuOpen}
    >
      <Div>
        <Header $isApp={isAppPages}>
          <HeaderContent pathname={pathname} />
        </Header>
        <Main $isApp={isAppPages} $isAuth={isAuthPages}>
          <Outlet />
        </Main>
      </Div>
      <Footer>{FooterContent && <FooterContent />}</Footer>
      {AsideContent && <AsideContent />}
    </Wrapper>
  );
}
