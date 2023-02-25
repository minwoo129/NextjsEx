import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>hello</h1>
      {/* NavBar의 a 태그에 영향 X */}
      <style jsx global>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
