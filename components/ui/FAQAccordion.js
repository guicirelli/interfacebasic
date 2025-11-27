export default function FAQAccordion({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((faq, i) => (
        <details key={i} className="group border border-gray-200 rounded-lg p-4 bg-white">
          <summary className="cursor-pointer list-none font-medium">
            {faq.q}
          </summary>
          <p className="mt-2 text-gray-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}


