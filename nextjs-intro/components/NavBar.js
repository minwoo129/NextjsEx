import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a href="/about">about</a>
      </Link>
    </nav>
  );
}
