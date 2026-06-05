import { Container } from "./ui/Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { OakTree } from "./Illustration";

/**
 * Inner-page hero banner over the site-wide woodland backdrop: a light green
 * scrim, white breadcrumbs + H1 + intro, and a stylised green oak illustration.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="surface-mesh relative overflow-hidden">
      <OakTree className="pointer-events-none absolute -bottom-6 right-4 hidden h-72 w-72 opacity-90 lg:block xl:right-16" />

      <div className="relative py-14 sm:py-16 lg:py-20">
        <Container size="wide">
          <div className="lg:max-w-3xl">
            {breadcrumbs && (
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbs} onDark />
              </div>
            )}
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
                <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
                {eyebrow}
              </p>
            )}
            <h1 className="text-shadow-forest max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {intro && (
              <p className="text-shadow-forest mt-5 max-w-2xl text-lg leading-relaxed text-bone-100">{intro}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </Container>
      </div>
    </section>
  );
}
