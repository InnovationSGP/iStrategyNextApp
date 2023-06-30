import Link from "next/link";
import {page_routes} from "../../lib/pageRoutes";

export function Bullet(props: { text: string }) {
    return (
        <div className="flex flex-wrap items-center py-2">
            <div className="w-auto bg-primaryPink bg-opacity-40 rounded-lg px-8 py-2 animate-pulse shadow-sm">
                <Link href={page_routes.resourceCenter} className="text-sm text-black">
                    &#x1F44B; {props.text}
                </Link>
            </div>
        </div>
    );
}
