import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return <div className="lines default bg-category grow pb-20">Not found</div>;
}
