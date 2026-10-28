import type { Faq } from "@/lib/nytcrew";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {faqs.map((f) => (
        <div key={f.q} className="py-6">
          <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
