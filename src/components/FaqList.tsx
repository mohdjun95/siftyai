import type { Faq } from "@/lib/nytcrew";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-[#d5e5e1] border-y border-[#d5e5e1]">
      {faqs.map((f) => (
        <div key={f.q} className="py-6">
          <h3 className="text-xl font-bold text-ink">{f.q}</h3>
          <p className="mt-2 leading-[1.65] text-ink-soft">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
