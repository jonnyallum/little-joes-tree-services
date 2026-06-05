import Image from "next/image";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

/** Editorial intro, approved homepage copy paired with a real job photo. */
export function IntroStatement() {
  return (
    <Section tone="transparent" className="py-12 sm:py-16">
      <Container size="wide">
        <div className="surface-card grid items-center gap-10 rounded-[2rem] p-6 shadow-xl sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <Reveal className="order-2 lg:order-1" scale>
            <div className="relative overflow-hidden rounded-[2rem] border border-forest-900/10 shadow-lift">
              <Image
                src="/services/tree-surgery.jpg"
                alt="Little Joe's arborist roped up and working high in a tree with a chainsaw"
                width={1400}
                height={788}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-balance font-display text-2xl font-medium leading-snug text-forest-900 sm:text-[1.9rem]">
                At Little Joe&rsquo;s Tree Service, we keep things simple. You tell us what
                needs doing, we come out, have a proper look, and give you honest advice on
                the best way to deal with it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-bone-700">
                Some jobs are straightforward. Some need a bit more planning, especially
                where access is tight, branches are overhanging buildings, or the tree has
                become unsafe. Either way, the aim is the same: safe work, fair pricing,
                and a job done properly from start to finish.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
