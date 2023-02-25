import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
