/**
 * FAQ content. Answers are taken from the approved draft and rewritten as clean,
 * customer-facing British English (the draft phrased them as "the Facebook
 * profile states…", which is a note to the writer, not publishable copy). Every
 * factual claim here is one already confirmed in PROJECT-BRIEF / homepage.md.
 *
 * Used on /faq (with FAQPage schema) and selectively on service pages.
 */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer free, no-obligation estimates. Tell us about the job, send a few photos if you can, and we'll give you a clear price. For larger or trickier jobs we'll arrange to come and look properly first.",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we are fully insured for the tree and garden work we carry out.",
  },
  {
    question: "Are you qualified?",
    answer:
      "Yes, we are NPTC and City & Guilds qualified, so the work is done to a proper standard with the right approach and equipment.",
  },
  {
    question: "Do you cover my area?",
    answer:
      "We work across Hampshire and the surrounding areas, including Portsmouth, Havant, Fareham, Southampton, Winchester, Waterlooville, Petersfield and Emsworth. If you're nearby, get in touch and we'll quickly let you know whether we can help.",
  },
  {
    question: "Do you do emergency call-outs?",
    answer:
      "Yes, we offer 24/7 emergency call-outs for storm damage, fallen or hanging branches and trees that have suddenly become unsafe. Call us and tell us what's happened and we'll do our best to respond quickly.",
  },
  {
    question: "Can you remove the stump after cutting down a tree?",
    answer:
      "Yes. We can grind out and remove the stump after felling, so you're not left with a stump to work around when you want to replant, turf, pave or fence the area.",
  },
  {
    question: "Do you clear away the waste?",
    answer:
      "Yes, we clear up properly, take away the green waste and timber, and leave the area tidy. We aim to leave every job clean, the way we'd want it left at our own place.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "The easiest way is to call us on 07519 744 790 or use the contact form to send your details, your postcode and a few photos of the job. We'll come back to you as soon as we can.",
  },
];
