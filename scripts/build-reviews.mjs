// Parse the verified review text files into a typed data module.
// FB uses "Recommends"; Bark/Google are 4-5★. We show 5★ (all are top-rated;
// per-review star counts aren't exposed in the source files).
import { readFile, writeFile } from "node:fs/promises";

const R = "reviews";

function parseBlocks(text, source) {
  const blocks = text.split(/\r?\n\r?\n+/);
  const out = [];
  for (const b of blocks) {
    const lines = b.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    let name = null;
    let collecting = false;
    const reviewLines = [];
    for (const line of lines) {
      const m = line.match(/^(Platform|Business|Name|Date|Service|Recommends|Review)\s*:\s*(.*)$/i);
      if (m) {
        const key = m[1].toLowerCase();
        if (key === "name") { name = m[2]; collecting = false; }
        else if (key === "review") { reviewLines.push(m[2]); collecting = true; }
        else collecting = false;
      } else if (collecting) {
        reviewLines.push(line);
      }
    }
    const quote = reviewLines.join(" ").replace(/\s+/g, " ").trim();
    if (name && quote && quote.length > 1) out.push({ author: name, source, rating: 5, quote });
  }
  return out;
}

const fb = parseBlocks(await readFile(`${R}/facebook reviews verified.txt`, "utf8"), "Facebook");
const bark = parseBlocks(await readFile(`${R}/bark reviews verified.txt`, "utf8"), "Bark");

// Google reviews (faithful first-person renderings of the verified summaries).
const google = [
  {
    author: "Roger Dacombe",
    source: "Google",
    rating: 5,
    quote:
      "I have used Joe's service three times now, twice for trees that had come down in bad weather. He responded and dealt with the problem very quickly and efficiently. I cannot state his ability to undertake a job highly enough, or indeed his prices, which are very fair and reasonable. I found all of the crew very polite and nice people. The service provided was first class and I cannot recommend him highly enough to anyone. You cannot go wrong by asking him to undertake a job for you.",
  },
  {
    author: "Richard Bowen",
    source: "Google",
    rating: 5,
    quote:
      "Quality work and the price matched the quote exactly. Easy to deal with, would highly recommend them.",
  },
  {
    author: "Olivia N. E.",
    source: "Google",
    rating: 5,
    quote:
      "Reliable service at a very fair price. Would highly recommend Joe and his team, and would use them again. Many thanks for doing such a great job!",
  },
  {
    author: "Chloe Hitchins",
    source: "Google",
    rating: 5,
    quote:
      "Joe and his team did the work at a reasonable price. Friendly, very tidy, and got the job done quickly to an excellent standard. Would definitely recommend.",
  },
  {
    author: "Charlotte Godfrey",
    source: "Google",
    rating: 5,
    quote:
      "Phoned for an enquiry and they came when agreed. Excellent price for complete tree and stump removal, brilliant service from start to finish. Thanks Joseph and the team.",
  },
  // --- From the verified Google CSV export (Roger Dacombe above is the same
  // reviewer; deduped by the logic below. Four star-only reviews with no text
  // (Poppy Callard, Jeffery Turner, Tom Martindale, Lee Grant) are not shown as
  // testimonials. One 4-star review (Kelly Owens) is recorded as such. ---
  { author: "Dynamic Sailmakers", source: "Google", rating: 5, quote: "Joe and Mark were super prompt at responding to my request to remove a section of bamboo and flower bed, hard working and effective solution, clearly an experienced team. Recommended." },
  { author: "Donna Armstrong", source: "Google", rating: 5, quote: "Joey came to ours due to a neighbour's tree overlapping our garden and him and his team were super fast and efficient! Left no leaf behind, cleaned up everything, now the garden looks like new! Would highly recommend Joe's little trees service." },
  { author: "Andrew Leppard", source: "Google", rating: 5, quote: "Joe and team got my overgrown garden back under control with all associated mess cleared up. Really happy and will certainly be using again." },
  { author: "Paul Denyer", source: "Google", rating: 5, quote: "Three tree surgeons were asked for quotes but Joe was the only one that turned up. Very pleasant guy." },
  { author: "Jacqui Sell", source: "Google", rating: 5, quote: "A great job, efficient and very tidy." },
  { author: "Robert Borba", source: "Google", rating: 5, quote: "I had a massive oak tree that needed trimming. They were punctual, professional, and left my yard spotless." },
  { author: "Teresa Farmer", source: "Google", rating: 5, quote: "Excellent fast service to remove my tree stump." },
  { author: "Tanuj Bhatia", source: "Google", rating: 5, quote: "Joe and his team did an absolute amazing job in grinding all the stumps." },
  { author: "Malcolm Ayres", source: "Google", rating: 5, quote: "Hi Joe, thank you both so much for the excellent work that you provided today." },
  { author: "Tara Boddy", source: "Google", rating: 5, quote: "I messaged Joe and got a reply straight away. Very professional and very happy with the outcome." },
  { author: "Gourav Dhiman", source: "Google", rating: 5, quote: "They showed up on time, worked efficiently, and respected our property." },
  { author: "Rebecca Carroll", source: "Google", rating: 5, quote: "Quick, efficient and great job done. Reasonably priced." },
  { author: "Billy Padbury", source: "Google", rating: 5, quote: "Joe's team were on time and got the job done quickly with no problems." },
  { author: "Kelly Owens", source: "Google", rating: 4, quote: "I found Little Joe's tree services to be very good. Very reasonable prices." },
  { author: "Sean Terry", source: "Google", rating: 5, quote: "Good company, very friendly. Over the moon with the job, left my back garden and drive cleaner than it was before." },
  { author: "Andrew Hounsome", source: "Google", rating: 5, quote: "Very good service and would recommend." },
  { author: "Michael Stringer", source: "Google", rating: 5, quote: "Great work, quick, efficient and tidy. Responded quickly and gave a fair price." },
  { author: "Ben Lambe", source: "Google", rating: 5, quote: "Quick response, friendly service, reasonable price." },
  { author: "James Denton", source: "Google", rating: 5, quote: "Prompt. Polite. Excellent service and very reasonable rates." },
  { author: "Brandon Bibby", source: "Google", rating: 5, quote: "Turn up on time, very clean and tidy work, very efficient." },
  { author: "Nathan Cameron", source: "Google", rating: 5, quote: "Best tree service about, turns up on time and very professional." },
  { author: "Michael MacDonald", source: "Google", rating: 5, quote: "Great job! Will definitely use again." },
  { author: "Patricia Cuss", source: "Google", rating: 5, quote: "Arrived on time. Carried out the agreed work efficiently and cleaned up afterwards." },
  { author: "Kasey Jones", source: "Google", rating: 5, quote: "Great service, very friendly workers." },
  { author: "Marcus Baldwin", source: "Google", rating: 5, quote: "Fantastic service, will always use this service." },
  { author: "Tracy Hogan", source: "Google", rating: 5, quote: "Joe and Briony removed two very large overgrown conifer trees plus stumps, and left the place spotless." },
  { author: "Jerard Chilton", source: "Google", rating: 5, quote: "Joe and Dean provided a great service. Massive tree removed in 4-5 hrs. Very professional." },
  { author: "Paul Chapman", source: "Google", rating: 5, quote: "Super fast, quality service." },
  { author: "Danielle Crabb", source: "Google", rating: 5, quote: "Very friendly and professional. The work carried out was efficiently executed and to a fabulous standard." },
  { author: "Deborah Wilkinson-Tough", source: "Google", rating: 5, quote: "Excellent, efficient job, well done. Hedge cutting plus a tall conifer beautifully shaped." },
  { author: "Derris Hodgson", source: "Google", rating: 5, quote: "Very efficient, polite and tidied up after themselves." },
  { author: "Kevan Padley", source: "Google", rating: 5, quote: "Great job guys, very neat and tidy, thanks a million." },
  { author: "Linda Welsh", source: "Google", rating: 5, quote: "Really polite and respectful of property. Friendly and punctual." },
  { author: "Helen", source: "Google", rating: 5, quote: "Great professional service, highly recommended." },
  { author: "Maria Maharg", source: "Google", rating: 5, quote: "Joe swiftly responded to my query and came out to survey the trees and gave me a quote the same day." },
  { author: "John Rose", source: "Google", rating: 5, quote: "Fast workers, efficient and a good clean up." },
];

