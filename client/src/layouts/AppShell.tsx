import { useAppSelector } from "@/hooks/useStore";
import { Footer, Header, Main, Wrapper } from "@/styledComponents";
import type { AppShellProps } from "@/types/appshell";
import type React from "react";
import { Outlet } from "react-router";

export default function AppShell({
  header: HeaderContent,
  aside: AsideContent,
  footer: FooterContent,
}: AppShellProps<React.ComponentType>) {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);

  return (
    <Wrapper $dark={isDark}>
      <Header>
        <HeaderContent />
      </Header>
      <Main>
        <Outlet />
        {AsideContent && <AsideContent />}
      </Main>
      <Footer>{FooterContent && <FooterContent />}</Footer>
    </Wrapper>
  );
}
