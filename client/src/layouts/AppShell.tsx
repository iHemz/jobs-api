import { useAppSelector } from "@/hooks/useStore";
import { Footer, Header, Main, Wrapper } from "@/styledComponents";
import type { AppShellProps } from "@/types/appshell";
import type React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function AppShell({
  header: HeaderContent,
  aside: AsideContent,
  footer: FooterContent,
}: AppShellProps<React.ComponentType<{ pathname?: string }>>) {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const location = useLocation();
  const isAppPages = location.pathname.includes("app");

  return (
    <Wrapper $dark={isDark} $aside={!!AsideContent} $asideWidth={320}>
      <Header $isApp={isAppPages}>
        <HeaderContent pathname={location.pathname} />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>{FooterContent && <FooterContent />}</Footer>
      {AsideContent && <AsideContent />}
    </Wrapper>
  );
}
