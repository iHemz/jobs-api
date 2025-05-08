import { Anchor } from "@/styledComponents";
import { SOCIALS_DATA } from "@/utils/data";

export function Footer() {
  return (
    <>
      <h2>Contact Us @</h2>
      <nav>
        {SOCIALS_DATA.map((social) => (
          <Anchor key={social.id} href={social.href}>
            <social.icon />
          </Anchor>
        ))}
      </nav>
      <small>
        &copy; {new Date().getFullYear()} Jobizzi. All rights reserved.
      </small>
    </>
  );
}
