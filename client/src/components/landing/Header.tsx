import { Logo, ThemeToggler } from "@/components";
import { Anchor } from "@/styledComponents";

export function Header() {
  return (
    <>
      <Logo path="/" />
      <div>
        <nav>
          <Anchor
            href="https://jobs-api-tydg.onrender.com/api-docs/"
            target="_blank"
          >
            API Documentation
          </Anchor>
          <Anchor href="/login">Login</Anchor>
          <Anchor href="/register">Sign Up</Anchor>
        </nav>

        <ThemeToggler />
      </div>
    </>
  );
}
