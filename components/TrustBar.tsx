import { Marquee } from "./Marquee";
import { LeafIcon } from "./icons/ServiceIcons";

/**
 * Moving trust strip, a seamless marquee of credential pills on a warm cream
 * band. Pauses on hover, respects reduced-motion.
 */
const items = [
  "NPTC & City & Guilds qualified",
  "Fully insured",
  "Free, no-obligation estimates",
  "24/7 emergency call-outs",
  "94% recommended locally",
  "Hampshire's local tree team",
  "Tidy finish, every job",
];

export function TrustBar() {
  return (
    <div className="border-y border-white/10 py-5">
      <Marquee>
        {items.map((item) => (
          <span
            key={item}
            className="mx-2 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-forest-900/10 bg-white px-5 py-2 text-sm font-medium text-forest-800 shadow-soft"
          >
            <LeafIcon className="h-4 w-4 shrink-0 text-leaf-600" />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
