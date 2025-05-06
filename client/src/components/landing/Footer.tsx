export function Footer() {
  return (
    <div>
      <p>&copy; {new Date().getFullYear()} Jobizzi. All rights reserved.</p>
      <nav>
        <a href="/about">About</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}
