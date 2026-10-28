export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Static, site-authored data only; never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
