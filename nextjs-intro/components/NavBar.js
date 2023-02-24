import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>about</a>
      </Link>
    </nav>
  );
}
