import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
    </nav>
  );
}
