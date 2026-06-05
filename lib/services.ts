/**
 * Service definitions for Little Joe's Tree Services.
 *
 * Long-form copy is taken from the approved draft (content/homepage.md).
 * Where the draft contained notes written TO the copywriter (e.g. "the Facebook
 * profile lists fencing as a service, so this page should…"), those are NOT
 * publishable customer copy, they have been converted to their plain
 * British-English customer-facing intent. The factual claims (services offered,
 * 24/7 call-outs, free estimates) are preserved exactly.
 *
 * Each service drives /services/[slug]. Keep this list aligned with the sitemap.
 */

export type Service = {
  slug: string;
  /** Page H1 */
  title: string;
  /** Short label for nav, cards and breadcrumbs */
  navLabel: string;
  /** One-line summary for service cards */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraphs (unique long-form copy) */
  intro: string[];
  /** Editorial subheadings + supporting copy */
  sections: { heading: string; body: string }[];
  /** "When people need this", concrete prompts for the customer */
  whenYouNeedIt: string[];
  /** Featured on the homepage services grid */
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "tree-surgery",
    title: "Tree surgery in Hampshire",
    navLabel: "Tree surgery",
    summary:
      "Pruning, reductions and safe cutting for overgrown or unsafe trees, done cleanly and tidily.",
    metaTitle: "Tree Surgery Hampshire | Little Joe's Tree Services",
    metaDescription:
      "Safe, tidy tree surgery across Hampshire for homes and businesses. Free estimates from a qualified, fully insured local team.",
    intro: [
      "If a tree is overgrown, unsafe, blocking light, hanging over a road or building, or just needs bringing back under control, we can help. We carry out tree surgery across Hampshire for domestic and commercial customers, with a practical approach that keeps safety and tidy workmanship front and centre.",
      "Every tree and every site is different, so we do not treat jobs as one-size-fits-all. Some trees need careful pruning, some need reducing, and some are past the point of saving and need removing properly. We come out, look at the tree in person and explain what makes the most sense.",
      "Our tree surgery work is suited to gardens, driveways, boundaries, commercial grounds and awkward access jobs. Whether the aim is safety, light, space, appearance or preventing further damage, we focus on doing the work cleanly and leaving the area sorted when we are done.",
    ],
    sections: [
      {
        heading: "Tree pruning and reduction",
        body: "Careful pruning and crown reduction to bring a tree back into a sensible shape, let more light through and ease pressure on nearby buildings, fences and boundaries, without butchering it.",
      },
      {
        heading: "Safe tree cutting near homes and buildings",
        body: "Tight access, overhanging branches and structures nearby all need planning. We assess the space properly and work in a controlled way so nothing gets damaged and the area stays safe throughout.",
      },
      {
        heading: "Qualified and insured tree surgeons in Hampshire",
        body: "We are NPTC and City & Guilds qualified and fully insured, so the work is done to a proper standard with the right kit and the right approach for the job.",
      },
    ],
    whenYouNeedIt: [
      "A tree has become overgrown or is blocking light",
      "Branches are hanging over a road, drive or building",
      "A tree looks unsafe or has started to lean",
      "You want a tree reduced rather than removed",
    ],
    featured: true,
  },
  {
    slug: "tree-removal",
    title: "Tree removal in Hampshire",
    navLabel: "Tree removal",
    summary:
      "Safe, controlled removal of dead, damaged or in-the-way trees, timber and stump dealt with too.",
    metaTitle: "Tree Removal Hampshire | Safe Local Tree Work",
    metaDescription:
      "Professional tree removal in Hampshire for damaged, dangerous or unwanted trees. Safe work, tidy finish and free estimates.",
    intro: [
      "Sometimes a tree has to come down. It may be dead, damaged, diseased, storm-hit, too close to a structure, or simply in the way of planned work on the property. When that is the case, we carry out safe and controlled tree removals across Hampshire.",
      "Tree removal is not about rushing in and hacking away. It needs the right approach, the right equipment and a proper understanding of the space around it, especially where there are sheds, fences, greenhouses, vehicles or neighbouring properties nearby. That is why we assess each job properly before starting.",
      "Once the tree is down, we can also deal with the timber, clear the waste and grind out the stump if needed. That way, you are not left with half a job or a mess to sort afterwards.",
    ],
    sections: [
      {
        heading: "Controlled, sectional felling",
        body: "Where there isn't room to fell a tree in one piece, we take it down in sections, lowering limbs carefully so the work stays safe around buildings, boundaries and anything underneath.",
      },
      {
        heading: "Timber, waste and stump sorted",
        body: "We can clear the timber and green waste and grind the stump out afterwards, so you're left with a usable space rather than half a job and a mess.",
      },
    ],
    whenYouNeedIt: [
      "A tree is dead, dying or diseased",
      "Storm damage has left a tree unstable",
      "A tree is too close to a building or boundary",
      "A tree is in the way of building or landscaping work",
    ],
    featured: true,
  },
  {
    slug: "stump-grinding",
    title: "Stump grinding and stump removal in Hampshire",
    navLabel: "Stump grinding",
    summary:
      "Grind out old or new stumps so you can replant, turf, pave or fence the space properly.",
    metaTitle: "Stump Grinding Hampshire | Stump Removal Services",
    metaDescription:
      "Stump grinding and stump removal across Hampshire. Clear old stumps properly and make your garden or site usable again.",
    intro: [
      "A stump left in the ground can be awkward, ugly and a pain to work around. It gets in the way when you want to replant, turf the area, extend a driveway, put up fencing or just tidy the garden up properly.",
      "We provide stump grinding and stump removal across Hampshire, using the right method for the size and location of the stump. Whether it is an old stump that has been there for years or one left after recent tree work, we can get it taken care of so the space can be used properly again.",
      "If access is tight, let us know when you enquire. We can normally advise what is workable and whether we need to see the site first.",
    ],
    sections: [
      {
        heading: "The right method for the stump",
        body: "Size, species and where the stump sits all change the approach. We match the method to the job so the grinding is efficient and tidy, whatever you've got.",
      },
      {
        heading: "Ready to replant, turf or pave",
        body: "Once the stump is ground out and the arisings cleared, the ground is ready to be reused, for new planting, turf, a drive, a patio or fencing.",
      },
    ],
    whenYouNeedIt: [
      "You want to replant or re-turf where a tree once stood",
      "A stump is in the way of a drive, patio or fence",
      "An old stump is making the garden hard to maintain",
      "You've had tree work done and want the stump gone",
    ],
    featured: true,
  },
  {
    slug: "hedge-cutting",
    title: "Hedge cutting in Hampshire",
    navLabel: "Hedge cutting",
    summary:
      "Regular trims and heavy cut-backs on overgrown hedges, finished neatly to shape.",
    metaTitle: "Hedge Cutting Hampshire | Hedge Trimming and Reduction",
    metaDescription:
      "Hedge cutting and hedge reduction across Hampshire. From regular trimming to overgrown hedge clearance, done safely and neatly.",
    intro: [
      "Hedges can quickly get out of hand if they are left too long. They start blocking paths, driveways and windows, creep into neighbouring space and make the whole garden feel scruffy. We provide hedge cutting and hedge reduction services across Hampshire to keep things neat, manageable and under control.",
      "Some customers want a regular tidy-up, while others need a heavy cut-back on an overgrown hedge that has not been touched in years. Either way, we work to the shape and condition of the hedge and aim for a clean finish rather than a rough chop.",
      "We can help with boundary hedges, garden hedges, screening hedges and larger overgrown runs. If you are not sure how much can safely come off, we can advise when we see it.",
    ],
    sections: [
      {
        heading: "Regular trims and one-off tidy-ups",
        body: "Whether you want a hedge kept in shape through the season or a single sharp tidy-up, we cut to the line and shape of the hedge for a clean, even finish.",
      },
      {
        heading: "Reducing overgrown hedges",
        body: "For hedges that have got away from you, we take the height and width back sensibly, and let you know up front how much can safely come off without damaging the hedge.",
      },
    ],
    whenYouNeedIt: [
      "A hedge is blocking a path, drive or window",
      "Your hedge needs a regular seasonal trim",
      "An overgrown hedge needs taking back hard",
      "A boundary or screening hedge needs reshaping",
    ],
    featured: true,
  },
  {
    slug: "site-clearance",
    title: "Site clearance in Hampshire",
    navLabel: "Site clearance",
    summary:
      "Clear overgrown plots and outdoor areas back to usable, safe and accessible ground.",
    metaTitle: "Site Clearance Hampshire | Overgrown Land Cleared",
    metaDescription:
      "Site and garden clearance in Hampshire for overgrown outdoor spaces, plots and problem areas. Free estimates available.",
    intro: [
      "If you have a garden, plot or outdoor area that has become overgrown and needs clearing back properly, we can help get it under control. Site clearance work is often the first step before landscaping, fencing, building work or general improvement of the space.",
      "We clear unwanted growth, cut back heavy vegetation and remove the mess so the site is left usable again. Some jobs are just about tidying up, while others are more about making a neglected area safe and accessible.",
      "If you have a larger area to clear, the best thing is usually to send over photos first. That lets us get a feel for the scale of the work and arrange a proper visit if needed.",
    ],
    sections: [
      {
        heading: "The first step before bigger work",
        body: "Clearing a site is often what has to happen before landscaping, fencing or building can start. We get the ground back to a clean, workable state so the next stage can go ahead.",
      },
      {
        heading: "Heavy vegetation and waste removed",
        body: "We cut back dense overgrowth, deal with unwanted growth and take the waste away, leaving the area safe and accessible rather than a jungle.",
      },
    ],
    whenYouNeedIt: [
      "A plot is overgrown ahead of building or landscaping",
      "An outdoor area has become unsafe or inaccessible",
      "You've taken on a property that needs resetting outside",
      "A commercial site needs clearing back",
    ],
    featured: false,
  },
  {
    slug: "garden-clearance",
    title: "Garden clearance in Hampshire",
    navLabel: "Garden clearance",
    summary:
      "Bring an overgrown garden back to something clean, usable and easy to keep on top of.",
    metaTitle: "Garden Clearance Hampshire | Overgrown Gardens Cleared",
    metaDescription:
      "Garden clearance across Hampshire, overgrowth, shrubs, green waste and neglected spaces cleared and left tidy. Free estimates available.",
    intro: [
      "Overgrown gardens can get away from people for all sorts of reasons. Sometimes life gets busy, sometimes a property has been left empty, and sometimes the whole space just needs resetting so it can be enjoyed again.",
      "We offer garden clearance work across Hampshire to help bring outdoor spaces back into shape. That can include cutting back overgrowth, dealing with unwanted shrubs or small trees, clearing green waste and making the place look cared for again.",
      "The aim is not to make it sound glamorous. It is simply about getting the garden from hard work and hassle back to something clean, usable and easier to keep on top of.",
    ],
    sections: [
      {
        heading: "Overgrowth, shrubs and small trees",
        body: "We cut back overgrowth, deal with unwanted shrubs and small trees, and clear the green waste so the garden is left tidy rather than half-done.",
      },
      {
        heading: "A reset you can actually maintain",
        body: "The point of a clearance is to hand you back a space that's easy to keep on top of, not just tidy for a week. We leave it in a state you can manage.",
      },
    ],
    whenYouNeedIt: [
      "A garden has become overgrown and unmanageable",
      "A property has been empty and the garden needs resetting",
      "You're preparing a home to sell or let",
      "You want green waste and unwanted shrubs cleared",
    ],
    featured: false,
  },
  {
    slug: "fencing",
    title: "Fencing services in Hampshire",
    navLabel: "Fencing",
    summary:
      "Repair or replace damaged and worn fencing, on its own or alongside tree and clearance work.",
    metaTitle: "Fencing Hampshire | Garden and Boundary Fencing",
    metaDescription:
      "Fencing services in Hampshire for damaged, tired or replacement fencing. Enquire for a free estimate.",
    intro: [
      // The draft's opening sentence was a note to the writer ("the Facebook
      // profile lists fencing…"); replaced here with the customer-facing intent.
      "Fencing is one of the services we offer, and we keep it clear and practical. If your fencing is damaged, worn out, blown over or just needs replacing as part of a bigger garden tidy-up, we can help.",
      "Good fencing makes a real difference to privacy, boundaries and the overall look of a property. We can quote for fencing work on its own or alongside tree, hedge or clearance jobs where it makes sense to tackle everything at once.",
      "If you already know the rough length and type of fencing you need, send that over with a few photos. If not, we can come out and measure up properly.",
    ],
    sections: [
      {
        heading: "Repairs and full replacements",
        body: "From a few storm-damaged panels to a full run of new fencing, we sort boundaries that are damaged, rotten or blown over and leave them solid again.",
      },
      {
        heading: "Combine it with your tree or clearance job",
        body: "If you're already having tree, hedge or clearance work done, it often makes sense to tackle the fencing at the same time. We can quote for it together.",
      },
    ],
    whenYouNeedIt: [
      "Fence panels are damaged, rotten or blown over",
      "A boundary needs replacing or re-doing",
      "You're tidying a garden and the fencing needs sorting too",
      "You want privacy or a clear boundary line restored",
    ],
    featured: false,
  },
  {
    slug: "emergency-tree-work",
    title: "Emergency tree work in Hampshire",
    navLabel: "Emergency tree work",
    summary:
      "24/7 call-outs for storm damage, fallen branches and unstable trees, fast, safe response.",
    metaTitle: "Emergency Tree Work Hampshire | 24/7 Call-Outs",
    metaDescription:
      "Emergency tree work across Hampshire. Call for urgent help with storm damage, dangerous branches and unstable trees.",
    intro: [
      "When a tree or large branch comes down unexpectedly, it needs dealing with quickly and safely. We offer 24/7 emergency call-outs, so there is someone to turn to when a tree suddenly becomes an urgent problem.",
      "Storm damage, split branches, hanging limbs and unstable trees can all become serious hazards, especially near roads, houses, parked vehicles and footpaths. In those cases, the first priority is making the area safe and getting the risk under control.",
      "If you have an emergency tree issue, call us straight away and explain what has happened, where you are, and whether anything has been damaged or blocked. We will do our best to respond quickly and advise what to do next.",
    ],
    sections: [
      {
        heading: "Make the area safe first",
        body: "With storm damage and hanging limbs, the immediate job is getting the hazard under control, clearing what's dangerous and making the area safe around roads, homes and vehicles.",
      },
      {
        heading: "Call and tell us what's happened",
        body: "Ring us, tell us where you are and what's come down or been blocked, and we'll do our best to respond quickly and advise on what to do next.",
      },
    ],
    whenYouNeedIt: [
      "A tree or large branch has come down in a storm",
      "A limb is hanging dangerously over a road or home",
      "A tree has become unstable and is a risk",
      "Something has been blocked or damaged by a fallen tree",
    ],
    featured: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

/** Services highlighted on the homepage grid. */
export const featuredServices = services.filter((s) => s.featured);
