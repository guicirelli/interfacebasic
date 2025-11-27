export default function LogosStrip({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6 opacity-70">
        {items.map((name, i) => (
          <div key={i} className="px-4 py-2 rounded-md bg-gray-50 text-sm">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}