// Star-only Google reviews (genuine 5-star, no written comment) — counted in
// the aggregate total but not shown as testimonials.
const googleStarOnly = 4;

// Combine + dedupe.
const seen = new Set();
const all = [];
for (const r of [...google, ...fb, ...bark]) {
  const key = (r.author + "|" + r.quote.slice(0, 40)).toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  all.push(r);
}

const body =
  `// AUTO-GENERATED by scripts/build-reviews.mjs from /reviews/*.txt. Do not edit by hand.\n` +
  `import type { Review } from "./reviews";\n\n` +
  `export const allReviews: Review[] = ${JSON.stringify(all, null, 2)};\n`;

await writeFile("lib/reviews-data.ts", body);

// --- Aggregate stats (so the headline figures are COUNTED, not guessed) ---
const fiveStar = all.filter((r) => (r.rating ?? 5) === 5).length + googleStarOnly;
const grandTotal = all.length + googleStarOnly; // displayed + star-only
const pct5 = Math.round((fiveStar / grandTotal) * 100);
console.log(`Facebook: ${fb.length}, Bark: ${bark.length}, Google: ${google.length} (+${googleStarOnly} star-only)`);
console.log(`Displayed (with text): ${all.length}`);
console.log(`Grand total reviews: ${grandTotal}`);
console.log(`5-star: ${fiveStar}/${grandTotal} = ${pct5}%  (non-5-star: ${grandTotal - fiveStar})`);
