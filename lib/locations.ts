/**
 * Location (service-area) definitions for Little Joe's Tree Services.
 *
 * These are the towns named on the indexed business listing (see
 * content/homepage.md). Per the SEO brief, location pages must contain genuinely
 * UNIQUE, useful local content, never the same page with the town name swapped.
 *
 * Each entry below has a distinct local hook and a paragraph of real local
 * context (landmarks, property/tree character, conservation notes). Local
 * geography is factual general knowledge; no business facts are invented.
 *
 * `primary: true` marks the eight towns called out on the homepage areas section.
 */

export type Location = {
  slug: string;
  name: string;
  county: string;
  postcodeArea: string;
  primary: boolean;
  metaTitle: string;
  metaDescription: string;
  /** Unique local opening hook (1 paragraph) */
  intro: string;
  /** Real local context, landmarks, property/tree character (1 paragraph) */
  localContext: string;
  /** Adjacent areas, used in internal-link prose */
  nearby: string[];
};

const meta = (name: string, hook: string) => ({
  metaTitle: `Tree Surgery ${name} | Little Joe's Tree Services`,
  metaDescription: `Tree surgery, stump grinding, hedge cutting, clearance and fencing in ${name}. ${hook} Fully insured, qualified, free estimates.`,
});

export const locations: Location[] = [
  {
    slug: "portsmouth",
    name: "Portsmouth",
    county: "Hampshire",
    postcodeArea: "PO",
    primary: true,
    ...meta("Portsmouth", "Local, tidy work for the city's gardens and boundaries."),
    intro:
      "Portsmouth is a dense, coastal city, and tree and garden work here comes with its own quirks, tight terraced gardens, limited access and trees that take a battering from the salt winds coming off the Solent.",
    localContext:
      "From the Victorian terraces of Southsea to the newer developments around Port Solent and Cosham, gardens across Portsea Island tend to be compact, so careful access and a tidy finish matter. Exposed, salt-laden conditions also mean coastal trees often need sensible reductions to keep them stable.",
    nearby: ["Gosport", "Havant", "Waterlooville", "Fareham"],
  },
  {
    slug: "havant",
    name: "Havant",
    county: "Hampshire",
    postcodeArea: "PO9",
    primary: true,
    ...meta("Havant", "Reliable tree and garden work across the borough."),
    intro:
      "Havant sits between Portsmouth and the Sussex border, close to Langstone Harbour and Hayling Island, with a mix of established residential streets and green, leafy pockets.",
    localContext:
      "Areas like Emsworth Road, Bedhampton and Leigh Park have plenty of mature gardens where trees and hedges need regular attention. With the harbour and water meadows nearby, drainage-loving species like willow are common and often need reducing to stay safe and manageable.",
    nearby: ["Emsworth", "Waterlooville", "Portsmouth", "Horndean"],
  },
  {
    slug: "fareham",
    name: "Fareham",
    county: "Hampshire",
    postcodeArea: "PO14",
    primary: true,
    ...meta("Fareham", "Practical tree care between Portsmouth and Southampton."),
    intro:
      "Fareham is a market town set around a creek between Portsmouth and Southampton, with everything from older town-centre properties to the large modern estates at Whiteley and Western Wards.",
    localContext:
      "The mix of established gardens near the town centre and newer landscaped estates means we see both mature trees that need managing and younger trees that need shaping early. The creek and low-lying ground around Wallington also bring the usual willow and poplar work.",
    nearby: ["Whiteley", "Gosport", "Portsmouth", "Eastleigh"],
  },
  {
    slug: "southampton",
    name: "Southampton",
    county: "Hampshire",
    postcodeArea: "SO",
    primary: true,
    ...meta("Southampton", "Tidy, safe tree work for the city and suburbs."),
    intro:
      "Southampton is a busy port city with a real spread of properties, from the tree-lined avenues around the Common and Bassett to the terraces of Portswood, Shirley and Woolston.",
    localContext:
      "The leafy suburbs to the north of the city are full of mature gardens with large, established trees that need proper reductions and pruning. Closer to the centre, access tends to be tighter, so controlled, careful work and a clean tidy-up afterwards make all the difference.",
    nearby: ["Eastleigh", "Hedge End", "Romsey", "Hythe"],
  },
  {
    slug: "winchester",
    name: "Winchester",
    county: "Hampshire",
    postcodeArea: "SO23",
    primary: false,
    ...meta("Winchester", "Considered tree care for a historic city."),
    intro:
      "Winchester is a historic cathedral city with period properties, established gardens and a lot of mature, much-loved trees, many of them in conservation areas or covered by Tree Preservation Orders.",
    localContext:
      "Around St Cross, the water meadows and the older parts of the city, trees are often protected, so it pays to check before work starts. We're happy to talk through what's likely to need council notification and to keep the work sympathetic to the setting.",
    nearby: ["Eastleigh", "Romsey", "Alton", "Andover"],
  },
  {
    slug: "andover",
    name: "Andover",
    county: "Hampshire",
    postcodeArea: "SP10",
    primary: false,
    ...meta("Andover", "Tree and garden work across the Test Valley town."),
    intro:
      "Andover, in the Test Valley to the north of the county, blends an older market-town core with large modern estates and a genuinely rural fringe out towards the surrounding villages.",
    localContext:
      "The newer estates around the edges of town tend to have younger, fast-growing trees and hedges that benefit from shaping and regular cutting, while the rural plots beyond often need bigger clearance and removal work. Open, exposed ground here can also leave trees more wind-prone.",
    nearby: ["Winchester", "Basingstoke", "Romsey"],
  },
  {
    slug: "aldershot",
    name: "Aldershot",
    county: "Hampshire",
    postcodeArea: "GU11",
    primary: false,
    ...meta("Aldershot", "Dependable tree work in the north-east of the county."),
    intro:
      "Aldershot, the historic home of the British Army, sits in the north-east corner of Hampshire near the Surrey border, with a dense mix of residential streets and plenty of green, wooded surroundings.",
    localContext:
      "The sandy, heathland soils around Aldershot and Farnborough suit pine and birch, which can grow tall and need sensible height reductions to stay safe near homes. Terraced and semi-detached gardens here often call for careful access and a proper clear-up.",
    nearby: ["Farnborough", "Fleet", "Basingstoke"],
  },
  {
    slug: "basingstoke",
    name: "Basingstoke",
    county: "Hampshire",
    postcodeArea: "RG21",
    primary: false,
    ...meta("Basingstoke", "Tree, hedge and clearance work across the town."),
    intro:
      "Basingstoke is one of north Hampshire's largest towns, with a real spread from established residential areas like Old Basing to the newer estates and business parks that ring the town.",
    localContext:
      "Mature suburbs such as South Ham and Brighton Hill have plenty of established trees needing reductions and crown work, while the commercial grounds and newer developments often need ongoing hedge cutting and clearance. We cover both domestic and commercial jobs here.",
    nearby: ["Hook", "Andover", "Aldershot"],
  },
  {
    slug: "farnborough",
    name: "Farnborough",
    county: "Hampshire",
    postcodeArea: "GU14",
    primary: false,
    ...meta("Farnborough", "Tidy tree care for homes across the town."),
    intro:
      "Farnborough, known the world over for its aviation heritage and airshow, sits beside Aldershot in north-east Hampshire and has a good mix of established and newer housing.",
    localContext:
      "The light, sandy soils and heathy surroundings here favour fast-growing conifers and birch, which often outgrow their space and need reducing or removing. Mature gardens around the older parts of town tend to have larger trees that benefit from regular, careful pruning.",
    nearby: ["Aldershot", "Fleet", "Hook"],
  },
  {
    slug: "fleet",
    name: "Fleet",
    county: "Hampshire",
    postcodeArea: "GU51",
    primary: false,
    ...meta("Fleet", "Premium tree and hedge care for a leafy commuter town."),
    intro:
      "Fleet is a leafy, sought-after commuter town in north-east Hampshire, with generous gardens, plenty of established trees and the well-known Fleet Pond nature reserve on its doorstep.",
    localContext:
      "The larger detached properties around Fleet and Church Crookham often have mature specimen trees and long boundary hedges that need proper, regular care to keep them looking their best. Near the pond and along the wooded fringes, drainage-loving species are common.",
    nearby: ["Farnborough", "Hook", "Aldershot"],
  },
  {
    slug: "gosport",
    name: "Gosport",
    county: "Hampshire",
    postcodeArea: "PO12",
    primary: false,
    ...meta("Gosport", "Coastal tree and garden work done properly."),
    intro:
      "Gosport sits on its own peninsula across the harbour from Portsmouth, a tightly built coastal town where gardens are often compact and exposed to the wind off the water.",
    localContext:
      "With the sea on three sides, trees and hedges in Gosport, Lee-on-the-Solent and Stokes Bay take a battering from salt winds and often need sensible reductions to stay stable. Tight access is common, so careful work and a clean finish are the priority.",
    nearby: ["Fareham", "Portsmouth"],
  },
  {
    slug: "eastleigh",
    name: "Eastleigh",
    county: "Hampshire",
    postcodeArea: "SO50",
    primary: false,
    ...meta("Eastleigh", "Reliable tree care between Southampton and Winchester."),
    intro:
      "Eastleigh sits between Southampton and Winchester, a town with strong railway roots and a broad mix of residential streets, parks and newer development at Boorley Green and Chandler's Ford.",
    localContext:
      "The established gardens around Chandler's Ford are known for their mature trees and tall conifers, which often need height reductions and careful pruning. Newer estates nearby tend to need ongoing hedge cutting and shaping of younger trees.",
    nearby: ["Southampton", "Winchester", "Hedge End", "Romsey"],
  },
  {
    slug: "emsworth",
    name: "Emsworth",
    county: "Hampshire",
    postcodeArea: "PO10",
    primary: true,
    ...meta("Emsworth", "Careful tree and garden work for the harbour village."),
    intro:
      "Emsworth is a pretty harbour village right on the Hampshire and West Sussex border, with characterful older properties around the millponds and quay and newer homes spreading inland.",
    localContext:
      "The period cottages and houses near the harbour often have mature, established trees in tight plots, so careful access and a tidy finish are essential. The damp, low-lying ground by the millponds suits willow and other water-loving trees that need regular management.",
    nearby: ["Havant", "Waterlooville", "Portsmouth"],
  },
  {
    slug: "hook",
    name: "Hook",
    county: "Hampshire",
    postcodeArea: "RG27",
    primary: false,
    ...meta("Hook", "Tree, hedge and clearance work for the village and beyond."),
    intro:
      "Hook is a well-connected north Hampshire village near Basingstoke, popular with commuters and surrounded by genuinely rural countryside, paddocks and woodland.",
    localContext:
      "Many properties here have generous gardens and long boundaries backing onto fields, so hedge cutting, larger tree work and clearance are all common. The rural plots beyond the village often need bigger jobs, from removals to clearing overgrown ground.",
    nearby: ["Basingstoke", "Fleet", "Farnborough"],
  },
  {
    slug: "waterlooville",
    name: "Waterlooville",
    county: "Hampshire",
    postcodeArea: "PO7",
    primary: true,
    ...meta("Waterlooville", "Tree and garden work across the town and villages."),
    intro:
      "Waterlooville sits just north of Portsmouth on the edge of the South Downs, with large residential areas at Cowplain, Denmead and Horndean and the countryside of Queen Elizabeth Country Park close by.",
    localContext:
      "The estates around Waterlooville and Cowplain are full of established gardens with trees and hedges that need regular work, while the properties closer to the Downs often back onto woodland and need bigger tree and clearance jobs. Chalky downland soil shapes what grows well here.",
    nearby: ["Horndean", "Denmead", "Havant", "Portsmouth"],
  },
  {
    slug: "alton",
    name: "Alton",
    county: "Hampshire",
    postcodeArea: "GU34",
    primary: false,
    ...meta("Alton", "Sympathetic tree care for the market town."),
    intro:
      "Alton is a historic East Hampshire market town in Jane Austen country, surrounded by wooded hangers and rolling countryside, with a real mix of period and modern homes.",
    localContext:
      "The steep, wooded hangers around Alton and Chawton mean many gardens back onto established woodland with large mature trees that need careful, considered work. Older properties in the town often have protected trees, so it's worth checking before any major pruning or removal.",
    nearby: ["Winchester", "Petersfield", "Basingstoke"],
  },
  {
    slug: "petersfield",
    name: "Petersfield",
    county: "Hampshire",
    postcodeArea: "GU31",
    primary: true,
    ...meta("Petersfield", "Quality tree care for the South Downs market town."),
    intro:
      "Petersfield is a handsome market town set right inside the South Downs National Park, with a bustling square, period properties and the much-loved Heath Pond on its edge.",
    localContext:
      "Being within the National Park, many trees around Petersfield and the surrounding villages are protected, and the older properties near the centre often have mature, characterful trees in established gardens. We keep work sympathetic to the setting and can advise on what may need council notification.",
    nearby: ["Liphook", "Alton", "Havant"],
  },
  {
    slug: "whiteley",
    name: "Whiteley",
    county: "Hampshire",
    postcodeArea: "PO15",
    primary: false,
    ...meta("Whiteley", "Tree and hedge care for a modern Hampshire village."),
    intro:
      "Whiteley is one of Hampshire's newer communities, a planned village near Fareham known for its shopping centre and well-landscaped, modern housing estates.",
    localContext:
      "Because so much of Whiteley is recently built, gardens here tend to have young and semi-mature trees and tidy boundary hedges that benefit from early, regular shaping to keep them in good order. Plenty of landscaped communal areas and screening planting need ongoing maintenance too.",
    nearby: ["Fareham", "Southampton", "Eastleigh"],
  },
  {
    slug: "romsey",
    name: "Romsey",
    county: "Hampshire",
    postcodeArea: "SO51",
    primary: false,
    ...meta("Romsey", "Tree and garden work in the Test Valley."),
    intro:
      "Romsey is a charming Test Valley market town, home to Romsey Abbey and the Broadlands estate, with the River Test running close by and countryside all around.",
    localContext:
      "The riverside setting means willow, alder and poplar are common around Romsey and need regular management, while the older town properties and surrounding country homes often have mature trees and long hedges. We handle both domestic gardens and larger rural plots here.",
    nearby: ["Southampton", "Eastleigh", "Winchester", "Andover"],
  },
  {
    slug: "horndean",
    name: "Horndean",
    county: "Hampshire",
    postcodeArea: "PO8",
    primary: false,
    ...meta("Horndean", "Tree and clearance work on the edge of the Downs."),
    intro:
      "Horndean is a village just north of Waterlooville on the edge of the South Downs, close to Queen Elizabeth Country Park and surrounded by chalk downland and woodland.",
    localContext:
      "Many homes around Horndean and Catherington back onto fields or woodland, so larger tree work, hedge cutting and clearance are all common. The chalky downland soil and exposed higher ground influence which trees thrive and how they need managing.",
    nearby: ["Waterlooville", "Denmead", "Petersfield", "Havant"],
  },
  {
    slug: "liphook",
    name: "Liphook",
    county: "Hampshire",
    postcodeArea: "GU30",
    primary: false,
    ...meta("Liphook", "Tree care for the wooded edge of the South Downs."),
    intro:
      "Liphook is a large village in the far east of Hampshire, set among the heathland and woodland on the edge of the South Downs, close to the Surrey and West Sussex borders.",
    localContext:
      "The wooded, heathy surroundings around Liphook and Bramshott mean plenty of pine, birch and oak, with many properties backing straight onto woodland. Larger tree work, careful reductions and clearance are common, and some trees here are protected given the landscape setting.",
    nearby: ["Petersfield", "Alton"],
  },
  {
    slug: "hythe",
    name: "Hythe",
    county: "Hampshire",
    postcodeArea: "SO45",
    primary: false,
    ...meta("Hythe", "Tree and garden work on the New Forest fringe."),
    intro:
      "Hythe sits on the western shore of Southampton Water, famous for its pier and ferry, on the edge of the New Forest with its waterfront properties and wooded surroundings.",
    localContext:
      "With the New Forest on the doorstep, gardens around Hythe and Dibden Purlieu often have mature forest-edge trees like oak and pine that need careful management. The waterside location also brings exposure to wind, so sensible reductions help keep coastal trees stable.",
    nearby: ["Southampton", "Romsey"],
  },
  {
    slug: "hedge-end",
    name: "Hedge End",
    county: "Hampshire",
    postcodeArea: "SO30",
    primary: false,
    ...meta("Hedge End", "Tree, hedge and clearance work for a growing town."),
    intro:
      "Hedge End is a growing town between Southampton and Eastleigh, with a blend of long-established neighbourhoods and a good deal of newer residential development.",
    localContext:
      "The mature parts of Hedge End and nearby West End have established gardens with larger trees and hedges needing regular work, while the newer estates tend to need shaping of younger trees and tidy hedge cutting. We cover both ends of that spectrum locally.",
    nearby: ["Southampton", "Eastleigh", "Whiteley"],
  },
  {
    slug: "denmead",
    name: "Denmead",
    county: "Hampshire",
    postcodeArea: "PO7",
    primary: false,
    ...meta("Denmead", "Rural tree and garden work near the Downs."),
    intro:
      "Denmead is a village just north-west of Waterlooville, surrounded by farmland and close to the South Downs, with a rural feel and generous, leafy gardens.",
    localContext:
      "Many Denmead properties have large gardens and boundaries backing onto fields and woodland, so bigger tree work, long hedge runs and clearance jobs are common. The rural setting near the Downs means established trees and the occasional protected specimen.",
    nearby: ["Waterlooville", "Horndean", "Havant"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugs = locations.map((l) => l.slug);

/** The eight towns called out on the homepage areas section. */
export const primaryLocations = locations.filter((l) => l.primary);
