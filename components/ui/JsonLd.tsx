/**
 * Renders a JSON-LD <script> tag. Server component, schema is in the initial
 * HTML for crawlers. Pass any schema object from lib/schema.ts.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is generated from our own typed data, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
