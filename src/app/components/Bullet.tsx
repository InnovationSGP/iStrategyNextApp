import Link from "next/link";
import { page_routes } from "../../lib/pageRoutes";

export function Bullet(props: { text: string }) {
  return (
    <div className="flex flex-wrap items-center py-2">
      <div className="w-auto  bg-pink-200  rounded-lg px-4 p-1">
        <Link href={page_routes.resourceCenter} className="text-sm">
          &#x1F44B; {props.text}
        </Link>
      </div>
    </div>
  );
}
