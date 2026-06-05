import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Visual breadcrumbs. Pair with breadcrumbSchema() for matching structured data. */
export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: { name: string; path: string }[];
  onDark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className={onDark ? "text-bone-300" : "text-bone-600"} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={
                    onDark
                      ? "text-leaf-300 hover:text-bone-50"
                      : "text-emerald-700 hover:text-forest-900"
                  }
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  className={onDark ? "h-3.5 w-3.5 text-white/30" : "h-3.5 w-3.5 text-bone-400"}
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
