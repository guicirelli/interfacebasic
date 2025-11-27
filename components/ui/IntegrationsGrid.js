export default function IntegrationsGrid({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
      {items.map((name, i) => (
        <div key={i} className="text-center border border-gray-100 bg-white rounded-md py-3 text-sm shadow-sm">
          {name}
        </div>
      ))}
    </div>
  );
}


