import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params ?? [];
  console.log("router: ", router);
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
