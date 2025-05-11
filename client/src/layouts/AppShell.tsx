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
  const location = useLocation();
  const isAppPages = location.pathname.includes("app");

  return (
    <Wrapper
      $dark={isDarkTheme}
      $aside={!!AsideContent}
      $asideWidth={320}
      $isMobileMenuOpen={isMobileMenuOpen}
    >
      <Div>
        <Header $isApp={isAppPages}>
          <HeaderContent pathname={location.pathname} />
        </Header>
        <Main $isApp={isAppPages}>
          <Outlet />
        </Main>
      </Div>
      <Footer>{FooterContent && <FooterContent />}</Footer>
      {AsideContent && <AsideContent />}
    </Wrapper>
  );
}
