import { FiCheck } from 'react-icons/fi';

export default function PricingCard({ name, price, period, features, cta, featured }) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg relative ${featured ? 'border-2 border-brand transform scale-105' : ''}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold">
          Mais Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">{period}</span>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full ${featured ? 'btn btn-primary' : 'btn btn-outline text-brand border-brand'}`}>
        {cta}
      </button>
    </div>
  );
}

