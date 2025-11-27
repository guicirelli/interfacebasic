import * as Icons from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

export default function FeatureCard({ icon, title, description, microBenefits }) {
  const IconComponent = Icons[icon] || Icons.FiStar;
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
      <div className="text-brand text-4xl mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Microbenefícios */}
      {microBenefits && microBenefits.length > 0 && (
        <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100">
          {microBenefits.map((benefit, i) => (
            <li key={i} className="flex items-start text-sm text-gray-600">
              <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

