import { Footer, Header, Main, Wrapper } from "@/styledComponents";
import type { AppShellProps } from "@/types/appshell";
import type React from "react";
import { Outlet } from "react-router";

export default function AppShell({
  header: HeaderContent,
  aside: AsideContent,
  footer: FooterContent,
}: AppShellProps<React.ComponentType>) {
  return (
    <Wrapper>
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
